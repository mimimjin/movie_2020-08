import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function MainNav(){
    return (
        <div className="mainnav">
            <Link to="/list">Movie List</Link>
            <Link to="/about">Movie App About</Link>
        </div>
    );
}

export default MainNav;