import React,  {useState} from "react";
import {Button} from "react-bootstrap";

import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";


export const ResetPassword= ({formSwitcher}) =>{

    const [email, setEmail] = useState("");

    const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			default:
				break;
		}
	};

    const handleOnSubmit = async e => {
		e.preventDefault();

            return alert("pin reset has just sent to "+email)
        
	};
    
    return (
        <Container>
            <Row>
                <Col>
                <h1  className="text-inf ">Reset password</h1>
                    <hr />
                <Form className="text-left" autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group  className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name="email"  onChange={handleOnChange} placeholder="Enter email" required />

                    </Form.Group>
                
                    <Button style={{background:"#563e7c", maxWidth:"10000px", marginRight:"300px"}} type="submit">

                        Submit
                    </Button>
                </Form>
            </Col>
          </Row>
          <hr />
          <Row>
              <Col>
                <a href="#" style={{color:"black"}} onClick={()=> formSwitcher("login")}>  Login now?</a>
              </Col>
          </Row>
        </Container>
    )

}