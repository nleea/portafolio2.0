import { Sidebar } from "../layout/sidebar/Sidebar";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Proyectos } from "../page/proyectos/Proyectos";

import "./home.scss";

export const Home = () => {

    return (
        <div className="project_home">
            <div className="project_home--sidebar">
                <Sidebar />
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
            </div>
        </div>
    )
}