import  YouTube  from 'react-youtube';
import './environment.css'
import { withRouter } from 'react-router';
import {useEffect,useState} from 'react'
import axios from 'axios'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import Like from './Like'
// import Dislike from './Dislike'


function Environment(props) {
    const video=props.videos.find(video=>video.id===props.match.params.id)
    const [Loading, setLoading] = useState(true)
    const [isVideo, setIsVideo] = useState({})
    const [isLiked, setIsLiked] = useState(false)
    const [isDisLiked, setIsDisLiked] = useState(false)
    

    useEffect(() => {
        const increaseViewcount= async()=>{
            axios
            .patch(`http://localhost:3000/video/${props.match.params.id}`)
            .then((res)=>{
                console.log(res)
                setIsVideo(res.data)
                
                let Token = localStorage.getItem("Token")
                if(Token!==null){
                    axios.get('http://localhost:3000/users/me',{
                        headers:{
                            Authorization:`Bearer ${Token}`
                        },
                    })
                    .then((res)=> res.data)
                    .then((data)=>{
                        console.log(data)
                        console.log(isVideo)

                        if(data.liked.includes(props.match.params.id)){
                            setIsLiked(true)
                            // setChangeLikeColor('#3ea6ff')
                        }
                        if(data.disliked.includes(props.match.params.id)){
                            setIsDisLiked(true)
                            // setChangeLikeColor('#3ea6ff')
        
                        }
                        setLoading(false)
                    })
              
                }
            }).catch((e)=> console.log(e));
           
        }
        increaseViewcount()
    }, [props.match.params.id])
    // const Like = async(isDisliked,isLiked)=>{
    //     const props = {
    //         isDisliked:isDisliked,
    //         isLiked:isLiked
    //     }
    
        const likeVideo =async (id)=>{
            let Token=localStorage.getItem('Token')
            await axios
            .patch(`http://localhost:3000/video/likevideo/${id}`,isVideo,{
            method:'POST',
            headers:{
                    Authorization:`Bearer ${Token}`
                }
            })
            .then((res)=>{
                if(res.status === 200){
                   if(isLiked){
                    setIsVideo(res.data)
                    setIsLiked(false)
                   }
                   else{
                       if(isDisLiked){
                            setIsVideo(res.data)
                            setIsDisLiked(false)
                            setIsLiked(true)

                       }
                       else{
                        setIsVideo(res.data)
                        setIsLiked(true)
                       }
                   }
                    // if(!isLiked){
                    //     if(!isDisLiked){
                    //             // setChangeColor("#3ea6ff")
                    //             // setChangeDislikeColor("#inherit")
                                
                    //             // setIsVideo(res.data)
                    //             // setIsLiked(true)
                    //             return setIsDisLiked(false)
                    //             }
                    //         // setChangeColor("#3ea6ff")
                    //         video.like+=1
                    //         setIsVideo(res.data)
                    //         return setIsLiked(true)
                    //     }
                        // setChangeLikeColor('inherit');
                        
                        // setIsVideo(res.data)
                        // return setIsLiked(false)
                    }
                }).catch((e)=> console.log(e));
            } 
     

        

        const dislikeVideo = async(id)=>{
            let Token=localStorage.getItem('Token')
            await axios

            .patch(`http://localhost:3000/video/dislikevideo/${id}`,isVideo,{

            method:'POST',
            
            headers:{
                Authorization:`Bearer ${Token}`

            }
            })
            .then((res)=>{
                if(res.status === 200){
                    if(isDisLiked){
                     setIsVideo(res.data)
                     setIsDisLiked(false)
                    }
                    else{
                        if(isLiked){
                             setIsVideo(res.data)
                             setIsDisLiked(true)
                             setIsLiked(false)
 
                        }
                        else{
                         setIsVideo(res.data)
                         setIsDisLiked(true)
                        }
                    }
                }
            }).catch((e)=>console.log(e));
        }

    


 
    return (
        <div className='playvideo'>
            <div className='showVideoWrapper'>
              <YouTube videoId={props.match.params.id} className='youtubeVideo'/>
                <div className='videoButton'>
                <h1>{isVideo.title}</h1>
                <h4 className="description">{isVideo.description}</h4>
                  <div className='viewLike'>
                      
                    <span className='videoViews'> {isVideo.views} Views </span>
                        <span className='likeButton'>
                            <button onClick={()=> likeVideo(props.match.params.id)} >
                                <ThumbUpIcon color={isLiked?'primary':''}/>
                                
                            </button>
                          {isVideo.like}
                        </span>
                        
                        <span className='dislikeButton'>
                            <button onClick={()=> dislikeVideo(props.match.params.id)} >
                                <ThumbDownIcon color={isDisLiked?'primary':''}/>
                        </button>
                          {isVideo.dislike}
                      </span>

                </div>
            </div>
        </div>
        </div>
    )

}
export default withRouter(Environment)

