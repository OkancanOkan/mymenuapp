import React, {useEffect,useState} from 'react';
import axios from "axios";

function MyServiceCall(){
   // const [MyArray,setMyArray]=useState([]);
    const [myFirstName,setFirstName]=useState('');


    useEffect(
        async() => 
        {
            const response =await axios.get('http://www.mockachino.com/c30e50d6-aca1-47/users');
            console.log(response);
            setFirstName(response.data.users[0].first_name);
        },
        []

        

);
    return(

        <div>
           <center>
               {myFirstName}
           </center>

        </div>
    );
}
export default MyServiceCall;
