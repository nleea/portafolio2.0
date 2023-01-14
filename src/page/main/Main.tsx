import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Globo from "../../assets/images/hombreglobo.gif";
import { Icon } from "@iconify/react";
import F1 from "../../assets/images/fondo1.png";

import "./main.scss";

export const Main = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: ["Desarrollador", "Back-end", "Front-end"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="main">
            <div className="main__text">
                <h1>Hola a Todos, 👋</h1>
            </div>
            <div className="main__content">
                <div className="main__content__texto" >
                    <h2>Hola, 👋</h2>
                    <h2>Soy Nelson</h2>
                    <h2>De Castro</h2>
                    <span ref={el} ></span>
                    <br />
                    <div className="main__content__texto--icon">
                        <a href="/">
                            <Icon icon="teenyicons:github-outline" ></Icon>
                        </a>
                        <a href="/">
                            <Icon icon="ant-design:linkedin-outlined" />
                        </a>
                    </div>
                </div>
                <div className="main__content__image">
                    <img src={Globo} alt="" />
                </div>
            </div>
        </div>
    )
}