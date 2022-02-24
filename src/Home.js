import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import React, {useEffect,useState} from "react";



function Home(){
    
    const navigate=useNavigate();
    useEffect(() => {
    if (localStorage.getItem ("username")=="")
                {
                    navigate("/login");
                }
    
            });
    return(


        <div>
            
            <Menu/>
            <center>
                <br/><br/>
                Welcome,{localStorage.getItem("username")}
                <br/>
            <h1>This is the Home Page!</h1>
            </center>
            
        </div>

    );
}
export default Home;