import Tilt from "react-parallax-tilt";
import { skill } from "../../utils/skill";
import { Skill } from "../../components/UI/Skill";

import "./about.scss";

export const About = () => {
    return (
        <div className="about">
            <div className="about-container" >
                <div className="about__title">
                    Sobre Mi
                </div>

                <span className="title--about" >Perfil</span>

                <div className="about__content">
                    <div className="about__content--image">
                        <div className="avatar__about"></div>
                        <div className="avatar__title">
                            <span>Nelson De Castro</span>
                            <br />
                            <span>Apasionado por la programacion</span>
                        </div>
                    </div>
                    <div className="about__content__description">
                        <p>
                            Soy una persona autodidacta, comprometida y constante que disfruta adaptarse a nuevos entornos y
                            tecnologías desafiantes, afrontando retos, alimentando mi curiosidad y disfrutando del proceso.
                        </p>
                    </div>
                </div>

                <span className="title--about" >Skills</span>

                <div className="about__skill">

                    <div className="card" >
                        <Tilt
                            className='tilt card-item'
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            tiltReverse={false}
                            glareEnable={true}
                            glareMaxOpacity={1}
                        >
                            {skill.map((skill, index) => <Skill icon={skill.icon} name={skill.name} url={skill.href} key={index} />)}
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}