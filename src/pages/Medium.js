import React from "react";
import './Home.css';
import fireDb from "firebase";
import ToggleButton from 'react-toggle-button'
import { AiOutlineEdit,AiOutlineFileAdd } from "react-icons/ai";
import {GrView} from "react-icons/gr";
import {MdOutlineDelete} from "react-icons/md";
import Header from "../components/Header";
import AddOption from "./AddOption";

class Medium extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        issues: [],
  
      };
    }
    componentDidMount() {
        this.getUserData();
      }

    getUserData = () => {
        let ref = fireDb.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      };

    render(){
        const { issues } = this.state; 

         return (<React.Fragment>
             
      {issues.map(issue => {
          const user = window.localStorage.getItem('name');
          
          return(
              <>{issue.state1}</> 
          )
      })}
           </React.Fragment>)
    }
}
export default Medium;