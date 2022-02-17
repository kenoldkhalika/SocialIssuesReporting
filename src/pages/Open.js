import React from "react";
import './Home.css';
import fireDb from "firebase";
import IssueDetails from './IssueDetails';
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import {BsPersonCircle, BsColumns } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";


// import { Form } from "./Form";
//import config from "./config";

class Open extends React.Component {
  constructor(props) {
    super(props);
    //fireDb.initializeApp(config)
    this.state = {
      issues: []
    };
   
  }
  

  componentDidMount() {
    this.getUserData();
    this.countPending();
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
  // getUserData = () => {
  //   let ref = fireDb.database().ref("/");
  //   ref.child('issues').orderByChild("state1").endAt("pending").on("value", snapshot => {
  //     const state = snapshot.val();
  //     this.setState(state);
  //   });
  // };

//   dbRef.orderByChild("name").endAt("Raja Tamil").on("child_added", (snap) => {
//     console.log(snap.val());
// });
countPending = () =>{
  const {issues} = this.state;
  const pending = 0;
  issues.map((issue,index) => {
    if (issue.source === 'open'){
       const pendind = pending + 1;
    }
    return pending;
  }) 
  
}

  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };

  updateData = issue => {
    this.refs.uid.value = issue.uid;
    this.refs.state1.value = issue.state1;
    this.refs.name.value = issue.name;
    this.refs.contact.value = issue.contact;
    this.refs.email.value = issue.email;
    this.refs.priority.value = issue.priority;
    this.ref.location.value = issue.location;
    this.ref.date.value = issue.date;
    this.ref.issueDescription.value = issue.issueDescription;
    this.ref.subject.value = issue.subject;
    this.ref.source.value = issue.source;
  };
  
  render() {
    const { issues } = this.state;
    var arrayExample = [];
    var count = 0
    return (
      <div style={{background:"#f0f0f0"}}>
        
     
      <React.Fragment>
       
        <div class="row"  style={{margin:"auto", marginTop:"1px", marginLeft:"300px" }}>
      <div class="col-sm-6" style={{width:"700px"   }}>
      
      {issues.map((issue,index) => {
        if (issue.state1 === 'pending'){   
          for (let i = 0; i < index; i++) {
            console.log(i);
            if (issue.state1 === 'pending'){
              arrayExample.push(i);
              count = index;
              console.log(arrayExample.length)
            }
            
          }
        }

        if (issue.state1 === 'open'){

     return(
        
      <div className='col-6' class="card" key={index} style={{margin:"20px"}}>
      <div class="card-body">
      
   
      <h6 style={{textAlign: 'left',}}><AiTwotoneCalendar style={{marginRight:"15px", fontSize:"1.5em", }}/>{issue.date}  </h6>
      <hr />
    <div className="row">  
    <div className="col-6">
    <h3 style={{textAlign: 'left'}}> <BsPersonCircle style={{marginRight:"15px", fontSize:"1.5em"}}/>
    {issue.name} 
    </h3> </div>
   <div className="col-6">
    <button  style={{width:"90px", fontSize:".5em",  borderRadius: 50 + 'px', color:'#563e7c'}}>open</button>
    </div></div>
    <h5  style={{ textAlign: 'left', marginTop:'10px'}}>{issue.subject}</h5>
    
    <p style={{ textAlign: 'left', }}>{issue.issueDescription}</p>

      
 
      </div>
    </div>
         ) } }
         )
       }
      </div>
      <div class="col-sm-6" style={{width:"260px"   }}>
        <div class="card" style={{margin:"20px"}}>
          <div class="card-body">
          <h6>pending</h6> 
            <a href="Pending" class="btn btn-dark"  style={{width:"134px",borderRadius: 50 + 'px', background:'#563e7c'}}>{count+1}</a>
          </div>
          
          <div class="card-body">
          <h6>open</h6>
            <a href="Open" class="btn btn-dark" onClick={(e)=>this.countPending()} style={{width:"134px",borderRadius: 50 + 'px', background:'#563e7c'}}>{count+1}</a>
          </div>
          <div class="card-body">
          <h6>resolved</h6>
            <a href="#" class="btn btn-dark"  style={{width:"134px",borderRadius: 50 + 'px', background:'#563e7c'}}>0</a>
          </div>

          <div class="card-body" style={{color:'#563e7c'}}>
          <h6 style={{color:'#563e7c'}}>closed</h6>
            <a href="#" class="btn btn-dark" style={{width:"134px",borderRadius: 50 + 'px', background:'#563e7c'}}>0</a>

          </div>
      
        </div>
      </div>
    </div>
      </React.Fragment>
      </div>
     
    );
  }
}

export default Open;

