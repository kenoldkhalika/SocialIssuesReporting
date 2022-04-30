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
    let ta = this.refs.ta.value;
    let village = this.refs.village.value;
    let contact = this.refs.contact.value;
    let email = this.refs.email.value;
    let location = this.refs.location.value;
    let date = this.refs.date.value;
    let issueDescription = this.refs.issueDescription.value;
    let subject = this.refs.subject.value;
    let priority = this.refs.priority.value;
    let source = "Web app";
    let state1 = "pending"
    let assign = this.refs.assign.value;
    let uid = this.refs.uid.value;
    let message = "Your issue will be handled soon";
    const current = new Date();
    const dateOpened = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    let openDate = dateOpened;
    let resolvedDate = " not yet";
    let repoterMessage = "  ";
    let numberDays = " ";
    toast.configure();

    if (uid && name && contact && email && location && date && 
      issueDescription && subject && state1 && assign && message
       && openDate && resolvedDate && repoterMessage && ta && village && numberDays) {
      const { issues } = this.state;
      const devIndex = issues.findIndex(data => {
        return data.uid === uid;
      });
       
      issues[devIndex].name = name;
      issues[devIndex].ta = ta;
      issues[devIndex].numberDays = numberDays;
      issues[devIndex].village = village;
      issues[devIndex].contact = contact;
      issues[devIndex].email = email;
      issues[devIndex].subject = subject;
      issues[devIndex].state1 = state1;
      issues[devIndex].email = email;
      issues[devIndex].location = location;
      issues[devIndex].date = date;
      issues[devIndex].assign = assign;
      issues[devIndex].message = message;
      issues[devIndex].openDate = openDate; 
      issues[devIndex].resolvedDate = resolvedDate;
      issues[devIndex].repoterMessage = repoterMessage;
      issues[devIndex].issueDescription = issueDescription;
      this.setState({ issues });
    } else if (name && <i class="fas fa-meh-rolling-eyes    "></i>) {
      const uid = new Date().getTime().toString();
      const { issues } = this.state;
      issues.push({ uid, name, contact, email, location, date, 
        issueDescription, subject, priority, source, state1, 
        assign, message, openDate, resolvedDate,ta, village, repoterMessage, numberDays});
      this.setState({ issues });
     
        toast('added successfully',
        {position:toast.POSITION.TOP_CENTER, autoClose:800})
       
    }
    

    this.refs.name.value = "";
    this.refs.ta.value = "";
    this.refs.village.value = "";
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
    this.refs.ta.value = issue.ta;
    this.refs.village.value = issue.village;
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
    this.ref.source.value = issue.assign;
    this.ref.assign.value = issue.assign;
  };

  render() {
    const { issues } = this.state;
    return (
      <Container>
      <div className="row">
         <div className="col-2"> </div>
         <div className="col-8"> 
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
               required
               placeholder=" victim's full Name"/>
         </Form.Group>
           <br />
        <div className="row">
            <div className="col-6"> <hr />
           
            <Form.Group as={Col} controlId="formGridPassword">
             <br />
               <input
                   type="email"
                   ref="email"
                   className="form-control"
                   required
                   placeholder="Email"/>
         </Form.Group>
         <br /> 
            </div> 
            <div className="col-6"> <hr />
            <div className="col 6">  <br />
           
          <Form.Group as={Row} className="mb-3" controlId="formGridState" required>
               <Form.Label column sm="2">District</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="J.Msosa" ref="location" required>
               <option>Zomba</option>
               <option>Dedza</option>
               <option>Dowa</option>
               <option>Kasungu</option>
               <option>Lilongwe</option>
               <option>Nkhotakota</option>
               <option>Ntcheu</option>
               <option>Ntchisi</option>
               <option>Salima</option>
               <option>Chitipa</option>
               <option>Karonga</option>
               <option>Likoma</option>
               <option>Mzimba</option>
               <option>Nkhata Bay</option>
               <option>Rumphi</option>
               <option>Balaka</option>
               <option>Blantyre</option>
               <option>Chikwawa</option>
               <option>Chiradzulu</option>
               <option>Machinga</option>
               <option>Mulanje</option>
               <option>Mwanza</option>
               <option>Nsanje</option>
               <option>Thyolo</option>
               <option>Phalombe</option> 
               <option>Mangochi</option>
               <option>Neno</option>
               </Form.Select>
               </Col>
             </Form.Group>

     
          </div>

            </div>
        </div>
        <div className="row">
          <div className="col-6"> <hr />
          
         <Form.Group as={Col} controlId="formGridLocation">
               
               <input  
                   type="text"
                   ref="ta"
                   required
                   className="form-control"
                   placeholder="T/A"/>
         </Form.Group>  <hr />
         <br />
          </div>
          <div className="col-6">  <hr />
          <Form.Group as={Col} controlId="formGridLocation">
               
               <input  
                   type="text"
                   ref="village"
                   required
                   className="form-control"
                   placeholder="Village"/> <hr />
         </Form.Group>
         <br />
          </div>
        </div>

         <Form.Group as={Col} controlId="formGridEmail">
               
               <input
                type="number"
                ref="contact"
                required
                className="form-control"
                placeholder="contact"/>
         </Form.Group>
         <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Subject</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="Gender based violence" ref="subject" required>
               <option>Gender based violence</option>
               <option>Child abuse</option>
               <option>Child labor</option>
               <option>Child marriages</option>
               </Form.Select>
               </Col>
             </Form.Group>
        
          </div>
          <div className="col 6">
            <hr />
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Assign</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="J.Msosa" ref="assign" required>
                 <option>J.Msosa</option>
                 <option>K.Khalika</option>
               </Form.Select>
               </Col>
             </Form.Group>

     
          </div>
       </div>
       <div className="row">
          <div className="col 6">
          <hr />
           <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Priority</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="Medium" required ref='priority'>
                 <option>Medium
  
                 </option>
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
           <Form.Control type="date" placeholder="Normal text"  ref = "date" required />
         </Col>
         </Form.Group>

           <hr />
          </div>
       </div>
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         
             <Form.Control as="textarea" rows={3} ref = "issueDescription" placeholder="Add description, to clarify the issue" required/>
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
         <div className="col-1"></div>
     </div>
     
   </Container>
  )
  }
}

export default IssueForm;
