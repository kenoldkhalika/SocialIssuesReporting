import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit,AiOutlineFileAdd } from "react-icons/ai";
class LandingPage extends React.Component{
    render (){

        return (
      <div className="row"  style={{ height: "100vh",
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
      <div className="col-3"></div>

      <div className="col-7">
      <div 
     
      
      >
      <div class="content" 
      style={{ position: "relative",
        display: "flex",
        textAlign:"center",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"}}
      
      >
            <div class="text"
            
            style={{  position: "relative",
              maxwidth: "600px"}}
            >
            <h1
            style={{
            fontFamily: "'Poppins', sans-serif;",
            textTransform: "uppercase",
            fontWeight:" 800",
            marginTop: "80px",
            lineHeight: "1.5em",
            lettersSpacing: ".1em",
            margin:"center",
            fontSize: "40px",
            color: "#000000"
          }}
            
            >End Violence Against <br/> <span style={{ fontSize: "50px"}}>Chidren and Women</span></h1>
            <p 
            style={{ fontSize: "20px",
             fontWeight: "6000",
             lettersSpacing: ".1em",
             margin:"center",
             marginTop: "40px",
             
             color: "#000000",
            }}
            
            >Empowering the youth, Women and Children. <br/>Promoting good health, human rights and democracy. <br/>Adapting and mitigating effects of climate change;<br/> and conducting research for evidence based programming and advocacy.
            </p>


         <Link to='/home-page'>   <button className="click" style={{ 
           marginTop:" 60px",
           margin:"center",
           
           textAlign: "center",
           transition: ".5s",


           border:" none",
           outline: "none",
          textTransform: "uppercase",
          
          color: "#1b1b1b",
           fontSize: "20px",
          fontWeight: "700",
         borderRadius: "30px",
          boxsShadow: "1px 4px 12px rgba(94,28,68,.15",


            padding: "15px 30px"
         }}
             
             
             class="btn3">Start Now</button></Link>

            </div>
            <Default>hbhbhb</Default>
       </div>
      
       </div>
      </div>
      
      
      <div className="col-2"></div>
      </div>
        )
    

    }

};
export default LandingPage;