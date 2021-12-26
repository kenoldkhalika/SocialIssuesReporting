import React from "react";
import './Home.css';
import fireDb from "firebase";



// import { Form } from "./Form";
//import config from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    //fireDb.initializeApp(config)
    this.state = {
      issues: []
      
    };
   
  }
  

  componentDidMount() {
    this.getUserData();
  } 
  getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };


 

  updateData = issue => {
    this.refs.uid.value = issue.uid;
    this.refs.name.value = issue.name;
    this.refs.subject.value = issue.subject;
    this.refs.contact.value = issue.contact;
    this.refs.email.value = issue.email;
   //  this.refs.email.value = issue.email;
     this.refs.location.value = issue.location;
    this.refs.date.value = issue.date;
     this.refs.issueDescription.value = issue.issueDescription;
  };

  render() {
    const { issues} = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            
          </div>
          <div className="row">
           
                  </div>
                </div>
             
          <div className="row">
            <div className="col-xl-12">
            {/* <button className="btn btn-primary mt-2"> create ticket</button> */}
            <table id="customers">
   <tr>
    <th>NAME</th>
     <th>CONTACT</th>
     <th>SUBJECT</th>
     <th>LOCATION</th>
    <th>DATE</th>
    <th>ACTIONS</th>
   </tr>
   <tbody>
   {issues.map(issue => {
     return(
       <tr>
         <td>{issue.name}</td>
         <td>{issue.contact}</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>
         <td>{issue.date}</td>
         <td> 
           {/* <button
                     onClick={() => this.removeData(issue)}
                      className="button"
                    >
                      Delete
                    </button> */}
                    {/* <button  onClick={() => this.removeData(issue)} class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                    <button
                     onClick={() => this.updateData(issue)}
                      className="btn1"
                    >
                      Edit
                    </button>
                     */}
                    
                    
                    
                    </td>
        
       
       </tr>

     )
     
    } )
   
  
  }
               
            </tbody>
 </table>
          

            </div>
           
          </div>
      </React.Fragment>
     
     
    );
  }
}

export default App;
