
import { CardProject } from "../../components/UI/CardProject";

import { projects } from "../../utils/projects";
import "./proyectos.scss";

export const Proyectos = () => {

    return (
        <div className="project__list"  id="projects">
            <div className="projects-container" >
                <span className="title--projects" >Proyectos</span>
                <div className="project__list__content">
                    {projects.map((pr) => (
                        <CardProject key={pr.name} details={pr.details} image={pr.image} link={pr.image} name={pr.name} repository={pr.repository} />
                    ))}
                </div>
            </div>
        </div>
    )
}
