
import React from "react";
import './Home.css';
import fireDb from "firebase";
import IssueDetails from './IssueDetails';
import { Link } from "react-router-dom";


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

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    fireDb.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };
  
  getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };


  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };

  updateData = issue => {
    // this.refs.uid.value = issue.uid;
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
    const { issues } = this.state;
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
                     <ul class="list-inline m-0">
                                                <li class="list-inline-item">
                      <Link className="btn btn-primary btn-sm rounded-0"  onClick={() => this.updateData(issue)} to="/moda" 
                       type="button" data-toggle="tooltip" data-placement="top"
                        title="Add"><i class="fa fa-table"></i>view</Link>
                      </li>
                        <li class="list-inline-item">
                          <button class="btn btn-success btn-sm rounded-0" 
                                                    type="button" data-toggle="tooltip" 
                                                    data-placement="top" title="Edit"><i 
                                                     class="fa fa-edit"></i>edit</button>
                                                </li>
                                                <li class="list-inline-item">
                                                    <button   onClick={() => this.removeData(issue)} 
                                                    class="btn btn-danger btn-sm rounded-0" 
                                                    type="button" data-toggle="tooltip" 
                                                    data-placement="top" title="Delete"><i 
                                                    class="fa fa-trash"></i>delete</button>
                                                </li>
                                            </ul>
                    
                    
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
