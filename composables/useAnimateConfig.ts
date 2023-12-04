export const useAnimateConfig = () => ({
    getAnimationConfig: () => {
        const initialLeft = {
            x: -100,
            opacity: 0,
        }
        
        const initialRight = {
            x: 100,
            opacity: 0,
        }

        const enter = {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1000,
                ease: 'easeOut'
            },
        }

        return { initialLeft, initialRight, enter}
    }
})