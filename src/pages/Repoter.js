import React from 'react'
import fireDb from "firebase";
import About from './About';
import { Container, Button, Modal, Row, Col, FormGroup, Form, FormLabel, FormControl, Card } from "react-bootstrap";

class Repoter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            issues: [],
        }
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
    render(){
        const { issues} = this.state;
        {issues.map(issue => {
            
        })}
        return (
            <div> 
          <h2>About</h2>
            </div>
        );
    }
 
};
export default Repoter;