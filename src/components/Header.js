import React, {useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./Header.css"
import Logo from './layout/Logo.png';
import { menuItems } from "../pages/menuItems";
import {BsPersonCircle, BsColumns } from "react-icons/bs";
import MenuItems from "../pages/MenuItemss";
import { Nav, NavDropdown } from 'react-bootstrap';
const Header = () => {
const [activeTab, setActiveTab] = useState("Home");
const location =useLocation();



/* A react hook that is used to perform side effects in function components. It serves the same purpose
as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified
into a single API. */
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
        <div className="header" >
     

            
      <div> <p className="logo"> <img src={Logo} alt="Logo" width="50px" /> </p>
    <p style ={{color:"white", marginTop:"35px", fontSize:"25px"}}> Social Issues Reporting And Tracking </p> </div> 
       <div className="header-right"> 
       <Link to="/home-page"> 
       
       <p className={`${activeTab==="Home" ? "active" : ""}`}
        onClick={()=> setActiveTab("Home")}> Dashboard</p>
       
       </Link>


       {/* <Link to="/add">
       
       <p className={`${activeTab==="AddContact" ? "active" : ""}`}
        onClick={()=> setActiveTab("AddContact")}> Add </p>
       
       </Link> */}
       {/* <p>
            <div className="menus">
            {menuItems.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
         })}
         </div>
        </p> */}

       <Link to="/issues">
       
       <p className={`${activeTab==="Issues" ? "active" : ""}`}
        onClick={()=> setActiveTab("Issues")} > Issues </p>
       
       </Link>

       {/* <Link to="/charts">
       
       <p className={`${activeTab==="Charts" ? "active" : ""}`}
        onClick={()=> setActiveTab("Charts")}> Dashboard </p>
       
       </Link> */}


       <Link to="/about">
       
       <p className={`${activeTab==="About" ? "active" : ""}`}
        onClick={()=> setActiveTab("About")}> About</p>
       
       </Link>
       <Link to="/login">
       
       <p className={`${activeTab==="Logout" ? "active" : ""}`}
        onClick={()=> setActiveTab("Home")}><BsPersonCircle style={{marginRight:"5px", fontSize:"1.1em"}}/>({(window.localStorage.getItem('name'))})
        
        </p>
        {/* <p className={`${activeTab==="Logout" ? "active" : ""}`}
        onClick={()=> setActiveTab("Home")} style={{marginTop:'20px', }}>
            <Nav>
            <NavDropdown title={ window.localStorage.getItem("name")}>
                <NavDropdown.Item>logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        
        </p> */}
       
       </Link>
      
       
       </div>

        

        </div>
    )
}
export default Header; 

