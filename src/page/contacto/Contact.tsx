import { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

import { Icon } from "@iconify/react";

import "./contact.scss";

export const Contact = () => {


    return (
        <div className="contact__container" style={{ width: "80%", margin: "auto" }}>
            <span className="title--about" >Contactame</span>
            <Card className="contact" id="contacto" >
                <CardContent className="icon-container" >
                    <div className="icon-container--data" >
                        <LocationOnIcon />
                        <Typography>
                            Colombia
                        </Typography>
                    </div>
                    <div className="icon-container--data" >
                        <LocalPhoneIcon />
                        <Typography>
                            +57 3014582878
                        </Typography>
                    </div>
                    <div className="icon-container--data" >
                        <MailIcon />
                        <Typography>
                            <a href="mailto:neldecas12@gmail.com"  >Neldecas12@gmail.com</a>
                        </Typography>
                    </div>
                </CardContent>
                <CardContent className="redes-container" >
                    <Typography variant="h4">
                        Mis Redes Sociales
                    </Typography>
                    <div className="redes-container--icons" >

                        <li>
                            <a href="https://www.linkedin.com/in/nelson-de-castro-599402196/" target="_blank" rel="noreferrer noopener external" className="social__content--icon">
                                <Icon icon="mdi:linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/nleea" target="_blank" rel="noreferrer noopener external" className="social__content--icon">
                                <Icon icon="mdi:github" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:neldecas12@gmail.com">
                                <Icon icon="mdi:email" />
                            </a>
                        </li>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
