import React,{useState} from 'react'
import Axios from 'axios'
import './Register.css';
import  'bootstrap/dist/css/bootstrap.css';


import {Button, Form, FormGroup,Label,Input} from 'reactstrap'


function Register() {


    const[usernameReg,setUsernameReg]=useState('')
    const[firstnameReg,setFirstnameReg]=useState('')
    const[lastnameReg,setLastnameReg]=useState('')
    const[emailReg,setEmailReg]=useState('')
    const[passwordReg,setPasswordReg]=useState('')



    Axios.defaults.withCredentials=true

    const register=()=>{
        Axios.post("http://localhost:7007/register",{username:usernameReg,firstname:firstnameReg,lastname:lastnameReg, email:emailReg, password:passwordReg,
    }).then((response)=>{
        console.log(response);
    });
    };




    return (
       
        <Form className="register-form">
            <h1 className="text-center">Register</h1>
            <FormGroup>
                <Label>Username</Label>
                <Input  type="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label>First name</Label>
                <Input  type="text" onChange={(e)=>{setFirstnameReg(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label>Last name</Label>
                <Input  type="text" onChange={(e)=>{setLastnameReg(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input  type="text" onChange={(e)=>{setEmailReg(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input  type="password" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
            </FormGroup>
            
            <Button className="btn-3 btn-dark btn-block" onClick={register}>Register</Button>
            <h2 className="account">Already have an account? <a href="/login">Login here</a></h2>
        </Form>
          
    )
    
}

export default Register
