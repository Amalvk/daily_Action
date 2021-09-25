import "./home.css";
import Feature from "../feature/feature";
import LikeChart from '../chart/LikeChart';
import Signup from "../chart/Signup";
import Topbar from "../topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar'
import Videos from "../Videos/VideoTable";
import CategoryList from "../CategoryList/CategoryList";
import { Redirect, Route, Switch } from "react-router-dom";


export default function Home() {
    return (<>

        <div className='home'>
            <Sidebar/>
            <div className="home-conatiner">
                <Switch>
                    <Route exact path="/dashboard">
                        <Redirect to="/dashboard/home" />
                    </Route>
                    <Route exact path='/dashboard/home'> 
                        <Feature/>
                        <Signup/>
                        <LikeChart/>
                    </Route> 
                    <Route exact path='/dashboard/category'> 
                        <CategoryList/> 
                    </Route> 

                    <Route exact path='/dashboard/videos'> 
                        <Videos/> 
                    </Route> 
                </Switch>
           </div>
            
           

            
            
        </div>
        </>
    )
}
