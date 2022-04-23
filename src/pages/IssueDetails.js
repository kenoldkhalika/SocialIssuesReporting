import React from "react";
import './Home.css';
import fireDb from "firebase";
import Home from './Home';
import { useNavigate } from 'react-router-dom';
// import Form from './Form';
import {toast} from "react-toastify";
// import { Card } from "reactstrap";
import Repoter  from '../Users/Repoter'
import { Container, Button, Modal, Row, Col, FormGroup, Form, FormLabel, FormControl, Card } from "react-bootstrap";
import Toggle from "./Toggle";
import Header from "../components/Header";



// import { Form } from "./Form";
//import config from "./config";

class IssueDetails extends React.Component {
  constructor(props) {
    super(props);
    //fireDb.initializeApp(config)
    this.state = {
      issues: [],
    
      
    };
   
  }
  
  // const navigate = useNavigate();
  componentDidMount() {
    this.getUserData();
    // this.nice();
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
      console.log(state);
      this.setState(state);
    });
  };
  
nav = () =>{
 
}
  changeIssueState = issue =>{
    
    let issueId = issue.uid;
    let issueName = issue.name;
    let issueSubject = issue.subject;
    let issueContact = issue.contact;
    let issueEmail = issue.email;
    let issueLocation = issue.location;
    let issueDate = issue.date;
    let issueDescription = issue.issueDescription;
    let issuePriority = issue.priority;
    let issueSource = issue.source;
    let issueMessage ="Remark: "+this.refs.issueReply.value;
    let issueAssign = issue.assign;
    let issueState = "resolved"
    const current = new Date();
    const dateResolved = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    let issueResolvedDate = dateResolved;
    const { issues } = this.state;
    const devIndex = issues.findIndex(data => {
        return data.uid === issueId;
      });
     
      issues[devIndex].name = issueName;
      issues[devIndex].contact = issueContact;
      issues[devIndex].email = issueEmail;
      issues[devIndex].subject = issueSubject;
      issues[devIndex].email = issueEmail;
      issues[devIndex].location = issueLocation;
      issues[devIndex].date = issueDate;
      issues[devIndex].issueDescription = issueDescription;
      issues[devIndex].priority = issuePriority;
      issues[devIndex].source = issueSource;
      issues[devIndex].subject = issueSubject;
      issues[devIndex].state1 = issueState;
      issues[devIndex].assign = issueAssign;
      issues[devIndex].message = issueMessage;
      issues[devIndex].resolvedDate = issueResolvedDate
      this.setState({ issues });

  };


  render() {

    const { issues} = this.state;
    return (
      <React.Fragment >
        <Header/>
        <div  className="container">
          <div className="row">
        
          </div>
          <div className="row">
           
                  </div>  
                      {/* <React.Fragment>
        <Toggle label="Resolved" />
      </React.Fragment> */}
                </div>
             
          <div className="row">
            <div className="col-xl-12">
            {/* <button className="btn btn-primary mt-2"> create ticket</button> */}
      
   {issues.map(issue => {
     if (issue.uid == window.localStorage.getItem('data') && 
     window.localStorage.getItem('name') !== 'Admin')
     return(
        <div>
          <div className="row">
            <div className="col-2"></div>
              <div className="col-8"> <br />
              <Card  style = {{width:'900px', paddingTop:'5px'}}>
            <Card.Header>ASSIGN: {issue.assign}  {window.localStorage.getItem('reso')} </Card.Header>
            <Card.Body>
              <Card.Title>{issue.subject} Reported by {issue.name}</Card.Title>
              
              <Card.Text>
                {issue.issueDescription} on {issue.date}
              </Card.Text> <hr />
            
              Email: {issue.email} | Contact: {issue.contact} | District: {issue.location}<br />
              T/A: {issue.ta}  | Village: {issue.village}
              <h5>priority: {issue.priority}</h5> 
               <p >{issue.message} {issue.repoterMessage}</p>
              
              <br />
              <Form>
         <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group className="mb-3" controlId="formGridState">
               <Col sm="12">
               <Form.Control as="textarea" rows={3} ref = "issueReply" placeholder="Add a remark to this issue " />
               </Col> <br />
               {/* <Toggle/> */}
             </Form.Group> 
        
          </div><Button type="submit" style={{background:"#563e7c",}} onClick={(e)=>this.changeIssueState(issue)}>Submit</Button>
          <div className="col 6">

          </div>
       </div>
                        </Form>
              {/* <Form> <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} ref = "issueReply" placeholder="Add a remark to this issue " />
                  <br /><Toggle/><Button type="submit" style={{background:"#563e7c",  }}>Submit</Button>>
                  </Form.Group>
              </Form> */}
            </Card.Body> 
            <Card.Footer className="text-muted">This issue was reported on : {issue.openDate} [{issue.numberDays} day(s) ago] | resolved : {issue.resolvedDate}</Card.Footer>

            </Card>
            </div>
              <div className="col-2"></div>
            </div>
        </div>

     )
    //  else if (issue.uid == window.localStorage.getItem('data') && issue.state1 == 'resolved'
    //  && window.localStorage.getItem('name') !== 'Adimin')
    //   return(
    //     <div>
    //       <div className="row">
    //         <div className="col-2"></div>
    //           <div className="col-8">
    //           <Card  style = {{width:'900px', paddingTop:'5px'}}>
    //         <Card.Header>ASSIGN: {issue.assign}</Card.Header>
    //         <Card.Body>
    //           <Card.Title>{issue.subject} Reported by {issue.name}</Card.Title>
              
    //           <Card.Text>
    //             {issue.issueDescription} on {issue.date}
    //           </Card.Text> <hr />
            
    //           Email: {issue.email} | Contact: {issue.contact} | Location: {issue.location}<br />
    //           <h5>priority: {issue.priority}</h5> 
    //           {issue.AdiminMessage} | Remark: {issue.message} {window.localStorage.getItem('reso')} {window.localStorage.getItem('data')}
    //           <br />
    //         </Card.Body>
    //         <Card.Footer className="text-muted">This issue was reported on : {issue.openDate} | resolved : {issue.resolvedDate}</Card.Footer>

    //         </Card>
    //         </div>
    //           <div className="col-2"></div>
    //         </div>
    //     </div>
    //   )
     else if (issue.uid == window.localStorage.getItem('data') && 
     window.localStorage.getItem('name') == 'Admin')
     
      return (
       <div><Repoter /></div>
     )
   })
   
  
  }
          

            </div>


          </div>
          
      </React.Fragment>
     
     
    );
  }
}

export default IssueDetails;


