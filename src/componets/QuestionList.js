import React from 'react';
import './QuestionList.css';
import {Link} from 'react-router-dom'
const QuestionList=(props)=>{
    console.log(props);

    const renderQuestionList=props.questions.map((question)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{question.number}</div>
                    <div>{question.author}</div>
                    <div>{question.question}</div>
                </div>
            </div>
            
        );
    });
 return(
    
    <div className="main">
        <h2>Question List</h2>
      <Link to="/header"><button className="Btn1">Add Question</button></Link>
     <div className="ui-celled-list">
         {renderQuestionList}
     </div>
     </div>
 );


}
export default QuestionList