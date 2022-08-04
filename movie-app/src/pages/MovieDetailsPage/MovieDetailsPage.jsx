import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import tokenService from '../../utils/tokenService';

const MovieDetailsPage = ({backendURL}) => {
  const {imdbId} = useParams();
  const [movie, setMovie] = useState(
{ crew: "",
  fullTitle: "",
  id: "",
  imDbRating: 0,
  imDbRatingCount: 0,
  image: "",
  rank: 0,
  reviews: [],
  title: "",
  year: 0,
  __v: 0,
  _id: ""
});
  const [isOnWatchlist, setIsOnWatchlist] = useState(false);
  const userToken = tokenService.getToken();


  useEffect(()=>{
    async function checkMovie() {
      await fetch(`${backendURL}/movies/${imdbId}`, {method: "GET", headers: new Headers({'content-Type': 'application/x-www-form-urlencoded', 'authorization': `${userToken}`})})
      .then(response =>{
          return response.json();
      })
      .then((res)=>{
        console.log(res);
        setMovie(res[0]);
        setIsOnWatchlist(res[1]);
      })
    }   
    checkMovie();
  }, [])


  function handleAddToWatchlist(e){
      async function addMovie() {
          await fetch(`${backendURL}/users/watchlist/add`, {method: "PATCH", body: JSON.stringify(movie) , headers: new Headers({'content-Type': 'application/x-www-form-urlencoded', 'authorization': `${userToken}`})})
          .then(response =>{
              return response.json();
          }).then(()=>{

          })
      }   
      addMovie()
  }


    function handleDeleteFromWatchlist(){
        async function deleteMovie() {
            await fetch(`${backendURL}/users/watchlist/delete/${movie.id}`, {method: "DELETE", headers: new Headers({'authorization': `${userToken}`}) })
            .then(response =>{
                console.log(response)
                
            })
        }
        deleteMovie()
    }

  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title + "poster"} />
        <h2>IMDB rating: {movie.imDbRating}</h2>
        <h2>realse year: {movie.year}</h2>
        {isOnWatchlist?<button onClick={handleDeleteFromWatchlist}>remove from Watchlist</button>:<button onClick={handleAddToWatchlist}>Add to Watchlist</button>}
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>
    </div>
  )
}

export default MovieDetailsPage