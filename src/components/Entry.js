import React,  {useState} from "react";
import {Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "./Entry.style.css"
import { LoginForm } from "./Login";
import { ResetPassword } from "./resetPassword";


/**
 * A function that sets the state of the form to either login or register.
 */
export const Entry = () =>{
    const [frmLoad, setFrmLoad] = useState("login");
    const formSwitcher = frmType =>{
        setFrmLoad(frmType);
    }
    return(

        <div className ="entry-page bg-info ">

         <div className="bg-light p-5 rounded-lg m-3 form-box" >
              {frmLoad === "login" && <LoginForm formSwitcher = {formSwitcher}/> }  {frmLoad === "reset" &&  <ResetPassword formSwitcher = {formSwitcher} />}  </div>

        </div>

    )
}