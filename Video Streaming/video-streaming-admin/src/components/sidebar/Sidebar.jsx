import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        
                        <ul className="sidebarList">
                       
                         <NavLink exact to='/dashboard' activeClassName='activeNavLink active' >

                            <li className="sidebarListItem ">
                                <DashboardIcon className="sidebaricon" />
                                Dashboard
                            </li>
                        </NavLink>
                        <NavLink to='/dashboard/category' activeClassName='activeNavLink'>

                            <li className="sidebarListItem ">
                                <LineStyle className="sidebaricon" />
                                Categories
                            </li>
                        </NavLink>

                        <NavLink to='/dashboard/videos' activeClassName='activeNavLink'>
                            <li className="sidebarListItem">
                                <VideoLibraryIcon className="sidebaricon"/>
                                Videos
                             </li>
                         </NavLink>

                        </ul>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
