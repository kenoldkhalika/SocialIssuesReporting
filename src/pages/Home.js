import React,  {useState} from "react";
import {Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import background1 from './assets/img/background1.jpg'
import "../components/Entry.css"
import { LoginForm } from "../components/Login";
import { ResetPassword } from "../components/resetPassword";


const Home = () =>{
    const [frmLoad, setFrmLoad] = useState("login");
    const formSwitcher = frmType =>{
        setFrmLoad(frmType);
    }
    return(
  

        <div className ="entry-page "
        style={{ height: "100vh",
      width: "100%",
      backgroundImage:`url(${background1})` ,
      // opacity:"0.5",
      backgroundPosition: "center",
      backgroundSize: "cover",
      paddingRight:" 3%",
      textAlign:"center",
      paddingLeft: "5%",
      boxSizing: "border-box",
      margin:"auto",
      position: "relative"}}>

         <div className=" p-5 rounded-lg m-3 form-box" >
              {frmLoad === "login" && <LoginForm formSwitcher = {formSwitcher}/> }  {frmLoad === "reset" &&  <ResetPassword formSwitcher = {formSwitcher} />}  </div>
    

        </div>
        
    );
}
export default Home;

// import React from 'react'
// import {Link} from 'react-router-dom';
// import background1 from './assets/img/background1.jpg'
// import { Default } from '../components/layout/Default';
// import './Home.css';

// const Home =()=>{
//     return (
//       <div  style={{ height: "100vh",
//       width: "100%",
//       backgroundImage:`url(${background1})` ,
//       // opacity:"0.5",
//       backgroundPosition: "center",
//       backgroundSize: "cover",
//       paddingRight:" 3%",
//       textAlign:"center",
//       paddingLeft: "5%",
//       boxSizing: "border-box",
//       margin:"auto",
//       position: "relative"}}> 
//       <div></div>

//       <div >
//       <div 
     
      
//       >
//       <div class="content" 
//       style={{ position: "relative",
//         display: "flex",
//         textAlign:"center",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "space-between"}}
      
//       >
//             <div class="text"
            
//             style={{  position: "relative",
//               maxwidth: "600px"}}
//             >
//             <h1
//             style={{
//             fontFamily: "'Poppins', sans-serif;",
//             textTransform: "uppercase",
//             fontWeight:" 800",
//             marginTop: "80px",
//             lineHeight: "1.5em",
//             lettersSpacing: ".1em",
//             margin:"center",
//             fontSize: "40px",
//             color: "#000000"
//           }}
            
//             >End Violence Against <br/> <span style={{ fontSize: "50px"}}>Chidren and Women</span></h1>
//             <p 
//             style={{ fontSize: "20px",
//              fontWeight: "6000",
//              lettersSpacing: ".1em",
//              margin:"center",
//              marginTop: "40px",
             
//              color: "#000000",
//             }}
            
//             >Empowering the youth, Women and Children. <br/>Promoting good health, human rights and democracy. <br/>Adapting and mitigating effects of climate change;<br/> and conducting research for evidence based programming and advocacy.
//             </p>


//          <Link to='/home-page'>   <button className="click" style={{ 
//            marginTop:" 60px",
//            margin:"center",
           
//            textAlign: "center",
//            transition: ".5s",


//            border:" none",
//            outline: "none",
//           textTransform: "uppercase",
          
//           color: "#1b1b1b",
//            fontSize: "20px",
//           fontWeight: "700",
//          borderRadius: "30px",
//           boxsShadow: "1px 4px 12px rgba(94,28,68,.15",


//             padding: "15px 30px"
//          }}
             
             
//              class="btn3">LOG IN</button></Link>

//             </div>
//             {/* <Default>hbhbhb</Default> */}
//        </div>
      
//        </div>
//       </div>
      
      
//       <div ></div>
//       </div>
     
 
//     );
// };
// export default Home;