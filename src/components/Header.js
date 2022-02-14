import React, {useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./Header.css"
import Logo from './layout/Logo.png';

const Header = () => {
const [activeTab, setActiveTab] = useState("Home");
const location =useLocation();

useEffect(()=> { 
    if(location.pathname==="/"){
        setActiveTab("Home")
    }
    else if (location.pathname==="/add"){
        setActiveTab("AddContact")
    } else if (location.pathname==="/about"){
        setActiveTab("About")
    }
},[location]);

    return (
        <div className="header">
            
       <p className="logo"> <img src={Logo} alt="Logo" width="50px" /> </p>
    <p style ={{color:"white", marginTop:"35px", fontSize:"25px"}}> Social Issues Reporting And Tracking </p> 
       <div className="header-right">
       <Link to="/home-page">
       
       <p className={`${activeTab==="Home" ? "active" : ""}`}
        onClick={()=> setActiveTab("Home")}> Home</p>
       
       </Link>



       <Link to="/add">
       
       <p className={`${activeTab==="AddContact" ? "active" : ""}`}
        onClick={()=> setActiveTab("AddContact")}> Add </p>
       
       </Link>

       <Link to="issues">
       
       <p className={`${activeTab==="Issues" ? "active" : ""}`}
        onClick={()=> setActiveTab("Issues")}> Issues </p>
       
       </Link>

       <Link to="/charts">
       
       <p className={`${activeTab==="Charts" ? "active" : ""}`}
        onClick={()=> setActiveTab("Charts")}> Dashboard </p>
       
       </Link>


       <Link to="/about">
       
       <p className={`${activeTab==="About" ? "active" : ""}`}
        onClick={()=> setActiveTab("About")}> About</p>
       
       </Link>
       
       
       </div>

        

        </div>
    )
}
export default Header; 