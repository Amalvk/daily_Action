import React,{useState} from 'react'
import './login.css'
import {AddAlarmOutlined, Settings} from '@material-ui/icons';
import { Button,TextField } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from "react-router-dom";
const validator = require('validator')

export default function Login(props) {
    let history = useHistory();

const[email,setemail]=useState('')
const[password,setpassword]=useState('')
const[isLogin,setIsLogin]=useState('')
const[isLoggedIn,setisLoggedIn]=useState(false)


const handleLoggin=(isLogin)=>{
        if(isLogin){
            const admin = {
                email,
                password,
            };
      
      if(validator.isEmail(admin.email)){
        return axios.post('http://localhost:3000/admin/login',admin,{
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        
        .then(async(res)=>{
            setisLoggedIn(isLoggedIn)
            console.log(res)
            localStorage.setItem('Token',res.data.token)
            props.updateAuth(true)
            history.push('/dashboard')
        })
        .catch((e)=>{
            props.updateAuth(false)

            e.toString().includes(400)&&
            alert('Email or Password Invalid !! ')
        })
      }
      
        return alert('Invalid Email')
      };
      
      
      }   
    return (
        <div className='login'>
            <form class="container">
            <>
                    <TextField 
                        autoFocus
                        required
                        margin = 'dense'
                        variant='outlined'
                        id='email'
                        label='Email Address'
                        type='email'
                        fullWidth
                        // error={errorEmail}
                        // helperText={errorEmail && 'Please enter valid email'}
                        onChange={(e)=>setemail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        required
                        margin='dense'
                        variant='outlined'
                        id='password'
                        label='Password'
                        type='password'
                        fullWidth
                        onChange={(e)=>setpassword(e.target.value)}
                        value={password}
                    />


                    </>
            <Button onClick={()=>{handleLoggin(true)}} color="primary">
           {'Login'}
          </Button>
        </form>
        </div>
    )
}
