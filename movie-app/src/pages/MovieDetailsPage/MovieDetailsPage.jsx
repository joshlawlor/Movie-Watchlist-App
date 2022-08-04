import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tokenService from '../../utils/tokenService';

const MovieDetailsPage = ({backendURL, state}) => {
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const data = location.state
    const userToken = tokenService.getToken()

    function handleAddToWatchlist(e){
        async function addMovie() {
            await fetch(`${backendURL}/users/watchlist/add`, {method: "PATCH", body: JSON.stringify(data.movie) , headers: new Headers({'content-Type': 'application/json', 'authorization': `${userToken}`})})

            .then(response =>{
                console.log(response)
            })
        }   
        addMovie()     
    }

  return (
    <div>
        <img src={data.movie.image} alt=""></img>
        <h1>{data.movie.fullTitle}</h1>
        <h2>imDb Rating: {data.movie.imDbRating}</h2>
        <h3>Crew: {data.movie.crew}</h3>


        <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>
    </div>
  )
}

export default MovieDetailsPage