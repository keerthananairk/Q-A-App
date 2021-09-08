import React from 'react'
import './Navbar.css';

import { BsHouseFill ,BsPencilSquare ,BsQuestionCircleFill,BsFillBellFill } from "react-icons/bs";
function Navbar() {
    return (
       <div className="Navbar">
           <a href="/home"><BsHouseFill size="3em" color="white"/></a>
           <a href="/header"><BsPencilSquare size="3em" color="white" padding="20px"/></a>
           <a href="/questionlist"><BsQuestionCircleFill size="3em" padding="20px"color="white"/></a>
           <a href="/notification"><BsFillBellFill size="3em" padding="20px"color="white"/></a>
       </div>

    
    )
    
}

export default Navbar
