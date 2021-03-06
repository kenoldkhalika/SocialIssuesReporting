import React from "react";
import $ from 'jquery'
import './Home.css';
import fireDb from "firebase";
import {toast} from "react-toastify";
// import Header from "../components/Header";
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

/**
 * The handleClose function is called when the user clicks the close button on the modal. It sets the
 * show state to false, which closes the modal.
 */
handleClose(){
  this.setState({
      show: false
  })
}
/* Updating the state of the component. */
handleSubmit = event => {
  event.preventDefault();
  let name = this.refs.name.value;
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
    issues[devIndex].priority = priority;
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

 /**
  * ComponentDidMount() is a function that runs after the component is rendered.
  */
  componentDidMount() {
    this.getUserData();
    this.handleClick();
    this.clickButton();
    // this.changeNumberDays11();
    // document.getElementById("button").click();
    // this.getUserData1();
  }



 /**
  * If the state has changed, then write the new state to the database.
  * @param prevProps - The previous props.
  * @param prevState - The previous state.
  */
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
  
    }
   
  }

  componentWillUpdate(){
    // document.getElementById("button").click();

  }

  /* Saving the state of the component to the database. */
  writeUserData = () => {
    fireDb.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

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

/* Hiding the button after it is clicked. */
clickButton = () => {
 
  if (window.localStorage.getItem("hidebutton") =="yes"){
    $('#button').slideUp().delay(5000000).fadeOut(5000000);
    document.getElementById('button').style.visibility = 'hidden';
  }
}

/* Changing the priority of the issue to Medium or High depending on the number of days the issue has
been open. */
changePriority = () =>{
  const { issues } = this.state;
  window.localStorage.setItem("hidebutton", "yes");
  issues.map(issue => {
      if (parseInt(issue.numberDays) >= 5){


      const changePriority1 = issue => {
        if (issue.priority == "Low"){
          let issueId = issue.uid;
        let issuePriority = "Medium";
  
        console.log(issue.uid);
        const { issues } = this.state;
        const devIndex = issues.findIndex(data => {
            return data.uid === issueId;
          });
         
          issues[devIndex].priority = issuePriority;
          return this.setState({ issues });

        } 
        else{
          let issueId = issue.uid;
        let issuePriority = "High";
  
        console.log(issue.uid);
        const { issues } = this.state;
        const devIndex = issues.findIndex(data => {
            return data.uid === issueId;
          });
         
          issues[devIndex].priority = issuePriority;
          return this.setState({ issues });
          
        } 
    
        };
        changePriority1(issue)
      }


  });
  // $("#button").hide();
  $('#button').slideUp().delay(5000).fadeOut(5000000);
}
 /* The above code is a function that is called when a button is clicked. The function is supposed to
 update the number of days a ticket has been open. */
  changeNumberDays11 = () =>{
    const { issues } = this.state;

    issues.map(issue => {
 
        
        const changeNumberDays = issue => {
          let issueId = issue.uid;
         
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


          var date1 = new Date(issue.openDate.toString());
          var date2 = new Date(dateResolved.toString());

          // To calculate the time difference of two dates
          var Difference_In_Time = date2.getTime() - date1.getTime();

          // To calculate the no. of days between two dates
          var Difference_In_Days1 = Difference_In_Time / (1000 * 3600 * 24);
          let numberDays = Difference_In_Days1.toString();
          let issueName = issue.name;
      
          
          let issueContact = issue.contact;
          let issueEmail = issue.email;
          let issueLocation = issue.location;
      
          let issueDate = issue.date;
          let issueDescription = issue.issueDescription;
          let issuePriority = issue.priority;
          let issueSource = issue.source;
          let issueAssign = issue.assign;
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
            issues[devIndex].numberDays = numberDays;
            issues[devIndex].issueDescription = issueDescription;
            issues[devIndex].priority = issuePriority;
            issues[devIndex].source = issueSource;
            issues[devIndex].subject = issueSubject;
      
            issues[devIndex].state1 = IssueState;
            issues[devIndex].assign = issueAssign;
            return this.setState({ issues });
      
      
      
          };
          changeNumberDays(issue)

    })
    // $("#button").hide();
    // $('#button').slideUp().delay(5000).fadeOut(5000000);
  }
  
  // getUserData1 = () => {
  //   let ref = fireDb.database().ref("issues");
  //   // ref.on("value", snapshot => {
  //   //   const state = snapshot.val();
  //   //   this.setState(state);
  //   //   console.log(snapshot.val());
  //   //   console.log(snapshot.ref.toString());
  //   // });
  //   var k = 0
  //   ref.orderByChild("subject").equalTo("Gender based violence").on("child_added", (snap) => {
  //     console.log(snap.val());
  //     // console.log(snap.key);
  //     window.localStorage.setItem('subjectCo', "98");
  //     k = k+1;
  // });
  //  console.log(k);
  //  return k;
  // };

  /* Getting the data from the database and setting the state of the component. */
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

 /* Filtering the data from the state and setting the new state. */
  removeData = issue => {
    const { issues } = this.state;
    const newState = issues.filter(data => {
      return data.uid !== issue.uid;
    });
    this.setState({ issues: newState });
  };
 
 /* Setting the state of the component. */
  handleInputChange = (e)=>{
    this.setState({
      ...this.state,

    })

  }
  handleChange=(event) => {
    console.log(event.target.value);
  }
 
 /* Updating the data in the form. */
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

    $('#button').slideUp().delay(5000).fadeOut(5000000);
    $(this).next().slideUp();
  };
 /* Hiding the form and showing the table. */
  closeIssue =() =>{
    $('#customers').slideDown();
    $('#form1').hide().delay(100).fadeOut(5000);
  }
 /* Setting the local storage item 'data' to the value of the uid of the issue. */
  forAdmin = issue =>{
    window.localStorage.setItem('data', issue.uid);
  }

 /* Changing the state of the issue from resolved to open. */
  changeIssueState = issue =>{
    window.localStorage.setItem('data', issue.uid);
    const user = window.localStorage.getItem('name');
    if (issue.state1 !== 'resolved' && user !== "Admin" ){
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

/* A function that is being called on the click of a button. */
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
    // if (window.localStorage.getItem('name') == 'Admin'){
    //   return (
    //     <Link to="/add">   <div className="addbutton" ><AiOutlineFileAdd/></div></Link> 
    //   )
    // }
  }
  render() {
    
    const { issues } = this.state;

    return (
     
      <React.Fragment>
       
       <Header/>
        <div className="container">
          <div className="row">
            
          </div>
          <div className="row" style={{ paddingTop:"10px" }}>          
                </div>  
                <Button id="button" onClick={(e) => this.changePriority(e)} style={{background:"#563e7c", paddingTop:"10px" }}>Refresh Priority</Button>
                < AddOption />
                </div>             
          <div className="row"> 
            <div className="col-xl-12">
              {/* {issues.map(issue => {
                if (issue.assign == "Admin" ){
                return( <div>
               

                </div>
                )}})}         */}
            <table id="customers"> 
   <tr>
   {/* <th >#</th> */}
    <th >NAME</th>
     <th>SUBJECT</th>
     <th>LOCATION</th>
    <th>DATE</th>
    <th>STATUS</th>
    <th>ASSIGN</th>
    <th>PRIORITY</th>
    <th>ACTIONS</th>
   </tr>
   <tbody>
   {issues.map(issue => {
     
     const user = window.localStorage.getItem('name');
     const number = 0;
     if (issue.priority == ""){
     if (issue.assign == user ){
     return(
      //  <div>
       <tr>
         {/* <td>60</td> */}
         <td>{issue.name }</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>

         <td>{issue.date}</td>
         <td>{issue.state1}</td>
         <td>{issue.assign}</td>
         <td>{issue.priority}</td>
         <td> 
            <ul class="list-inline m-0">
              <li class="list-inline-item">  
              <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.changeIssueState(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>

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
   else if (user=='Admin') 
      if (issue.source == "Mobile app") return (
        <tr href="/issue-details" >
    <td>{issue.name }</td>

    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>
         </li>
         </ul>        
       </td>
   
  
  </tr>

      )
      else  return(
     
    <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"
         onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}>
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
   
  
  </tr>)}
   }) 
   
  
  }
               

               {issues.map(issue => {
     
     const user = window.localStorage.getItem('name');
     const number = 0;
     if (issue.priority == "High"){
     if (issue.assign == user ){
     return(
      //  <div>
       <tr>
         {/* <td>60</td> */}
         <td>{issue.name }</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>

         <td>{issue.date}</td>
         <td>{issue.state1}</td>
         <td>{issue.assign}</td>
         <td>{issue.priority}</td>
         <td> 
            <ul class="list-inline m-0">
              <li class="list-inline-item">  
              <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.changeIssueState(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>

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
   else if (user=='Admin') 
      if (issue.source == "Mobile app") return (
        <tr href="/issue-details" >
    <td>{issue.name }</td>

    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>
         </li>
         </ul>        
       </td>
   
  
  </tr>

      )
      else  return(
     
    <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"
         onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}>
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
   
  
  </tr>)}
   }) 
   
  
  }   

   {issues.map(issue => {
     
     const user = window.localStorage.getItem('name');
     const number = 0;
     if (issue.priority == "Medium"){
     if (issue.assign == user ){
     return(
      //  <div>
       <tr>
         {/* <td>60</td> */}
         <td>{issue.name }</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>

         <td>{issue.date}</td>
         <td>{issue.state1}</td>
         <td>{issue.assign}</td>
         <td>{issue.priority}</td>
         <td> 
            <ul class="list-inline m-0">
              <li class="list-inline-item">  
              <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.changeIssueState(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>

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
   else if (user=='Admin') 
      if (issue.source == "Mobile app") return (
        <tr href="/issue-details" >
    <td>{issue.name }</td>

    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table" onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>
         </li>
         </ul>        
       </td>
   
  
  </tr>

      )
      else  return(
     
    <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"
          onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}>
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
   
  
  </tr>)}
   }) 
   
  
  }   


  {issues.map(issue => {
     
     const user = window.localStorage.getItem('name');
     const number = 0;
     if (issue.priority == "Low"){
     if (issue.assign == user ){
     return(
      //  <div>
       <tr>
         {/* <td>60</td> */}
         <td>{issue.name }</td>
         <td>{issue.subject}</td>
         <td>{issue.location}</td>

         <td>{issue.date}</td>
         <td>{issue.state1}</td>
         <td>{issue.assign}</td>
         <td>{issue.priority}</td>
         <td> 
            <ul class="list-inline m-0">
              <li class="list-inline-item">  
              <a href="/issue-details" class="fa fa-table" onClick={(e) => {this.changeIssueState(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>

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
   else if (user=='Admin') 
      if (issue.source == "Mobile app") return (
        <tr href="/issue-details" >
    <td>{issue.name }</td>

    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"  onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}><GrView></GrView> </a>
         </li>
         </ul>        
       </td>
   
  
  </tr>

      )
      else  return(
     
    <tr href="/issue-details" >
    <td>{issue.name }</td>
    <td>{issue.subject}</td>
    <td>{issue.location}</td>

    <td>{issue.date}</td>
    <td>{issue.state1}</td>
    <td>{issue.assign}</td>
    <td>{issue.priority}</td>
    <td> 
       <ul class="list-inline m-0">
         <li class="list-inline-item">  
         <a href="/issue-details" class="fa fa-table"
         onClick={(e) => {this.forAdmin(issue);  this.changeNumberDays11(e); }}
         >
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
   
  
  </tr>)}
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
               <Form.Select defaultValue="Medium" ref = "priority" >
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
