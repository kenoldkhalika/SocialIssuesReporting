import React from "react";
import fireDb from "firebase";
import IssueDetails from './IssueDetails'
import {toast} from "react-toastify";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";


class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      issues: [],
      yourvariable: null
    };
  }

  componentDidMount() {
    this.getUserData();
  }
  sendVariable(uid){
    this.setState({yourvariable: uid});
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

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let contact = this.refs.contact.value;
    let email = this.refs.email.value;
    let location = this.refs.location.value;
    let date = this.refs.date.value;
    let issueDescription = this.refs.issueDescription.value;
    let subject = this.refs.subject.value;
    let priority = "low";
    let source = "Web app";

    let uid = this.refs.uid.value;
    toast.configure();

    if (uid && name && contact && email && location && date && issueDescription && subject) {
      const { issues } = this.state;
      const devIndex = issues.findIndex(data => {
        return data.uid === uid;
      });
     
      issues[devIndex].name = name;
      issues[devIndex].contact = contact;
      issues[devIndex].email = email;
      issues[devIndex].subject = subject;
      // issues[devIndex].email = email;
       issues[devIndex].location = location;
      issues[devIndex].date = date;
       issues[devIndex].issueDescription = issueDescription;
      this.setState({ issues });
    } else if (name && <i class="fas fa-meh-rolling-eyes    "></i>) {
      const uid = new Date().getTime().toString();
      const { issues } = this.state;
      issues.push({ uid, name, contact, email, location, date, issueDescription, subject, priority, source});
      this.setState({ issues });
     
        toast('added successfully',
        {position:toast.POSITION.TOP_CENTER, autoClose:800})
       
    }
    

    this.refs.name.value = "";
    this.refs.contact.value = "";
    this.refs.email.value = "";
    // this.refs.email.value = "";
     this.refs.location.value = "";
    this.refs.date.value = "";
     this.refs.issueDescription.value = "";
     this.refs.subject.value = "";
    this.refs.uid.value = "";
  };

  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };

  updateData = issue => {
    this.refs.uid.value = issue.uid;
    this.refs.uid.value = issue.uid;
    this.refs.name.value = issue.name;
    this.refs.contact.value = issue.contact;
    this.refs.email.value = issue.email;
   //  this.refs.email.value = issue.email;
     this.ref.location.value = issue.location;
     this.ref.date.value = issue.date;
     this.ref.issueDescription.value = issue.issueDescription;
      this.ref.subject.value = issue.subject;
  };

  render() {
    const { issues } = this.state;
    return (
      <Container>
      <div className="row">
         <div className className="col-2"> </div>
         <div className className="col-8"> 
         <Row>
       <Col>
       <br />
       <h3 style={{color:"#563e7c"}}>Add your issue</h3>
       <hr />
         <Form onSubmit={this.handleSubmit} >
         <input type="hidden" ref="uid" />
           
         <Form.Group  as={Col} controlId="formGridEmail">
             
               <input 
               type="text"
               ref="name"
               className="form-control"
               placeholder="Full Name"/>
         </Form.Group>
             
         <Form.Group as={Col} controlId="formGridPassword">
             <br />
               <input
                   type="text"
                   ref="email"
                   className="form-control"
                   placeholder="Email"/>
         </Form.Group>
          

           <br />
         <Form.Group as={Col} controlId="formGridLocation">
               
               <input  
                   type="text"
                   ref="location"
                   className="form-control"
                   placeholder="Location"/>
         </Form.Group>
         <br />

         <Form.Group as={Col} controlId="formGridEmail">
               
               <input
                type="text"
                ref="contact"
                className="form-control"
                placeholder="contact"/>
         </Form.Group>
           
         <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Subject</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="Gender based violence" ref="subject">
               <option>Gender based violence</option>
               <option>Child abuse</option>
               </Form.Select>
               </Col>
             </Form.Group>
            <hr />
          </div>
          <div className="col 6">
            <hr />
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Assign</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="J.Msosa">
                 <option>J.Msosa</option>
                 <option>K.Khalika</option>
               </Form.Select>
               </Col>
             </Form.Group>

           <hr />
          </div>
       </div>
       <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Priority</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="Midium">
                 <option>Midium</option>
                 <option>Low</option>
                 <option>High</option>
               </Form.Select>
               </Col>
             </Form.Group>
            <hr />
          </div>
          <div className="col 6">
            <hr />
            <Form.Group as={Row} className="mb-3" controlId="formGridLocation" >
         <Form.Label column sm="2">
           Date
         </Form.Label>
         <Col sm="10">
           <Form.Control type="date" placeholder="Normal text"  ref = "date" />
         </Col>
         </Form.Group>

           <hr />
          </div>
       </div>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         
             <Form.Control as="textarea" rows={3} ref = "issueDescription" placeholder="Add description, to clarify the issue" />
           </Form.Group>
           <br />
           <Form.Group className="position-relative mb-3">
         <Form.Control
           type="file"
           // required
           name="file"
           
         />

         <Form.Control.Feedback type="invalid" tooltip>
           
         </Form.Control.Feedback>
       </Form.Group>
       
       <hr /> {' '} 
       <div className="row">
         <div className="col-10"></div>
         <div className="col-2" >
           <Button type="submit" style={{background:"#563e7c",  }}>Add Issue</Button>
         </div>
       </div>
       <br />
       <br />
       {/* <Button variant="outline-primary">Preview</Button>{' '} 
       <Button type="submit" style={{background:"#563e7c",  }}>Add</Button> */}
       
         </Form>
       
       </Col>
     </Row>
         </div>
         <div className className="col-1"></div>
     </div>
     
   </Container>
  )
  }
}

export default IssueForm;
