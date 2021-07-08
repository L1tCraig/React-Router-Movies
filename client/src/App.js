import React, { useState, useEffect } from 'react';
import axios from 'axios';
//need other imports...
import { Route, Switch } from 'react-router-dom'
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman

        // for nerdy imma breakdown whatever recieved and create a data
        // var that i can use so i dont have to call response.data
        .then(({ data }) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(data)
        
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
    
      {/* ok soooo here ill need to setup the page id like a switch to go between the home list of movies so ill need probly the movie list with props of movieList im thinking the link above will need to be that :id thing we went over in class so /movies/:id...lol it says that in the readme XD... also a link feels wrong i feel like it would be elsewhere that the path gets manipulated */}
      
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route exact path='/'>
          {/* want to make this one the movieList import and it will take in its movie list to be movieList same for second route but that will be for the movie data and will have a path of the :id  and is expecting .movie while the movielist is going to .map a props.movies */}
          <MovieList movies={movieList} />
        </Route>
        <Route path ='/movies/:id'>
          <Movie movie={movieList} />
        </Route>
      </Switch>
      
    </div>
  );
}
