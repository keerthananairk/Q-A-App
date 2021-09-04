import React from 'react'
import './Header.css'
class Header extends React.Component{
    state={
        number:"",
        author:"",
        question:"",
    };

    add =(e)=>{
        e.preventDefault();
        if(this.state.number==="" && this.state.author==="" && this.state.question===""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addQuestionHandler(this.state);
        this.setState({number:"",author:"",question:""});
        this.props.history.push("/questionlist");
    };
    render(){
        return(
            <div className="ui-main">
                <form className="ui-form " onSubmit={this.add}>
                Number<input type="text" name="number" value={this.state.number} placeholder="Number" onChange={(e)=>this.setState({number:e.target.value})}/>
             Author <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={(e)=>this.setState({author:e.target.value})}/>
               Question<input type="text" name="question" value={this.state.question}placeholder="Question" onChange={(e)=>this.setState({question:e.target.value})}/>
           <button>Submit</button>         <button>clear</button>
                </form>
                </div>
        );
    }
}
export default Header;
