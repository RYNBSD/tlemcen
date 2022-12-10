interface motionInterface {
    initial: {
        opacity: number,
        translateX?: string,
        translateY?: string,
    },
    whileInView: {
        opacity: number,
        translateX?: number,
        translateY?: number,
    },
    viewport: {
        once: boolean,
    },
    transition: (detail: number, delay: number) => {
        duration: number,
        delay: number
    },
    exit: {
        opacity: number,
        translateX?: string,
        translateY?: string,
    },
}

export const fadeInToLeft:motionInterface = {
    initial: {
        opacity: 0,
        translateX: "10%",
    },
    whileInView: {
        opacity: 1,
        translateX: 0,
    },
    viewport: {
        once: false,
    },
    transition: (duration, delay) => {
        return {
            duration: 0.5 * duration,
            delay: 0 + delay
        }
    },
    exit: {
        opacity: 0,
        translateX: "10%",
    },
};

export const fadeInToRight:motionInterface = {
    initial: {
        opacity: 0,
        translateX: "-10%",
    },
    whileInView: {
        opacity: 1,
        translateX: 0,
    },
    viewport: {
        once: false,
    },
    transition: (duration, delay) => {
        return {
            duration: 0.5 * duration,
            delay: 0 + delay
        }
    },
    exit: {
        opacity: 0,
        translateX: "-10%",
    },
};

export const fadeInToTop:motionInterface = {
    initial: {
        opacity: 0,
        translateY: "20%",
    },
    whileInView: {
        opacity: 1,
        translateY: 0,
    },
    viewport: {
        once: false,
    },
    transition: (duration, delay) => {
        return {
            duration: 0.5 * duration,
            delay: 0 + delay
        }
    },
    exit: {
        opacity: 0,
        translateY: "20%",
    },
}

export const fadeInToBottom:motionInterface = {
    initial: {
        opacity: 0,
        translateY: "-20%",
    },
    whileInView: {
        opacity: 1,
        translateY: 0,
    },
    viewport: {
        once: false,
    },
    transition: (duration, delay) => {
        return {
            duration: 0.5 * duration,
            delay: 0 + delay
        }
    },
    exit: {
        opacity: 0,
        translateY: "-20%",
    },
}