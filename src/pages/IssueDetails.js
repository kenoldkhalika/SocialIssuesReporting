import React from "react";
import './Home.css';
import fireDb from "firebase";
import Home from './Home';
import Form from './Form';
import {toast} from "react-toastify";




// import { Form } from "./Form";
//import config from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    //fireDb.initializeApp(config)
    this.state = {
      issues: [],
    
      
    };
   
  }
  

  componentDidMount() {
    this.getData();
    this.nice();
  } 

 
  getUserData = () => {
    let ref = fireDb.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };
  

getData = () =>{
  toast.configure();
  let ref = fireDb.database().ref("/");
  ref.child("issues").orderByChild("name").equalTo("hyydgy7").on("child_added", snapshot => {
    const state = snapshot.val();
    const name1 = "Justine";
     this.setState(state);
    toast(name1,
    {position:toast.POSITION.TOP_CENTER, autoClose:1500})
  });   
}; 

nice = () =>{
  let Justine = {name: "Jusine", Surname: "Msosa"};
  // this.setState(Justine)
  toast("Justine",
    {position:toast.POSITION.TOP_CENTER, autoClose:1500})

}
 

  updateData = issue => {
    this.refs.uid.value = issue.uid;
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

    const { issues} = this.state;
    return (
      <React.Fragment>
        {/* <Form /> */}
       {/* <div onClick={this.props.onChange(variable)}></div>  */}
        {/* <Home onChange={this.sendVariable.bind(this)}/> */}
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
   
   </tr>
   <tbody>
       <tr>
         <td>{this.state.name}</td> 
         <td>{this.state.contact}</td>
        <td>{this.state.subject}</td>
         <td>{this.state.location}</td>
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
                    
                    
                    
                    </td>
        
       
       </tr>
               
            </tbody>
 </table>
          

            </div>
           
          </div>
      </React.Fragment>
     
     
    );
  }
}

export default App;
