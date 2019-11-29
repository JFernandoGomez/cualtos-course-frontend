import React, { useState } from 'react';
import './styles/movie-list.scss';

const MovieList = ({movies}) => {
    let parsedMovies = movies.filter( m  => !!m.poster ).map( item => {
        /* 
        ##### TASK 3 - On Click enable FEATURED MOVIE as a big item
        */
        console.log(item)
        let {genres, tomatoes: { critic }, languages } = item;
        let rating = critic ? (<span>{`${critic.rating} / 10`}</span>) : '';

        let genresStr = genres.join(' | ');
        let languagesStr = languages.join(', ');

        return (
            <div key={item._id} className="movie-list--item">
                <div className="movie-list--img"><img src={item.poster} /></div>
                <div className="movie-list--info">
                    <div className="movie-list--genres">{genresStr}</div>
                    <div className="movie-list--languages">{languagesStr}</div>
                    <div className="movie-list--rating">{rating}</div>
                </div>
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