import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


export const MenuItem = ({ i, toggle }: { i: any, toggle: any }) => {
    const style = { color: "white", textDecoration: "none" };

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >

            <div className="icon-placeholder" style={style} >{i.icon}</div>
            <a href={i.link} onClick={() => toggle.toggle()} className="text-placeholder" style={style} >{i.name}</a>
        </motion.li>
    );
};