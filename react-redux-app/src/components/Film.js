import React from 'react';

function Film(props) {
    console.log(props); 
    return (
        <div>
            <h3>{props.film.title}</h3>
            <p>{props.film.description}</p>
            <p>Release Date: {props.film.release_date}</p>
            <p>Director: {props.film.director}</p>
            <p>Producer: {props.film.producer}</p>
            <p>Rotten Tomatoes Score: {props.film.rt_score}</p>
            <button>Add to My Movies</button>
        </div>
    )
}

export default Film; 