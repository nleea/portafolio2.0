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
                    <a href="/">
                        <Icon icon="teenyicons:github-outline" ></Icon>
                    </a>
                    <a href="/">
                        <Icon icon="ant-design:linkedin-outlined" />
                    </a>
                </div>
            </div>
            <div className="sidebar__routes">
                <a href="/">
                    <Icon icon="material-symbols:home" />
                    Home</a>
                <a href="/">
                    <Icon icon="carbon:result" />
                    Resumen</a>
                <a href="/">
                    <Icon icon="grommet-icons:projects" />
                    Proyectos</a>
                <a href="/">
                    <Icon icon="game-icons:skills" />
                    Skills</a>
                <a href="/">
                    <Icon icon="ic:baseline-perm-contact-calendar" />
                    Contacto</a>
            </div>
        </div>
    )
}