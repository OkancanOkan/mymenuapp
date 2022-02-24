import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";




function PostGender(){
     
    const [txtNameGender,setTxtYeniCinsiyet]=useState(); // değişken degerlerini okumaya yarar
    const [txtResult,setResult]=useState();                 // sonucu set etmek için
    
    const navigate = useNavigate();
    
    const gonder = async() =>


    {
      let requestBody = {
        txtName :txtNameGender
      }
        const response = await axios.post ('https://private-e4e6e-okancanokan.apiary-mock.com/postGender',requestBody);
        
        if (response.data.result=="İşlem Başarılı.")
      
        {
            //setResult("Giriş Başarılı");
            setResult(1);

            console.log("Ok");// chrome da console da taraycıda sonuc görürüz.
                navigate("/PostGender");
            
        }
        else
        {
            //setResult("Hatalı kullanıcı adı veya Şifre!!");
            setResult(0);
            console.log("Not Ok");
            localStorage.setItem("YeniCinsiyet","");
        }

    }

        

    return(
        <div>
            <br/><br/>
            <center>
        <table>
        <tbody><tr>
            <td>Yeni Cinsiyet</td>
            <td><input type="text" name="txtName" autoComplete="off" onChange={e=>setTxtYeniCinsiyet(e.target.value)} /></td>
          </tr>
         
        <br/>
          <tr>
            <td colSpan={2} align="center">
              <input type="button" name="btnSubmit" defaultValue="Giriş" onClick={()=>gonder()} />
            </td>
          </tr>
          <br/>
          <br/>
          {txtResult=="1"?"İşlem Başarılı.":"OLLLMAAAADIIIII!!!!"}
         
         
         
        </tbody></table>
        </center>
        </div>
    );


}
export default PostGender;
