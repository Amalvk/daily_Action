import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home"
import { useState,useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Environment from "./components/Video/Environment";
import Axios from 'axios'

function App() {
  const[category,setCategory]=useState('allvideos')
  
  const apiUrl = 'http://localhost:3000/all-videos';
   
  const authAxios = Axios.create({
    baseURL : apiUrl,
    
  });
  
    const [videos, setVideos] = useState([]);
    const [requestError, setRequestError] = useState();
  
    const fetchData = async () => {
      try{
        const result = await authAxios.get();
        console.log(result)
        setVideos(result.data);

      }
      catch(err) {
        setRequestError(err.message);
      }
    };
  
    useEffect(() => {
      fetchData();
    },[])
  

  return (
    <div className="App">
      <Router>
      <Topbar/>
      <div className="container">
          <Sidebar handleCategory={(category)=>{
            setCategory(category)

          }} />
          <Switch>
             <Route exact path='/'>
                <div className='others'>
                    <Home category={category} videos={videos} />
                </div>
             </Route>
             <Route path='/showvideo/:id'>
               <Environment videos={videos}/>

             </Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
