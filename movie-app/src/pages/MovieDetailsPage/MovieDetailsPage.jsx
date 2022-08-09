import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MovieDetailsPage = ({backendURL}) => {
    let navigate = useNavigate()
  
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
  const [reviews, setReviewItems] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:9000/movies/`)
  //   .then(res => res.json())
  //   // .then(items => setReviewItems(items))
  // }, [])

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

  const ReviewListener = (e) => {
      e.preventDefault();
      setModalContent(false);
      setIsOpen(true);
  }
  function closeModal() {
      setIsOpen(false);
    
    }

  useEffect(()=>{
    async function checkMovie() {
      let res = await axios.get(`${backendURL}/movies/${imdbId}`, {method: "GET", headers: new Headers({'content-Type': 'application/json', 'authorization': `${userToken}`})})
        let data = res.data
        console.log(data)
          setMovie(data[0])
    }   
    async function checkWatchlist(){
      let res = await axios.get(`${backendURL}/movies/${imdbId}/watchlist`, {method: "GET", headers: new Headers({'content-Type': 'application/json', 'authorization': `${userToken}`})})
      // console.log(await res.json())
      let data =  res.data
      console.log('MY DATA',data)
      if(data[0].isOnWatchList) setIsOnWatchlist(true)
    }
    checkMovie();
    checkWatchlist();
  }, [])


  function handleAddToWatchlist(e){
      async function addMovie() {
          await axios.patch(`${backendURL}/users/watchlist/add`, {method: "PATCH", body: JSON.stringify(movie) , headers: new Headers({'content-Type': 'application/json', 'authorization': `${userToken}`})})
          .then(response =>{
              return response.json();
          }).then(()=>{

          })
      }   
      addMovie()
      return navigate('/watchlist')
  }


    function handleDeleteFromWatchlist(){
        async function deleteMovie() {
            await axios.get(`${backendURL}/users/watchlist/delete/${movie.id}`, {method: "DELETE", headers: new Headers({'authorization': `${userToken}`}) })
            .then(response =>{
                console.log(response)
                
            })
        }
        deleteMovie()
        return navigate('/watchlist')
    }

    console.log(isOnWatchlist)


  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title + "poster"} />
        <h2>IMDB rating: {movie.imDbRating}</h2>
        <h2>realse year: {movie.year}</h2>
        {isOnWatchlist?<button onClick={handleDeleteFromWatchlist}>remove from Watchlist</button>:<button onClick={handleAddToWatchlist}>Add to Watchlist</button>}
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button onClick={ReviewListener}>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>

        <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal} movie={movie}>
            <ReviewForm movie={movie}/>
        </Modal>

{movie.reviews.map((review) => {return <div><p>Rating:{review.rating} Comments: 
{review.content}</p></div>})}        



    </div>
  )
}

export default MovieDetailsPage