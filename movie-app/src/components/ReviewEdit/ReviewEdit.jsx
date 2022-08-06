import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ReviewEdit = ({movie},{setReviews}) => {

  // console.log(movie.reviews.id[1])

  let {id} = useParams()
  let navigate = useNavigate()


  
      const initialState ={

      }
  
      const [formData, setFormData] = useState(initialState)
      console.log(initialState)
  
      const handleChange = (e) => {
          setFormData({...formData, [e.target.id] : e.target.value})
          console.log(e.target.value)
          console.log(formData)
      }
     
  
      const handleSubmit = (e) => {
          e.preventDefault()
          console.log(formData)
          console.log(movie)
          axios.put(`http://localhost:9000/movies/${movie.id}/`, formData)
          .then(res => {
          
              setFormData(initialState)
              setReviews(res.data)
          
              navigate('/', {replace: true})
              
        
              // navigate('/', {replace:true})
          })
      }
  
      useEffect(() =>{
        // console.log(movie.id)
          axios.get(`http://localhost:9000/movies/${movie.id}/`)
          .then(res => {
              setFormData(res.data)
              
  
  
          })
      }, [])




  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor='rating'>Rating</label>
    <input id='rating' name='rating' type="text"  value={formData.rating} onChange={handleChange}/>
    </div>

    <div>
    <label htmlFor='content'>Content</label>
    <input id='content' name='content' type="text" value={formData.content} onChange={handleChange}/>
    </div>

    <button type='submit' value='Submit'>Submit</button>
  </form>
    </div>
  )
}

export default ReviewEdit