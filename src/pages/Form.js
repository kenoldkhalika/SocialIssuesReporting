import React from "react";
import fireDb from "firebase";
import IssueDetails from './IssueDetails'
import {toast} from "react-toastify";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

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
        <Row>
          <Col>
          <br />
          <h3 style={{color:"#563e7c"}}>Add your issue</h3>
          <hr />
            <Form onSubmit={this.handleSubmit}>
            <input type="hidden" ref="uid" />
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <input 
                  type="text"
                  ref="name"
                  className="form-control"
                  placeholder="Enter Name"/>
                </Form.Group>
                
            <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <input
                      type="text"
                      ref="email"
                      className="form-control"
                      placeholder="Email"/>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLocation">
                  <Form.Label>Location</Form.Label>
                  <input  
                      type="text"
                      ref="location"
                      className="form-control"
                      placeholder="Location"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Contact</Form.Label>
                  <input
                   type="text"
                   ref="contact"
                   className="form-control"
                   placeholder="contact"/>
                </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select defaultValue="Gender based violence" ref="subject">
                    <option>Gender based violence</option>
                    <option>Child abuse</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select defaultValue="Midium">
                    <option>Midium</option>
                    <option>Low</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Assign</Form.Label>
                  <Form.Select defaultValue="J.Msosa">
                    <option>J.Msosa</option>
                    <option>K.Khalika</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Issue Description</Form.Label>
                <Form.Control as="textarea" rows={3} ref = "issueDescription" />
              </Form.Group>

            <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              // required
              name="file"
              
            />

            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation" >
            <Form.Label column lg={2}>
              Open Date
            </Form.Label>
            <Col>
              <Form.Control type="date" placeholder="Normal text"  ref = "date" />
            </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label column lg={2}>
              Due Date
            </Form.Label>
            <Col>
              <Form.Control type="date" placeholder="Normal text" />
            </Col>
            </Form.Group>
          </Row>
          <hr /> {' '} 
          <Button variant="outline-primary">Preview</Button>{' '} 
          <Button type="submit" style={{background:"#563e7c" }}>Submit form</Button>
          
            </Form>
          
          </Col>
        </Row>
      </Container>
  )
  }
}

export default IssueForm;
