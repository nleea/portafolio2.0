import { Sidebar } from "../layout/sidebar/Sidebar";
import { Main } from "./main/Main";

import { About } from "./about/About";

import "./home.scss";

export const Home = () => {

    return (
        <div className="project_home">
            <div className="project_home--sidebar">
                <Sidebar />
            </div>
            <div className="project_home--content">
                <Main />
                <About />
            </div>
        </div>
    )
}