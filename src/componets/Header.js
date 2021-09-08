import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

import  'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormGroup,Label,Input} from 'reactstrap'
class Header extends React.Component {
    state={
        number:"",
        author:"",
        question:""
    }
      
     add=(e)=>{
         e.preventDefault();
         if(this.state.number==="" || this.state.author==="" || this.state.author===""){
         alert("All Fields are mandatory");
         return
     }
     this.props.addQuestionHandler(this.state);
     this.setState({number:"", author:"",question:""});
     console.log(this.props);
    };

   render(){
       return(
        <Form className="question-form">
        <h1 className="text-center">Questions</h1>
        <FormGroup>
                <Label>Number</Label>
                <Input type="text" number="number" placeholder="Number" value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label>Author</Label>
                    <Input type="text" author="author" placeholder="Author"  value={this.state.author} onChange={(e)=>this.setState({author:e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label>Question</Label>
                    <Input type="text" question="question" placeholder="Question" value={this.state.question} onChange={(e)=>this.setState({question:e.target.value})}  />
                </FormGroup>
                
                <Link to="/questionlist"><Button className="btn-1 btn-dark btn-block">Submit</Button></Link>
        </Form>
       )
   }
}
export default Header
