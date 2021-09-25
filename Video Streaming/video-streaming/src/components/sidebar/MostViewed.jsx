import React from 'react';
import arraySort from 'array-sort'

export default function MostViewed(props) {
    return (
        <>
            {arraySort(props.videos,'views',{reverse:true}).map(video=>(

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
