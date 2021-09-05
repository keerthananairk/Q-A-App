
import React, {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import QuestionList from './componets/QuestionList';
import {uuid} from 'uuidv4';
import api from './api/questions';


function App(){
   //const LOCAL_STORAGE_KEY="questions";
  const [questions, setQuestions]=useState([]);

   //RetriveQuestions
   const retriveQuestions= async()=>{
     const response=await api.get("/questions");
     return response.data;
   };


 
const addQuestionHandler= async (question)=>{
  console.log(question);
  const request ={
      id:uuid(),
      ...question,
  };
  
  const response= await api.post("/questions", request);
  console.log(response);
  setQuestions([...questions,response.data]);
};


useEffect(()=>{
  //const retriveQuestions =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
  //if (retriveQuestions)setQuestions(retriveQuestions);
  const getAllQuestions =async()=>{
    const allQuestions=await retriveQuestions();
    if (allQuestions) setQuestions(allQuestions);
  };
  getAllQuestions();
  },[]);


useEffect(()=>{
//localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(questions));
},[questions]);


  


  return(
    <div className="container">

      
      
        <Navbar/>
        <Router>
        <Route path="/home" exact render={()=><Home/>}/>
         <Route path="/header" exact render={(props)=>(<Header{...props} addQuestionHandler={addQuestionHandler}/>)}/>
         <Route path="/questionlist" exact render={()=><QuestionList questions={questions}/>}/>
         </Router>
        
        

        
      
        
       
  
    
  
      

    </div>
  );
}
export default App
