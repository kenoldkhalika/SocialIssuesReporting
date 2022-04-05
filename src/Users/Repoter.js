import React from 'react'
import fireDb from "firebase";

import About from '../pages/About';
import { Container, Button, Modal, Row, Col, FormGroup, Form, FormLabel, FormControl, Card } from "react-bootstrap";

class Repoter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            issues: [],
        }
    }
    handleSubmit1 = event => {
      event.preventDefault();
      let priority = this.refs.priority.value;
      let assign = this.refs.assign.value;
      let uid = window.localStorage.getItem('data');
      // console.log(uid);
    
        const { issues } = this.state;
        const devIndex = issues.findIndex(data => {
          return data.uid === uid;
        });
 
         issues[devIndex].assign = assign;
         issues[devIndex].priority = priority;
        this.setState({ issues });
      
    };

    handleSubmit = issue => {
    let issueId = issue.uid;
    let issueName = issue.name;
    let issueSubject = issue.subject;
    let IssueState = issue.state1;
    
  
    const current = new Date();
    const dateResolved = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const Difference_In_Time1 = `${current.getTime()}`;
    const Difference_In_Time2 = issue.date - Difference_In_Time1;
    var date1 = new Date(dateResolved.toString());
    var date2 = new Date(issue.openDate.toString());
    var time1 = date1.getTime() - date2.getTime();
    console.log(Difference_In_Time1);
    var Difference_In_Days = time1 / (1000 * 60 * 60 * 24);

    
    let issueContact = issue.contact;
    let issueEmail = issue.email;
    let issueLocation = issue.location;

    let issueDate = issue.date;
    let issueDescription = issue.issueDescription;
    let issuePriority = this.refs.priority.value;
    let issueSource = issue.source;
    let issueAssign = this.refs.assign.value;;
    let issueState = issue.state1;
    console.log(issue.uid);
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

      issues[devIndex].state1 = IssueState;
      issues[devIndex].assign = issueAssign;
      this.setState({ issues });



    };
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
      // console.log(state);
      this.setState(state);
    });
  };



    render(){
        const { issues} = this.state;

        return (
          
            <div style={{background:"#f0f0f0"}}> <br /> 
            {issues.map(issue => {
              if (issue.uid == window.localStorage.getItem('data') 
              && window.localStorage.getItem('name') == 'repoter' && issue.source !== "Mobile app"){
                return (
                  <div >
                  <div className="row">
                    <div className="col-2"></div>
                      <div className="col-8">
                      <Card  style = {{width:'900px', paddingTop:'5px'}}>
                    <Card.Header>ASSIGN: {issue.assign}</Card.Header>
                    <Card.Body>
                      <Card.Title>{issue.subject} Reported by {issue.name}</Card.Title>
                      
                      <Card.Text>
                        {issue.issueDescription} on {issue.date}
                      </Card.Text> <hr />
                    
                      Email: {issue.email} | Contact: {issue.contact} | Location: {issue.location}<br />
                      <h5>priority: {issue.priority}</h5> 
                      {issue.repoterMessage} | Remark: {issue.message}
                      <br />
                    </Card.Body>
                    <Card.Footer className="text-muted">This issue was reported on : {issue.openDate} | resolved : {issue.resolvedDate}</Card.Footer>
        
                    </Card>
                    </div>
                      <div className="col-2"></div>
                    </div>
                    
                </div>
                ) } else  if (issue.uid == window.localStorage.getItem('data') 
                && window.localStorage.getItem('name') == 'repoter' && issue.source == "Mobile app"){
                  return (
                    <div > 
                    <div className="row">
                      <div className="col-2"></div>
                        <div className="col-8">
                        <Card  style = {{width:'900px', paddingTop:'5px'}}>
                      <Card.Header>ASSIGN: {issue.assign}</Card.Header>
                      <Card.Body>
                        <Card.Title>{issue.subject} Reported by {issue.name}</Card.Title>
                        
                        <Card.Text>
                          {issue.issueDescription} on {issue.date}
                        </Card.Text> <hr />
                      
                        Email: {issue.email} | Contact: {issue.contact} | Location: {issue.location}<br />
                        <h5>priority: {issue.priority}</h5> 
                        <Form >
         <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Priority</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="Gender based violence" ref="priority" required>
               <option>Medium</option>
                 <option>Low</option>
                 <option>High</option> 
               </Form.Select>
               </Col>
             </Form.Group>  <hr />
        
          </div>          <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Assign</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="J.Msosa" ref="assign" required>
                 <option>J.Msosa</option>
                 <option>K.Khalika</option>
               </Form.Select>
               </Col>
             </Form.Group>  <Button type="submit" style={{background:"#563e7c",  }} onClick={(e)=>this.handleSubmit(issue)}>Submit</Button>
          <div className="col 6">

          </div>
       </div>
                        </Form>
                      </Card.Body>
                      <Card.Footer className="text-muted">This issue was reported on : {issue.openDate} | resolved : {issue.resolvedDate}</Card.Footer>
          
                      </Card>
                      </div>
                        <div className="col-2"></div>
                      </div>
                      
                  </div>

                  )}
                
               })} 
         
            </div>
        );
    }
 
};
export default Repoter;