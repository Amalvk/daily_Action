import React from 'react';
import arraySort from 'array-sort'

export default function MostLiked(props) {
    return (
        <>
            {arraySort(props.videos,'like',{reverse:true}).map(video=>(

                    <div className='videoThumbnail' key={video.id}>
                        {/* <Link to={'/showVideo/' + video.id} className='videoButton'> */}
                           <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                             alt={video.id}
                         />
                      <h3>{video.title}</h3>
                    {/* </Link> */}
            </div>
            ))
            
           
        }
        </>
    )
}
