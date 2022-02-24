import Menu from  "./Menu";
import React, {useEffect , useState} from "react";
import {useNavigate} from "react-router-dom";

function Contact(){

    const navigate =useNavigate();
    useEffect(() => 
    {
        if (localStorage.getItem ("username")=="")
        {
            navigate("/login");
        }
    
    }
    );

    
    return(
        <div>
            <Menu/>
            <center>
            <br/><br/>
                Welcome,{localStorage.getItem("username")}
                <br/>
            <h1>This is the Contact Page!</h1>
            </center>
        </div>
    );

}
 export default Contact;