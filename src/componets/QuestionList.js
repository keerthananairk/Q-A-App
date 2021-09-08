import React from 'react'
import './QuestionList.css'


const QuestionList =(props)=>{
    console.log(props)
   
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
    })
    return(
        <div className="ui-celled-list"> Question List
           {renderQuestionList} 
        </div>
    );
}

export default QuestionList
