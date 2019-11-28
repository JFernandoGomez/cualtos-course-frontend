import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import './style.scss';

const App = () => {
  let [title, setTitle] = useState('Mflix');
  let [movies, setMovies] = useState([]);
  /*
    Connect the component and consume the API
  */
  useEffect(() => {
    let url = 'http://localhost:3000/movies';
    let options = {method: 'GET'};
    let request = new Request(url, options);

    fetch( request )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(
        response => {
          // Explain SpreadOperator
          
          //let newMovies = [...movies, ...response];
          let newMovies = new Array(...movies);
          response.map( movie => newMovies.push(movie));
          
          // update fetched movies into component
          setMovies(newMovies);
        }
      )
  },[])

  console.log(movies);

  return (
    <div>
      <Title name={title} />
      {/* 
        ----- create a component that displays the movies 
        title,
        plot,
        rated
        year
        imdb info
      */}
    </div>
  );
}

render(<App />, document.getElementById('root'));
