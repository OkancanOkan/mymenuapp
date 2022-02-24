import React, {useEffect,useState} from 'react';
import axios from "axios";

function MyServiceCall2D(){
   // const [MyArray,setMyArray]=useState([]);
    const [myArrayData,setMyArrayData]=useState([]);


    useEffect(
        async() => 
        {
            const response =await axios.get('http://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=TRY&days=30&interval=daily');
            console.log(response);
            setMyArrayData(response.data.prices);
        },
        []
);
    return(

        <div>
           <center>
               {
                    myArrayData.map((myArrayItem,index)=>
                    (
                        <div key ={index}>{myArrayItem[0]}-{myArrayItem[1]}<br/></div>
                    )
                    )
               }
                  
                    
                  
           </center>

        </div>
    );
}
export default MyServiceCall2D;
