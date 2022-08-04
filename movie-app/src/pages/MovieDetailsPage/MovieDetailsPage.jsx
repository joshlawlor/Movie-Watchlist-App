import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewForm from '../../components/ReveiwForm/ReviewForm';
import Modal from 'react-modal';


const MovieDetailsPage = ({backendURL, state}) => {
  const [reviews, setReviewItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9000/movies/`)
    .then(res => res.json())
    // .then(items => setReviewItems(items))
  }, [])
    // console.log(items)

  
    // const [movie, setMovie] = useState([]);
    const location = useLocation();
    const data = location.state
    console.log(data)


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

    //     const addReviews = (review) => {
    //   setReviewItems(...reviews, review)
    // }

      console.log(data.movie)

  return (
    <div>
        <img src={data.movie.image} alt=""></img>
        <h1>{data.movie.fullTitle}</h1>
        <h2>imDb Rating: {data.movie.imDbRating}</h2>
        <h3>Crew: {data.movie.crew}</h3>
        <button>Add to Watchlist</button>
        {/* Can add to watchlist by doing a push using data.movie */}
        <br/>
        <button onClick={ReviewListener}>Add a Review</button>
        <br/>
        <button>Add to Favorites</button>


{/* <ReviewForm movie={data.movie} /> */}
        
        <Modal className='modal'isOpen={modalIsOpen} onRequestClose={closeModal} movie={data.movie}>
            <ReviewForm movie={data.movie}/>
        </Modal>

{data.movie.reviews.map((review) => {return <div><p>Rating:{review.rating} Comments: 
{review.content}</p></div>})}        


    </div>
  )
}



export default MovieDetailsPage