import React, { useEffect,useState } from 'react';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import CategoryList from "./components/CategoryList/CategoryList";
import Videos from "./components/Videos/VideoTable";
import Login from "./components/AdminLogin/Login";


import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import './app.css' 
import { Dashboard } from '@material-ui/icons';
import RouteGuard from './components/Routeguard';

function App() {

const[isLogin,setIsLogin]=useState(false)
const[loading,setIsLoading]=useState(true)



useEffect(() => {
  console.log("Top-Login")
   if(localStorage.getItem("Token")!==null){
    console.log("Login")
    setIsLogin(true)
   }
   setIsLoading(false)
  
}, []);

const updateAuth = (status) => {
  setIsLogin(status)
}

if(loading){

  return <p>Loading..</p>
}
  return (
    <div className="App">
      
      <Router>
      <Topbar/>
        <div className="container">
         <Switch>
           <Route exact path="/">
              {isLogin ? <Redirect to="/dashboard" /> :  <Redirect to="/login" />}
          </Route>
          <Route exact path='/login'>
            <Login updateAuth={(value)=>{updateAuth(value)}}/>
          </Route>    
          <RouteGuard path='/dashboard' component={Home} auth={isLogin} className="other"/>
         
         </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
