import React from "react";
import style from './About.module.css'

const About = () =>{
    return(
        <div className={style.containerAbout}>
            <div className={style.containerAboutInfo}>
                <img src="https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png" alt="Foto de perfil" with="300px" height="300px"/>
                <h1>Nombre</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto dignissimos maxime nam laudantium. Quia, molestias blanditiis repellat officia at tenetur sequi delectus consequuntur dolorem quibusdam ut accusantium saepe consectetur.</p>
            </div> 
        </div>
    )
}

export default About