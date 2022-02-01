import { motion, AnimatePresence } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    enter: {
        opacity: 1,
        x: 0,
        y:0,
    },
    exit: {
        opacity: 0,
        x:40,
    }
}

const Secondvariants = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    enter: {
        opacity: 1,
        x: 0,
        y:0,
    },
    exit: {
        opacity: 0,
        x:-40,
    }
}

const Thirdvariants = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    enter: {
        opacity: 1,
        x: 0,
        y:0,
    },
    exit: {
        opacity: 0,
        y:40,
    }
}


const Fourthvariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    enter: {
        opacity: 1,
        x: 0,
        y:0,
    },
    exit: {
        opacity: 0,
        y:-40,
    }
}

export const Animated = ({ children }) => {
    return (
        <AnimatePresence exitBeforeEnter initial={true}>
            <motion.article
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.6, type: "just"}}
                >
                    {children}
                </motion.article>
        </AnimatePresence>
    )
}

export const SecondAnimated = ({ children }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.article
                variants={Secondvariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.6, type: "just"}}
            >
                {children}
            </motion.article>
        </AnimatePresence>
    )
}

export const ThirdAnimated = ({ children }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.article
                variants={Thirdvariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.6, type: "just"}}
            >
                {children}
            </motion.article>
        </AnimatePresence>
    )
}

export const FourthAnimated = ({ children }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.article
                variants={Fourthvariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.6, type: "just"}}
            >
                {children}
            </motion.article>
        </AnimatePresence>
    )
}