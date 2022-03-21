import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit,AiOutlineFileAdd } from "react-icons/ai";
class AddOption extends React.Component{
    render (){

     if (window.localStorage.getItem('name') == 'repoter'){
      return (
            <Link to="/add">   <div className="addbutton" ><AiOutlineFileAdd/></div></Link> 
        )
      }
      else 
        return (
            <>
            </>
        )
    

    }

};
export default AddOption;