import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";




function PostIncomeType(){
     
    const [txtNameIncome,setIncomeType]=useState(); // değişken degerlerini okumaya yarar
    const [txtResult,setResult]=useState();                 // sonucu set etmek için
    
    const navigate = useNavigate();
    
    const gonder = async() =>


    {
      let requestBody = {
        txtName : txtNameIncome
      }
        const response = await axios.post('https://private-e4e6e-okancanokan.apiary-mock.com/postIncomeType',requestBody);
        
        if (response.data.Result=="İşlem Başarıyla Tamamlandı.")
      
        {
            //setResult("Giriş Başarılı");
            setResult(1);

            console.log("Ok");// chrome da console da taraycıda sonuc görürüz.
                navigate("/PostIncomeType");
            
        }
        else
        {
            //setResult("Hatalı kullanıcı adı veya Şifre!!");
            setResult(0);
            console.log("Not Ok");
            localStorage.setItem("IncomeType","");
        }

    }

        

    return(
        <div>
            <br/><br/>
            <center>
        <table>
        <tbody><tr>
            <td>Income Type</td>
            <td><input type="text" name="txtName" autoComplete="off" onChange={e=>setIncomeType(e.target.value)} /></td>
          </tr>
         
        <br/>
          <tr>
            <td colSpan={2} align="center">
              <input type="button" name="btnSubmit" defaultValue="Giriş" onClick={()=>gonder()} />
            </td>
          </tr>
          <br/>
          <br/>
          {txtResult=="1"?"İşlem Başarıyla Tamamlandı.":"OLLLMAAAADIIIII!!!!"}
         
         
         
        </tbody></table>
        </center>
        </div>
    );


}
export default PostIncomeType;
