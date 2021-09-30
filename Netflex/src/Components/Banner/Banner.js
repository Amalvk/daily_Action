import React,{useEffect, useState} from 'react'
import './Banner.css'
import {API_KEY,imageURL} from '../../Components/Constants/constants'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        var x = Math.floor(Math.random()*18);
         console.log("Results...",response.data.results)
         setMovie(response.data.results[x])
     })
    }, [])
    return (
        <div style={{backgroundImage: `url(${movie ? imageURL+movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : " "}</h1>
                <h1 className='title'>{movie ? movie.name : " "}</h1>
                <div className="banner_buttons"></div>
                <button className="buttons">Play </button>
                <button className="buttons">My List</button>
            </div>
            
            <h1 className="description">{movie ? movie.overview : " "}</h1>
            
            <div className="fade_bottom"> </div>
        </div>
    )
}

export default Banner
