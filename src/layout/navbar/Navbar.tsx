import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "../../components/navbar/MenuToggle";
import { Navigation } from "../../components/navbar/Navigation";

import "./navbar.scss";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


export const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={{ position: "fixed", height: isOpen ? "auto" : "100px", transition: "ease-out .25s", width: "100%" }}
        >

            {isOpen ? <>
                <motion.div className="background" variants={sidebar} />
                <Navigation toggle={toggleOpen} /></> : null}

            <MenuToggle toggle={() => toggleOpen()}  />
        </motion.nav>
    );
}