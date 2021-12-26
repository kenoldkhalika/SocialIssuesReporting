import React, {useState, useEffect} from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from 'react-router-dom'
import './AddEdit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';

  


const initialState = {
  name: "",
  email: "",
  contact:""
}

const AddEdit =()=>{

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [contact , setContact] = useState();
  const [state, setState] = useState(initialState);
  // const [data, setData]= useState({});
 // const {name, email, contact}=state;
  const history = useNavigate();
 

//   const handleInputChange =(e)=>
//   {
//     const {name, value}=e.target;
//     setState({...state, [name]: value});
// };



  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   if(!name || !email ){
  //    toast.error("Please insert value in all fieds");

  //   }else{

      
  //     fireDb.child("contacts").push(state, (err)=>{
  //      if(err){
  //        toast.error(err);
  //      }else{
  //        toast.success("Details adde successfully");
  //      }

  //     });
  //     setTimeout(()=> history.push("/"), 500);
  //   }

  // };

    // Push Function
    toast.configure()
  const handleSubmit = (e) => {
      if(!name || !email || !contact ){
        toast('put something',
        {position: toast.POSITION.TOP_CENTER});

      }else{
        e.preventDefault();
        fireDb.ref(name).set({
          name : name,
          email : email,
          contact : contact,
        }).catch(alert);
        toast('added successfully',
        {position:toast.POSITION.TOP_CENTER})
       }

  //     });
      // setTimeout(()=> history.push("/"), 500);
 
  }



    return (
        <div >
            {/* <Form /> */}
            <Form></Form>
        </div>
    );
};
export default AddEdit;