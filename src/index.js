import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import MovieList from './MovieList';
import './style.scss';
import { movie_mocks } from './mocks/movies';

const App = () => {
  let [title, setTitle] = useState('YOUR_NAME');
  let [movies, setMovies] = useState([]);
  /*
    Connect the component and consume the API
  */
  useEffect(() => {
    let url = 'http://localhost:3001/movies';
    let options = {method: 'GET'};
    let request = new Request(url, options);

    fetch( request )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          setMovies(movie_mocks);
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(
        response => {
          // Explain SpreadOperator
          console.log('response',response);
          //let newMovies = [...movies, ...response];
          let newMovies = new Array(...movies);
          response.map( movie => newMovies.push(movie));
          
          // update fetched movies into component
          setMovies(newMovies);
        }
      ).catch(
        _ => {
          setMovies(movie_mocks);
          throw new Error('using mocked movies');
        }
      )
  },[])

  console.log('movies', movies);

  return (
    <React.Fragment>
      <Title name={title} />
      {/* 
        ----- create a component that displays the movies 
        title,
        plot,
        rated
        year
        imdb info
      */}
      <MovieList movies={movies}></MovieList>
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
