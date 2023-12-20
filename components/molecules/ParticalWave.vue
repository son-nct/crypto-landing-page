<template lang="pug">
#particalWave(ref='container')
  slot
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const container = ref(null);
const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
let camera, scene, renderer;
let particles = [];
// let particles, particle, count = 0;
let stats;
let count = 0;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;


onMounted(async () => {
  const THREE = await import('three');
  init(THREE);
  animate();

  // Add event listeners
  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('touchstart', onDocumentTouchStart);
  document.addEventListener('touchmove', onDocumentTouchMove);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  document.removeEventListener('mousemove', onDocumentMouseMove);
  document.removeEventListener('touchstart', onDocumentTouchStart);
  document.removeEventListener('touchmove', onDocumentTouchMove);
});

function init(THREE) {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  scene = new THREE.Scene();

  // Create a canvas element to draw a circle
  const canvas = document.createElement('canvas');
  canvas.width = 512; // Increase canvas size for a bigger circle
  canvas.height = 512;
  const context = canvas.getContext('2d');

  // Draw a white circle in the canvas
  const center = 256; // As the canvas is 256x256, the center is at 128,128
  const radius = 200; // Increase the radius of the circle
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2, true);
  context.fillStyle = 'white';
  context.fill();

  // Use the canvas as a texture
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true; // Update the texture with the canvas content

  const material = new THREE.SpriteMaterial({
    map: texture,
    color: 0xcbfb45,
    // size: 3
  });

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = new THREE.Sprite(material);
      particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
      particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
      scene.add(particle);
      particles.push(particle);
    }
  }

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  if (window.innerWidth <= 768) {
    // For small devices, set a fixed height (e.g., 1200px)
    renderer.setSize(container.value.clientWidth, 1200);
  } else {
    // For large devices, use the full window height
    renderer.setSize(container.value.clientWidth, window.innerHeight);
  }
  renderer.setClearColor(0x171616); // Set the background color
  container.value.appendChild(renderer.domElement);
}

function onWindowResize() {
  if (window.innerWidth >= 768) {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function animate() {
  requestAnimationFrame(animate);

  camera.position.x += (mouseX - camera.position.x) * 0.3;
  camera.position.y += (-mouseY - camera.position.y) * 0.3;
  camera.lookAt(scene.position);

  for (let i = 0, ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
    }
  }

  renderer.render(scene, camera);
  count += 0.1;
}

function render() {
  renderer.setClearColor(0x07074e, 1);
  camera.position.x += (mouseX - camera.position.x) * .05;
  camera.position.y += (- mouseY - camera.position.y) * .05;
  camera.lookAt(scene.position);
  var i = 0;
  for (var ix = 0; ix < AMOUNTX; ix++) {
    for (var iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
    }
  }
  renderer.render(scene, camera);
  count += 0.1;
}

</script>

<style scoped>
#particalWave {
  @apply h-fit relative;
}
</style>
