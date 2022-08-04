import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieThumbnail from '../../components/MovieThumbnail';
import tokenService from '../../utils/tokenService';

const WatchListPage = ({backendURL}) => {
  const token = tokenService.getToken();
  const [watchlist, setWatchlist] = useState([]);
  if(token !== undefined || token !== null){
    useEffect(()=>{
      async function getWatchlist(){
        await fetch(backendURL + "/users/watchlist", {method: "GET", headers: new Headers({'content-Type': 'application/x-www-form-urlencoded', 'authorization': token})})
        .then(response => {
          if(response.ok)
            return response.json();
        })
        .then(response => {
          setWatchlist([...watchlist, response]);
        })
      }
      getWatchlist();
    })
  }

  return (
    <div>
        {(watchlist.length == 0)?<h1>add movies to watchlist</h1>:null}
        {watchlist.map((movie)=>{
          return <MovieThumbnail backendURL={backendURL} movie={movie}/>
        })}
    </div>
  )
}

export default WatchListPage