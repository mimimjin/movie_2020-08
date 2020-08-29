import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
            <Link to="/about">about</Link>
        </div>
    );
}

function MainNav(){
    return (
        <div className="mainnav">
            <Link to="/list">List</Link>
            <Link to="/about">about</Link>
        </div>
    );
}

export default Navigator;