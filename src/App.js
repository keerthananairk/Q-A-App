
import React ,{useState, useEffect}from 'react';
import './App.css';

import Header from './componets/Header';
import Navbar from './componets/Navbar';
import  Register from './componets/Register'
import Login from './componets/Login'
import Home from './componets/Home';
import QuestionList from './componets/QuestionList';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App(){
   const LOCAL_STORAGE_KEY="questions";
  const[questions,setQuestions]=useState([]);
  
  const addQuestionHandler=(question)=>{
    console.log(question)
    setQuestions([...questions,question])
  }


useEffect(()=>{
  const retriveQuestions =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveQuestions) setQuestions(retriveQuestions);

},[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(questions))
  },[questions]);




  return(
    <div className="container">
      <Navbar/>
      <Router>
        <Route path="/register"><Register/></Route>
        <Route path="/Login"><Login/></Route>
      
      <Route path="/home" exact render={(props)=>(<Home/>)}/>
      <Route path="/header" exact render={(props)=>(<Header {...props}addQuestionHandler={addQuestionHandler}/>)}/>
      <Route path="/questionlist"><QuestionList questions={questions}/></Route>
      </Router>
      

    </div>
  );
}
export default App
