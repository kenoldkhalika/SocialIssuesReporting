// import React from 'react'
// const About =()=>{
//     return (
        
//     <div></div>
//     );
// };
// export default About;
import React from "react";
import background1 from './assets/img/background1.jpg'
import './About.css'
function About(){
  return(
    <div>
     <section className="about">
       <div className="main">
       <img src={background1}/>
         <div className="about-text">
           <h1>About Us</h1>
           <p>
           Social Service Reporting and Tracking is a system that enable stakeholders to manage issues and track the progress while resolving them thereby promoting social well-being. Some of the examples of social services providers are YONECO, Police and electricity supply. This project will focus on YONECO that provides social services like empowering the youth
           </p>
           {/* <button type="button">Lets talk</button> */}

         </div>

       </div>

     </section>
    </div>
  )
}
export default About
