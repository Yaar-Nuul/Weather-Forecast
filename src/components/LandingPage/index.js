import React from "react";
import Navbar from "../Navbar/Navbar";
import './index.css'
import Image from "../images/purple.jpg"

function index(){
    return(
        <div>
       <Navbar/>
       <img src={Image}/>
        </div>
    )
}

export default index;