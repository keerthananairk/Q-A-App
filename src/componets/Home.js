import React from 'react'
import {Link} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.css';
import './Home.css'

import {Button,} from 'reactstrap'
function Home() {
    return (
        <div className="home">
            <div class="row">
                <div class="col-sm-12">
            <h1 className="big-text">Doubts? Solved! Instantly</h1>
            <p className="text-center">Solve all your doubts instantly and accurately </p>
            <Link to="/header"><Button className="text-center"> ADD  QUESTION</Button></Link>
          
      </div>
        </div>
            
        </div>
    )
}

export default Home