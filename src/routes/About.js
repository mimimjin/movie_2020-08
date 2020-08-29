import React from "react";
import Navigator from "../components/Navigator";
import "./About.css";

function About(props){
    
    return (
        <div>
            <Navigator/>
            <div className="about__container">
                <span>ReactJS로 만든 영화 웹 서비스입니다.</span>
            </div>
        </div>
    );

}
export default About;