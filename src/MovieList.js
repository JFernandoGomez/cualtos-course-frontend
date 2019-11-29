import React, { useState } from 'react';
import './styles/movie-list.scss';

const MovieList = ({movies}) => {
    let parsedMovies = movies.map( item => {
        /* 
        ##### TASK 2 - additional as it is now displayed and 
        Display poster, 
        tomatoes.critic.rating
        Genres
        Languages 
        

        -- enable a div scrolling from left to right
        */
        return (
            <div key={item._id}>
                <div>{item.title}</div>
                <div>{item.plot}</div>
                <div>{item.rated}</div>
                <div>{item.year}</div>
                <div>{JSON.stringify(item.imdb)}</div>
            </div>
        )
    });

    return (
        <div className="movie-list--wrapper">
            {parsedMovies}
        </div>
    );
}

export default MovieList;