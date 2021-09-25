import React from 'react'
import "./topbar.css" 
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';


const validator = require('validator')


export default function Topbar() {
    
const[isLoggedIn,setIsLoggedIn]=useState(false)
const[email,setemail]=useState('')
const[fullname,setfullname]=useState('')
const[password,setpassword]=useState('')
const[isLogin,setIsLogin]=useState(true)
const[confirmPassword,setconfirmPassword]=useState('')

React.useEffect(()=> {
    if(localStorage.getItem("Token") !== null)
    setIsLoggedIn(true)
},[])

const handleLoggedIn=()=>{
    
    if(isLoggedIn){

        localStorage.removeItem('Token')
        setIsLoggedIn(!isLoggedIn)

    }else{
        handleLoggin()
    }
      
    }

const handleLoggin=(isLogin)=>{
   if(isLogin){
       const user = {
           name:fullname,
           email,
           password,
       };
       if(validator.isEmail(user.email)){

           return axios.post('http://localhost:3000/users/login',user)
           .then(async(res)=>{
               setIsLoggedIn(!isLoggedIn);
               return localStorage.setItem('Token',res.data.token)
           })
           .catch((e)=>{
               e.toString().includes(400)&&
               alert('Email or password invalid')

           })
       }
       return alert('Invalid Email')
   }
   if(!isLogin){
       const user ={
           name:fullname,
           email,
           password,
           confirmPassword
       };
       if(validator.isEmail(user.email)){
           if(password===confirmPassword){
               axios.post('http://localhost:3000/users',user)
               .then(async(res)=>{
                   setIsLoggedIn(!isLoggedIn);
                   localStorage.setItem("Token",res.data.token);
               })
               .catch(
                   (e)=>e.toString().includes(400)&& alert("Alert user exists")
               );
               return null
           }
           return alert("Password does not match...")
       }
       return alert("Invalid Email...")
   }
}

const [open, setOpen] = useState(false);
const handleClickOpen = () => {
        setOpen(true);
    };
const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className="logo">Home</span>
                </div>
                
                <TextField className='searchTextField'
                
                            id="outlined-textarea"
                            label="Search"
                            placeholder=" "
                            variant="outlined"
                            margin="dense"
                            type="email"
                />
                <div className='topRight'>
            <Button onClick={(e)=>{ 
                 if(!isLoggedIn){ 
                    return handleClickOpen()
                }
                handleLoggedIn(e)
            }
        }>

        {isLoggedIn?'Logout':'Login/SignUp'}</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {isLogin?'Login':'SignUp'}
            </DialogTitle>
        <DialogContent>
      
                {isLogin ?(
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
                        type='password'
                        label='Password'
                        fullWidth
                        // error={errorPassword}
                        // helperText={
                        //     errorPassword && "Password must be greater than 7 charactor"
                        // }

                        onChange={(e)=>setpassword(e.target.value)}
                        value={password}
                    />


                    </>
                ): <>
                <TextField
                autoFocus
                required
                id='fullname'
                margin="dense"
                label='Fullname:'
                type='text'
                onChange={(e)=>setfullname(e.target.value)}
                value={fullname}
                fullWidth
            />
            
            <TextField
                required
                id='email'
                label='Email:'
                type='email'
                margin="dense"
                onChange={(e)=>setemail(e.target.value)}
                value={email}
                fullWidth
            />
            
            <TextField
                 required
                 margin="dense"
                 id='password'
                 label='Password:'
                 type='password'
                 onChange={(e)=>setpassword(e.target.value)}
                 value={password}
                 fullWidth
            />
            <TextField
                 required
                 margin="dense"
                 id='confirmPassword'
                 label='Confirm Password:'
                 type='password'
                 onChange={(e)=>setconfirmPassword(e.target.value)}
                 value={confirmPassword}
                 fullWidth
            />

             </>}


       
        <Button color='primary' onClick={()=>setIsLogin(!isLogin)}>
            {isLogin?'Create New Account':'Existing Account'}
        </Button>
        </DialogContent>
        
        <DialogActions>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={()=>{handleLoggin(isLogin);handleClose()}} color="primary">
           {isLogin?'Login':'Create'}
          </Button>

        </DialogActions>
        
        </Dialog>
        
                   
            </div> 
        </div>
    </div>
    )



}
