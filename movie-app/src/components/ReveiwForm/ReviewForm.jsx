import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'


const ReviewForm = ({movie},{addReview}) => {



// let {id} = useParams()
// let navigate = useNavigate()

    const initialState ={
        content: "",
        rating:""
    }

    console.log(movie.id)

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target.id)
        setFormData({...formData, [e.target.id] : e.target.value})
    }
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        
        axios.post(`http://localhost:9000/movies/${movie.id}/comments`, formData)
        .then(res => {
            
            setFormData(initialState)

        })
        .then(res => {
            // addReview({...res.data})
            
            navigate('/movies', {replace:true})
        })
    }

  return (
    <form onSubmit={handleSubmit} className="form">
    <br/>
    <h3>Add Review</h3>
      <label htmlFor="content">
      <input type="text" id="content" value={movie.content} onChange={handleChange}/>
      </label>
      <label htmlFor="rating">
      <input type="number" id="rating" value={movie.rating} onChange={handleChange}/>
      </label>
      <button type="submit">Post Review</button>
      <br/>
  </form>
  )
}

export default ReviewForm