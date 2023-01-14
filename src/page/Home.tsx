import { useEffect, useState } from "react";
import { Sidebar } from "../layout/sidebar/Sidebar";
import { Navbar } from "../layout/navbar/Navbar";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Proyectos } from "../page/proyectos/Proyectos";
import { Contact } from "../page/contacto/Contact";

import "./home.scss";

export const Home = () => {

    const [menu, setMenu] = useState(false);

    const ResizeMenu = () => {
        if (window.innerWidth > 1100) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", ResizeMenu);
        if (window.innerWidth > 1100) {
            setMenu(true);
        }
    }, [])

    return (
        <div className="project_home">
            <div className="project_home--sidebar">
                {menu ? <Sidebar /> : <Navbar/>}
            </div>
            <div className="project_home--content">
                <div id="main" >
                    <Main />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="project" >
                    <Proyectos />
                </div>
                <div id="contact" >
                    <Contact />
                </div>
            </div>
        </div>
    )
}