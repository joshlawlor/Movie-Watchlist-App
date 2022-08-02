import React, { useEffect, useState } from 'react';
import MovieThumbnail from '../../components/MovieThumbnail';


const MoviesPage = ({backendURL}) => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    async function getAllMovies() {
      await fetch(`${backendURL}/movies/`,{method: "GET", headers: new Headers({'content-Type': 'application/json'})})
      .then(res=>{
        console.log(res);
        if(!res.ok){
          console.log(res.body);
        }else{
          return res.json();
        }
      }).then(response=>{
        console.log(response);
        setMovies([...response]);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  getAllMovies();
  },[]);



  return (
    <div><h1>Movies</h1>
      <ul>
        {movies.map(movie => {
          return (<li><MovieThumbnail movie={movie}/></li>)
        })
        }
      </ul>
    </div>
  )
}

export default MoviesPage