import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tokenService from '../../utils/tokenService';

const MovieDetailsPage = ({backendURL, movie}) => {
    const [movie, setMovie] = useState(movie);
    const userToken = tokenService.getToken()
    console.log('MOVIE '+data.movie.id)
    function handleAddToWatchlist(e){
        async function addMovie() {
            await fetch(`${backendURL}/users/watchlist/`, {method: "PATCH", body: JSON.stringify(movie) , headers: new Headers({'content-Type': 'application/x-www-form-urlencoded', 'authorization': `${userToken}`})})
            .then(response =>{
                console.log(response)
            })
        }   
        addMovie()     
    }

    function handleDeleteFromWatchlist(){
        async function deleteMovie() {
            await fetch(`${backendURL}/users/watchlist/delete/${data.movie.id}`, {method: "DELETE", headers: new Headers({'authorization': `${userToken}`}) })
            .then(response =>{
                console.log(response)
                
            })
        }
        deleteMovie()
    }

  return (
    <div>
        <img src={movie.image} alt=""></img>
        <h1>{movie.fullTitle}</h1>
        <h2>imDb Rating: {movie.imDbRating}</h2>
        <h3>Crew: {movie.crew}</h3>

        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button onClick={handleDeleteFromWatchlist}>Remove From Watchlist</button>
        <br/>
        <button>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>
    </div>
  )
}

export default MovieDetailsPage