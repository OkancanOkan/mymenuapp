import React, {useEffect,useState} from "react";


function MyArray(){
    const [MyArray1,setMyArray] = useState(["a","b"]);

   
    return(


        <div>
            <span>
                {MyArray1[0]} <br/>
                {MyArray1[1]}
            </span>

        </div>

    );
}
export default MyArray;