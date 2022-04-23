import React,  {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import Logo from './layout/Logo.png';
import { Card } from "reactstrap";
import "./Entry.css"
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {BsPersonCircle, BsColumns } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
// import { Redirect } from 'react-router-dom';
import fireDb from "firebase";
import {
  MdPhone,
  MdPermIdentity,
  MdLocationOn,
  MdEmail,
  MdExpandMore,
  MdEvent
} from "react-icons/md";



export const LoginForm = ({ formSwitcher }) =>{

    const dbRef = fireDb.database().ref("/").child("users");
    dbRef.on("value", snap => {
        console.log(snap); // this key will output users
        console.log(snap.key); // this method will return full user
    });
    const [usrnm, setUsrnm] = useState("justine");
    const [password, setPassword] = useState("pass");
    const [usrnm1, setUsrnm1] = useState("kenold");
    const [password1, setPassword1] = useState("pass");
    const [usrnm2, setUsrnm2] = useState("mike");
    const [password2, setPassword2] = useState("pass");

    const handleUser = e =>{
        window.localStorage.setItem('name', 'Obaseki Nosa');
    }
    

    const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "usrnm":
				setUsrnm(value);
                setUsrnm1(value);
                setUsrnm2(value);
				break;

			case "password":
				setPassword(value);
                setPassword1(value);
                setPassword2(value);
				break;

			default:
				break;
		}
	};

    const navigate = useNavigate();
    const handleOnSubmit = async e => {
		e.preventDefault();

		if (!usrnm || !password) {
			return alert("Fill up all the form!");
        
		}

        else if (usrnm=="justine" & password=="12345678"){
            navigate('/home-page');
            // return alert("successful loged")
            window.localStorage.setItem('name', 'J.Msosa');
		}
        else if (usrnm1=="kenold" & password1=="123456789"){
            navigate('/home-page');
            window.localStorage.setItem('name', 'K.Khalika');
            // return alert("successful loged")
		}
        else if (usrnm2=="mike" & password2=="12345"){
            window.localStorage.setItem('name', 'Admin');
            navigate('/home-page');
            // return alert("successful loged")
		}

        else {
            return alert("incorrect password")
        }
	};

    useEffect(()=>{
        console.log("use effect watheka");
        window.localStorage.setItem("hidebutton", "no");
      },[])
    
    return (
    
        <Container>
            <Row>
                <Col>
                 {/* <h5 style={{float:'left', }} className="logo"> <img src={Logo} alt="Logo" width="50px" /> </h5>  */}
                    <h1  className="text-inf ">SSRT SYSTEM</h1>
                    < hr className="line"/>
                   
                <Form className="text-left" autoComplete="off" onSubmit={handleOnSubmit}>
            
                  {/* <div className="input-container">
                     <i className="fa fa-user icon"><MdPermIdentity /></i>
                     <input className="input-field" type="text" placeholder="Username" name="usrnm" onChange={handleOnChange} required/>
                  </div>

                   <div className="input-container">
                     <i className="fa fa-user icon"><MdEvent /></i>
                     <input className="input-field" type="password" name="password" onChange={handleOnChange} placeholder="Password" required/>
                  </div> */}
                    <Form.Group  className="mb-3 " controlId="formBasicEmail">
                    
                        {/* <Form.Label><MdPermIdentity /></Form.Label>
                         <i className="fa fa-user icon"></i> */}
                        <Form.Control type="text" name="email" onChange={handleOnChange} placeholder="Enter user name" required />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                        
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                            
                        <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" required />
                    </Form.Group>
                
                    <Button style={{background:"#563e7c", maxWidth:"10000px", marginRight:"300px"}} type="submit">
                        Sign in
                    </Button>
                    {/* <Button style={{background:"#563e7c", maxWidth:"10000px", marginRight:"-px"}} onClick = {()=> formSwitcher("reset")}>
                        Reset Password
                    </Button> */}
                </Form>

                
            </Col>
          </Row>
          <hr className="line"/>
          <Row>
              <Col>
                <a href="#" onClick = {()=> formSwitcher("reset")}> Forgot Password?</a>
              </Col>
          </Row>
        </Container>
    )

}