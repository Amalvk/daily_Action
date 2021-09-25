import "./sidebar.css";
import Category from "./categoryCollection"
import { Button } from "@material-ui/core";

// import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons"
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export default function Sidebar(props) {
    return (
        
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        
                         <ul className="sidebarList">

                            <Button className='allVideoButton' 
                             onClick={()=> window.location.assign('/')}>
                                All Videos
                            </Button>

                            {Category.map((category)=>{
                                return(
                                    
                                   <li className='sidebarListItem' key={category}
                                       onClick = {()=>{
                                           props.handleCategory(category)
                                       }}>
                                       {category}
                                   </li>
                                   
                                )
                            })}
                            <li className='sidebarListItem' 
                                onClick = {()=>{
                                    props.handleCategory('Most Liked')
                                        }}>
                                    Most Liked
                            </li>

                            <li className='sidebarListItem' 
                                onClick = {()=>{
                                    props.handleCategory('Most Viewed')
                                        }}>
                                    Most Viewed
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        
    )
}
