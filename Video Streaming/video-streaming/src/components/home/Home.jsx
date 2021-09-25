import "./home.css";
import {Link} from 'react-router-dom'
import MostViewed from "../sidebar/MostViewed";
import MostLiked from "../sidebar/MostLiked";
export default function Home(props) {
const videos = props.videos

    return (
        <div className='form'>
            {
            props.category==='allvideos' &&     
            videos.map((video)=>(
                <div className='videoThumbnail' key={video.id}>
                    <Link to={'/showvideo/'+ video.id} className='videoButton'>
                    <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.id}/>
                    <h3 className='videotitle'>{video.title}</h3>
                    </Link>
                </div>
            ))}
            {props.category ==="Most Liked" && <MostLiked videos={videos} />}
            {props.category ==="Most Viewed" && <MostViewed videos={videos} />}
            {videos.map((video)=>{
                return(
                    video.category===props.category &&(
                        <div className='videoThumbnail' key={video.id}>
                            <Link to={'/showvideo/' + video.id} className='videoButton'>
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                        alt={video.id}
                                    />
                                    <h3 className='videotitle'>{video.title}</h3>
                            </Link>
                        </div>
                    )
                )
            })}

        </div>
        
    )
}
