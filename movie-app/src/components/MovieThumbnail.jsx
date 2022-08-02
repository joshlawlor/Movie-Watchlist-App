import React from 'react'
import { Link } from 'react-router-dom'
const MovieThumbnail = ({movie}) => {
  return (
    <div>

    
    {/* <h3>{movie.title}</h3> */}
    <Link to={`/movies/${movie.id}`} state={{movie}}><img src={movie.image} alt="">
    </img></Link>

    </div>
  )
}

export default MovieThumbnail 