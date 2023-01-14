import { Icon } from "@iconify/react";

import "./sidebar.scss";

export const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebar__header">
                <div className="sidebar__header__image"></div>
                <div className="sidebar__header__name">
                    <h2>Nelson De Castro</h2>
                </div>
                <div className="sidebar__header__icon">
                    <a href="https://github.com/nleea" target="_blank" >
                        <Icon icon="teenyicons:github-outline" ></Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/nelson-de-castro-599402196/" target="_blank" >
                        <Icon icon="ant-design:linkedin-outlined" />
                    </a>
                </div>
            </div>
            <div className="sidebar__routes">
                <a href="#main">
                    <Icon icon="material-symbols:home" />
                    Home</a>
                <a href="#about">
                    <Icon icon="carbon:result" />
                    Resumen</a>
                <a href="#projects">
                    <Icon icon="grommet-icons:projects" />
                    Proyectos</a>
                <a href="#contacto">
                    <Icon icon="ic:baseline-perm-contact-calendar" />
                    Contacto</a>
            </div>
        </div>
    )
}