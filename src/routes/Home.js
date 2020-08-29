import React from 'react';

import "./Home.css";
import {Link} from "react-router-dom";
import MainNav from "../components/MainNav";

function Home(){
    return (
        <div className="contents-wrapper">
            <div className="contents-header-wrapper">
                <div className="contents-header">
                    <div className="header">

                            <span>Movie App</span>

                    </div>
                </div>
            </div>
            <div className="contents-main-wrapper">
                
                <div className="contents-main">
                    <div className="main">
                         <img src={process.env.PUBLIC_URL + '/logo512.png'}/>
                    </div>
                    <div className="main">
                        <MainNav/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
