import React from 'react'
import fireDb from "firebase";

import About from '../pages/About';
import { Container, Button, Modal, Row, Col, FormGroup, Form, FormLabel, FormControl, Card } from "react-bootstrap";

class Visualization extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            issues: [],
        }
    }
    handleSubmit = event => {
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
 // const navigate = useNavigate();
 componentDidMount() {
    this.getUserData();
    this.getUserData1();
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
  getUserData1 = () => {
    let ref = fireDb.database().ref("issues");
    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    //   console.log(snapshot.val());
    //   console.log(snapshot.ref.toString());
    // });
    ref.orderByChild("subject").startAt("Child abuse").on("child_added", (snap) => {
      console.log(snap.val());
      console.log(snap.key);
      window.localStorage.setItem('subjectC', snap.key);
  });
  };



    render(){

        return (
            <></>
         
        );
    }
 
};
export default Visualization;