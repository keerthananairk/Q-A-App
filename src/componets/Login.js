import React,{useState} from 'react'
import Axios from 'axios'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';

import {Button, Form, FormGroup,Label,Input} from 'reactstrap'

function Login (){


    const[username,setUsername]=useState('')
    
    const[password,setPassword]=useState('')
    


    const [loginStatus,setLoginStatus]=useState('')

    Axios.defaults.withCredentials=true


    
    const login=()=>{
        Axios.post("http://localhost:7007/login",{
            username:username, 
        password:password,
    }).then((response)=>{
        if(!response.data.auth){
            setLoginStatus(false);
        }else{
            
            localStorage.setItem("token", response.data.token)
            setLoginStatus(true);
        }
    });
    };



    const userAuthenticated=()=>{
        Axios.get("http://localhost:7007/userAuth", {
            headers:{
                "x-access-token":localStorage.getItem("token")
            },

        }).then((response)=>{
            console.log(response);

        });
    };
    


    return (
        <Form className="login-form">
            <h1 className="text-center">Login</h1>
            <FormGroup>
                <Label>Username</Label>
                <Input  type="text" onChange={(e)=>{setUsername(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input  type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

            </FormGroup>
            <Button className="btn-2 btn-dark btn-block" onClick={login}>Login</Button>
            <h2 className="account1"><a href="/forgotpassword">Forgot Password</a></h2>
            
    {loginStatus && <button onClick={userAuthenticated}>check if authenticated</button>}

        </Form>
        
       
    )

}

export default Login