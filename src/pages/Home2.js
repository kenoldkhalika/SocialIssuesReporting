import React from "react";
import './Home.css';
import fireDb from "firebase";
import IssueDetails from './IssueDetails';
import { Link } from "react-router-dom";
import { Card } from "reactstrap";


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
      <div style={{background:"#f0f0f0"}}>
      <React.Fragment >
        
        <div class="row"  style={{margin:"auto", marginTop:"10px", marginLeft:"300px" }}>
      <div class="col-sm-6" style={{width:"700px"   }}>
      {issues.map((issue,index) => {
     return(
        <div class="card" key={index} style={{margin:"20px"}}>
          <div class="card-body">
         
  
      
        <h5>{issue.name}</h5>
        <h5>{issue.contact}</h5>

     
     
          </div>
        </div>
         ) }
         )
       }
      </div>
      <div class="col-sm-6" style={{width:"200px"   }}>
        <div class="card" style={{margin:"20px"}}>
          <div class="card-body">
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-body">
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-body">
            open<br />
            <a href="#" class="btn btn-primary">0</a>
          </div>
          <div class="card-body">
            <a href="#" class="btn btn-primary">Go somewhere</a>

          </div>
          
        </div>
      </div>
    </div>
      </React.Fragment>
     
      </div>
    );
  }
}

export default App;




// <Card key={index} style={{margin:"20px"}}>
// <h5>{issue.name}</h5>
//  <h5>{issue.contact}</h5>

// </Card>
