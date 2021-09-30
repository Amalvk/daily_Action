import './Rowpost.css'
import axios from '../../axios'
import React,{useEffect,useState} from 'react'
import {imageURL,API_KEY} from '../Constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId] = useState('')
    useEffect(() => {
                axios.get(props.url).then((response)=>{
                    console.log(response.data)
                    setMovies(response.data.results)
                }).catch((e)=>{
                    alert('Network Error !!')
                })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const handleMovie = (id)=>{
            console.log(id);
            axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                console.log('Api',response)

                if(response.data.results.length!=0){
                    setUrlId(response.data.results[0])
                }    
                else{
                    console.log('Trailer not available...')
                }
            })
    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>{return(

                    <div>
                    {/* //return */}
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'}  src={`${imageURL+obj.backdrop_path}`}  alt="Poster" />
                    {/* // <div style={{backgroundImage: `url(${movie ? imageURL+movie.backdrop_path : ""})`}} className='banner'> */}
                    { console.log("title",obj)}
                    <div className = 'movie-title'>{obj.title}</div>
                    <div className = 'movie-title'>{obj.name}</div>
                    </div>
                )}
                    
                    )
                }

           </div>
           {urlid && <Youtube  videoId={urlid.key}  opts={opts}/>
           }
    </div> 
    )
}

export default Rowpost
