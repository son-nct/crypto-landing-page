<template lang="pug">
.modal(v-if='showModal')
    .modal-content(ref='modalContent')
        button.close-button(@click='closeModal')
            span(class='-mt-1')  &times;
        .w-full.flex.items-center.justify-center 
            .w-32.h-10.bg-card.flex.items-center.justify-center
                img(src='~/assets/imgs/icons/magnify-plus.svg' width="32" height="32" alt='homepage' class="mr-4 cursor-pointer" loading='lazy' @click='isZoomed = true')
                img(src='~/assets/imgs/icons/magnify-minus.svg' width="32" height="32" alt='homepage' class="cursor-pointer" loading='lazy' @click='resetZoom')
        .img-container(:class="{ 'zoomed': isZoomed }")
            //- img(ref='imgZoom', :src='imageUrl', alt='Popup Image', :style="imgStyle", @mousedown="startDrag", @mousemove="isDragging", @mouseup="endDrag", @mouseleave="endDrag")
            img(ref='imgZoom', src='~/assets/imgs/Flow_Product.png', alt='Popup Image', :style="imgStyle", @mousedown="startDrag", @mousemove="isDragging", @mouseup="endDrag", @mouseleave="endDrag")
           
</template>
      
<script setup>

const props = defineProps({
    showModal: Boolean,
    imageUrl: String
});


const showModalImage = inject('closeModal')

const emits = defineEmits(['update:showModal']);
const imgZoom = ref(null)
const modalContent = ref(null);
const isZoomed = ref(false);
const dragging = ref(false);
const position = ref({ x: 0, y: 0, startX: 0, startY: 0 });
const zoomScale = 1.5;


const resetZoom = () => {
    isZoomed.value = false
    resetDragState()
}

const closeModal = () => {
    showModalImage.value = false
    isZoomed.value = false
    resetDragState()
};

const resetDragState = () => {
    dragging.value = false;
    position.value = { x: 0, y: 0, startX: 0, startY: 0 };
};

const imgStyle = computed(() => {
    const transformStyle = `scale(${isZoomed.value ? zoomScale : 1}) translate(${position.value.x}px, ${position.value.y}px)`;
    return `transform: ${transformStyle}; cursor: ${dragging.value ? 'grabbing' : 'grab'};`;
});

const toggleZoom = () => {
    isZoomed.value = !isZoomed.value;
    resetDragState();
};

const startDrag = (event) => {
    if (!isZoomed.value) return;
    dragging.value = true;
    position.value.startX = event.clientX;
    position.value.startY = event.clientY;
};

const isDragging = (event) => {
    if (!dragging.value || !isZoomed.value || !imgZoom.value || !modalContent.value) return;

    const deltaX = event.clientX - position.value.startX;
    const deltaY = event.clientY - position.value.startY;

    // Container's dimensions
    const containerRect = modalContent.value.getBoundingClientRect();

    // Calculate the zoomed dimensions of the image
    const zoomedWidth = imgZoom.value.width * zoomScale;
    const zoomedHeight = imgZoom.value.height * zoomScale;

    // Calculate the boundaries for dragging based on the difference between
    // the zoomed image dimensions and the container dimensions
    const maxXTranslation = Math.max(0, (zoomedWidth - containerRect.width) / 2);
    const maxYTranslation = Math.max(0, (zoomedHeight - containerRect.height) / 2);

    // Calculate the new translation
    let newXTranslation = position.value.x + deltaX;
    let newYTranslation = position.value.y + deltaY;

    // Constrain the new translation to the maximum allowed values
    newXTranslation = Math.max(Math.min(newXTranslation, maxXTranslation), -maxXTranslation);
    newYTranslation = Math.max(Math.min(newYTranslation, maxYTranslation), -maxYTranslation);

    // newXTranslation = Math.max(newXTranslation, -218);


    // Update the position
    position.value.x = newXTranslation;
    position.value.y = newYTranslation;

    // Update start positions for the next drag event
    position.value.startX = event.clientX;
    position.value.startY = event.clientY;
};


const endDrag = () => {
    dragging.value = false;
};

watch(() => props.showModal, (newValue) => {
    if (!newValue) resetDragState();
});
</script>

      
<style lang="scss">
.modal {
    @apply fixed inset-0 flex items-center justify-center bg-black/40;
    z-index: 50;

    .modal-content {
        @apply mx-auto px-6 py-10 bg-bgModal/80 shadow-lg rounded-lg relative w-screen lg:w-[80%];
        z-index: 60;

        .close-button {
            @apply absolute top-2 right-4 translate-y-2 w-10 h-10 bg-neutralPink text-dark rounded-full flex items-center justify-center text-3xl font-bold cursor-pointer;
            z-index: 70;
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

            &:hover {
                @apply bg-dark text-white;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
        }

        .img-container {
            @apply overflow-hidden;

            img {
                transition: transform 0.3s ease;

                @apply w-full h-full object-contain;

                &:active {
                    cursor: grabbing;
                }
            }
        }

        .close {
            @apply text-3xl font-bold cursor-pointer absolute top-4 right-4;
        }
    }
}
</style>
    