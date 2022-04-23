import React, {useState, useEffect} from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from 'react-router-dom'
import './AddEdit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify"
import Header from "../components/Header";
import 'react-toastify/dist/ReactToastify.css';
  


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
      <><Header/>
        <div style={{marginTop: "50px"}}>
        <form style={{margin: "auto",
         padding:"15px", 
        maxWidth:"700px",
        alignContent:"center",
        }}
        onSubmit={handleSubmit}
        >
       <label htmlFor="name">Name</label>
       <input
       type="text"
       id="name"
       name="name"
       placeHolder="Your name"
       value={name}
       onChange={(e) => setName(e.target.value)}
      //  onChange={handleInputChange}
       
       />



<label htmlFor="email">email</label>
       <input
       type="email"
       id="email"
       name="email"
       placeHolder="Your Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      //  onChange={handleInputChange}
       
       />
       <label htmlFor="contact">contact</label>
       <input
       type="number"
       id="contact"
       name="contact"
       placeHolder="Your contact"
       value={contact}
       onChange={(e) => setContact(e.target.value)}
      //  onChange={handleInputChange}
       
       />
       <input
       type="submit"
       value="Save"
       onClick={handleSubmit}
       
       />
        </form>
        {/* <button className="send" onClick={handleSubmit}>Save</button> */}
       
        </div></>
    );
};
export default AddEdit;