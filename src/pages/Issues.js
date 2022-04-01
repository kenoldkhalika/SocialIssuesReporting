
import React from "react";
import $ from 'jquery'
import './Home.css';
import fireDb from "firebase";
import {toast} from "react-toastify";
import IssueDetails from './IssueDetails';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Modal, Row, Col, Form, FormGroup, FormLabel, FormControl, Card } from "react-bootstrap";
import './Issues.css';
import ToggleButton from 'react-toggle-button'
import { AiOutlineEdit,AiOutlineFileAdd } from "react-icons/ai";
import {GrView} from "react-icons/gr";
import {MdOutlineDelete} from "react-icons/md";
import Header from "../components/Header";
import AddOption from "./AddOption";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],

    };
    this.handleClose = this.handleClose.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
    this.closeIssue = this.closeIssue.bind(this);

  
  }

handleClose(){
  this.setState({
      show: false
  })
}
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
  let state1 = "pending"
  let assign = this.refs.assign.value;
  let uid = this.refs.uid.value;
  toast.configure();
  console.log(uid);

    const { issues } = this.state;
    const devIndex = issues.findIndex(data => {
      return data.uid === uid;
    });
    
    issues[devIndex].name = this.refs.name.value;
    issues[devIndex].contact = contact;
    issues[devIndex].email = email;
    issues[devIndex].subject = subject;
    issues[devIndex].state1 = state1;
    issues[devIndex].email = email;
     issues[devIndex].location = location;
    issues[devIndex].date = date;
     issues[devIndex].issueDescription = issueDescription;
     issues[devIndex].assign = assign;
    this.setState({ issues });
  

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

  componentDidMount() {
    this.getUserData();
    this.handleClick();
    this.getNumberOfDays();
    this.getUserData1();
  }

  getNumberOfDays = () =>{
    // JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
var date1 = new Date("06/30/2019");
var date2 = new Date("07/30/2019");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log("Total number of days between dates <br>"
			+ date1 + "<br> and <br>"
			+ date2 + " is: <br> "
			+ Difference_In_Days);
// console.log("Justine");
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
  getUserData1 = () => {
    let ref = fireDb.database().ref("issues");
    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    //   console.log(snapshot.val());
    //   console.log(snapshot.ref.toString());
    // });
    ref.orderByChild("subject").equalTo("Gender based violence").on("child_added", (snap) => {
      console.log(snap.val());
      console.log(snap.key);
      window.localStorage.setItem('subjectCo', snap.key);
  });
  };

  getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };


//   ref.orderByChild("contact").on("child_added", snap => {
//     console.log(snap.val());
//    });
//    ref.orderByChild("name").startAt("Mike Msosa").on("child_added", (snap) => {
//     console.log(snap.val());
// });

  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };
 
  handleInputChange = (e)=>{
    this.setState({
      ...this.state,

    })

  }
  handleChange=(event) => {
    console.log(event.target.value);
  }
 
  updateData = issue => {
    this.refs.uid.value = issue.uid;
    // this.refs.state1.value = issue.state1;
    this.refs.name.value = issue.name;
    this.refs.contact.value = issue.contact;
    this.refs.email.value = issue.email;
    // this.refs.priority.value = issue.priority;
    this.refs.location.value = issue.location;
    this.refs.date.value = issue.date;
    this.refs.issueDescription.value = issue.issueDescription;
    this.refs.subject.value = issue.subject;
    this.refs.assign.value = issue.assign;
    // this.refs.source.value = issue.source;

    $('#form1').toggle().delay(100).fadeOut(5000000);
    $(this).prev().slideUp();
    $(this).first().slideUp();
    $('#customers').slideUp().delay(5000).fadeOut(5000000);
    $(this).next().slideUp();
  };
  closeIssue =() =>{
    $('#customers').slideDown();
    $('#form1').hide().delay(100).fadeOut(5000);
  }
  forRepoter = issue =>{
    window.localStorage.setItem('data', issue.uid);
  }
  changeIssueState = issue =>{
    window.localStorage.setItem('data', issue.uid);
    const user = window.localStorage.getItem('name');
    if (issue.state1 !== 'resolved' && user !== "reporter" ){
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
    let issueAssign = issue.assign;
    let issueState = 'open'
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
      issues[devIndex].state1 = issueState;
      issues[devIndex].assign = issueAssign;
      this.setState({ issues });

  }
  };
  onTodoChange(value){
    this.setState({
         name: value
    });
}

handleClick = () => {
  $('.formButton').on('click', function(){
     $('#form1').slideDown().delay(100).fadeOut(5000);
     $(this).next().slideUp()

  });
}
  render (){
    return(<div>
    dhuhuh
      </div>
    )
  }
  render (){
    return (
      <>hudhudd
      </>
    )
    // if (window.localStorage.getItem('name') == 'repoter'){
    //   return (
    //     <Link to="/add">   <div className="addbutton" ><AiOutlineFileAdd/></div></Link> 
    //   )
    // }
  }
  render() {
    
    const { issues } = this.state;

    return (
     
      <React.Fragment>
         {/* <Header/> */}
        
        <div className="container">
          <div className="row">
            
          </div>
          <div className="row">          
                </div>  
                < AddOption />
                </div>             
          <div className="row"> 
            <div className="col-xl-12">
              {/* {issues.map(issue => {
                if (issue.assign == "repoter" ){
                return( <div>
               

                </div>
                )}})}         */}
            <table id="customers"> 
   <tr>
    <th >NAME</th>
     <th>CONTACT</th>
     <th>SUBJECT</th>
     <th>LOCATION</th>
    <th>DATE</th>
    <th>STATE</th>
    <th>ASSIGN</th>
    <th>ACTIONS</th>
   </tr>
   <tbody>
   {issues.map(issue => {
     const user = window.localStorage.getItem('name');
     if (issue.assign == user ){
     return(
      //  <div>
       <tr href="/issue-details" onClick={(e)=>this.changeIssueState(issue)}>
         <td>{issue.name }</td>
         <td>{issue.contact}</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>

         <td>{issue.date}</td>
         <td>{issue.state1}</td>
         <td>{issue.assign}</td>
         <td> 
            <ul class="list-inline m-0">
              <li class="list-inline-item">  
              <a href="/issue-details" class="fa fa-table" onClick={(e)=>this.changeIssueState(issue)}><GrView></GrView> </a>

              {/* <Link to="/issue-details" >
                <div  
                 
              onClick={(e)=>this.changeIssueState(issue)}  
                // onClick={(e)=>{this.handleShowModal(issue.contact); }}
                title="View"><i class="fa fa-table"></i><GrView></GrView></div> </Link> */}
              </li>
{/* 
              <li class="list-inline-item"> 
                <Link to="#" >  
                <div 
                onClick={(e)=> this.updateData(issue)} 
               data-toggle="tooltip" 
                 data-placement="top" title="Edit">
                <i class="fa fa-edit"> </i><AiOutlineEdit></AiOutlineEdit></div></Link>
              </li> */}
              {/* <li class="list-inline-item">
              <div onClick={(e)=>this.removeData(issue)} 
               
             data-toggle="tooltip" 
              value={issue.name}
              data-placement="top" title="Delete"><i 
              class="fa fa-trash"></i><MdOutlineDelete /></div>
              </li> */}
              </ul>
                    
                    
            </td>
        
       
       </tr>

     )}
   else if (user=='repoter') 
      if (issue.source == "Mobile app") return (
        <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.contact}</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table" onClick={(e)=>this.forRepoter(issue)}><GrView></GrView> </a>
         </li>
         </ul>        
       </td>
   
  
  </tr>

      )
      else  return(
     
    <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.contact}</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"
          onClick={(e)=>this.forRepoter(issue)}>
            <GrView></GrView> </a>
         </li>

         <li class="list-inline-item"> 
           <Link to="#" >  
           <div 
           onClick={(e)=> this.updateData(issue)} 
          data-toggle="tooltip" 
            data-placement="top" title="Edit">
           <i class="fa fa-edit"> </i><AiOutlineEdit></AiOutlineEdit></div></Link>
         </li>
         <li class="list-inline-item">
         <div onClick={(e)=>this.removeData(issue)} 
          
        data-toggle="tooltip" 
         value={issue.name}
         data-placement="top" title="Delete"><i 
         class="fa fa-trash"></i><MdOutlineDelete /></div>
         </li>
         </ul>
               
               
       </td>
   
  
  </tr>)
   }) 
   
  
  }
               
      </tbody>
      </table>

              <Container>
      <div className="row">
         <div className="col-2"></div>
         <div className="col-8"> 
         <Row>
       <Col>

         <Form id="form1" onSubmit={this.handleSubmit} >
         <br />
       <h3 style={{color:"#563e7c"}}>Edit issue</h3>
       <hr />
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
                   type="email"
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
        
          </div>
          <div className="col 6">
            <hr />
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
               <Form.Label column sm="2">Assign</Form.Label>
               <Col sm="10">
               <Form.Select defaultValue="J.Msosa" ref="assign">
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
               <Form.Select defaultValue="Medium">
                 <option>Medium</option>
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
           <Button type="submit" style={{background:"#563e7c",  }} onClick={(e)=> this.closeIssue()} >Edit Issue</Button>
         </div>
       </div>
       <br />
       <br />
      </Form>
      
       
       </Col>
     </Row>
         </div>
         <div className="col-1"></div>
     </div>
     
   </Container>
     </div>
    </div>
    
  </React.Fragment>
  
     );
  
  }
 
}

export default App;
