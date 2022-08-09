import React, { useEffect, useState } from 'react';
import MovieThumbnail from '../../components/MovieThumbnail';
import axios from 'axios';
const options = {method: 'GET', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},  credentials: 'include', 'Access-Control-Allow-Origin': '*'}
const MoviesPage = ({backendURL}) => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    async function getAllMovies() {
    let res = await axios.get(`${backendURL}/movies/`, options)
    // console.log('Line 10',res)
    let data = res.data
    console.log(data)
    setMovies([...data])
    }
    getAllMovies();}, [])



  return (
    <div><h1>Movies</h1>
      <ul>
        {movies.map(movie => {
          return (<li><MovieThumbnail backendURL={backendURL} movie={movie}/></li>)
        })
        }
      </ul>
    </div>
  )
}

export default MoviesPage