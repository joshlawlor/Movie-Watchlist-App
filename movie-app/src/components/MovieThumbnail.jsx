import React from 'react'

const MovieThumbnail = ({movie}) => {
  return (
    <a href={`./movies/${movie.id}`}>
    <img src={movie.image} alt="">
    </img>
    <h3>{movie.title}</h3>
    </a>
  )
}

export default MovieThumbnail
