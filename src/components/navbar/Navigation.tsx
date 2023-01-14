import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const itemIds = [
    {
        link: "#main",
        icon: <Icon icon="material-symbols:home" />,
        name: "Home"
    },
    {
        link: "#about",
        icon: <Icon icon="carbon:result" />,
        name: "Resumen"
    },
    {
        link: "#projects",
        icon: <Icon icon="grommet-icons:projects" />,
        name: "Proyectos"
    },
    {
        link: "#contact",
        icon: <Icon icon="ic:baseline-perm-contact-calendar" />,
        name: "Contacto"
    }
];

export const Navigation = (toggle: any) => (

    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i} key={i.name}  toggle={toggle} />
        ))}
    </motion.ul>
);

