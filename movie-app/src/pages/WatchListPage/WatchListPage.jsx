import React, { useEffect, useState} from 'react'
import MovieThumbnail from '../../components/MovieThumbnail';
import tokenService from '../../utils/tokenService';
import MoviesPage from '../MoviesPage/MoviesPage';




const WatchListPage = ({backendURL}) => {


  const userToken = tokenService.getToken()

  const [watchList, setWatchList] = useState([]);

  // let watchList = []
  
  useEffect(()=>{
    async function watchListShowAll() {
      await fetch(`${backendURL}/users/watchlist/`,{method: "GET", headers: new Headers({'content-Type': 'application/json', 'authorization': `${userToken}`})})
      .then(res=>{
        console.log(res);
        if(!res.ok){
          console.log(res.body);
        }else{
          return res.json();
        }
      }).then(response=>{
        console.log(response);
        // watchList.push([...response])
        setWatchList([...response]);
      })
      .catch(err =>{
        console.log(err);
      })
    }
    watchListShowAll()
  },[]);
  console.log(watchList.map(movie => {
    return console.log(movie)
  }))

  return (
    <div>
        <h1>Watchlist</h1>
        <ul>
        {watchList.map(movie => {
          return (<li><MovieThumbnail movie={movie}/></li>)
        })
        }
      </ul>
    
    </div>
  )
}

export default WatchListPage