import React from "react";
import "./Detail.css";
import Navigator from "../components/Navigator";
class Detail extends React.Component{
    componentDidMount(){     
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }

    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
                    <div>
                        <Navigator/>
                        <div className="movies-detail">
                            <div className="movie-detail">
                                    <img 
                                        className="moive_img-detail"
                                        src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                                    <div className="movie_data-detail">
                                        <h4 className="movie_title-detail">{location.state.title}</h4>
                                        <h5 className="movie_year-detail">{location.state.year}</h5>
                                        <ul className="movie_genres-detail">
                                            {
                                            location.state.genres.map((genre,index) => (
                                            <li key={index} className="movie_genres_list-detail">{genre}</li>
                                            ))
                
                                            }
                                        </ul>
                                        <p className="movie_summary-detail">{location.state.summary}</p>
                                    </div>
                
                            </div>  
                        </div>
                    </div>

            
                );
        }else{
            return null;
        }
        
    }
}
export default Detail;