import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movie({id, year, title, summary, poster, genres})
{
    return (
        <div className="movie">
            <img 
                 classe="moive_img"
                 src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h4 className="movie_title">{title}</h4>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {
                       genres.map((genre,index) => (
                       <li key={index} className="movie_genres_list">{genre}</li>
                       ))

                    }
                </ul>


                <p className="movie_summary">{summary.slice(0,250)}...</p>
            </div>
        </div>

    );
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(String).isRequired
}

export default Movie;
