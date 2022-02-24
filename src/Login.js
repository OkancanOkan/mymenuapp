import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";




function Login(){
     
    const [TxtLoginNamePassed,setTxtLoginName]=useState(); // değişken degerlerini okumaya yarar
    const [txtPassword,setTxtPassword]=useState();          // eski sistemlerdeki request gibidir
    const [txtResult,setResult]=useState();                 // sonucu set etmek için
    
    const navigate = useNavigate();
    
    const gonder = async() =>


    {
      let requestBody = {
        service_val_name:TxtLoginNamePassed,
        service_val_password:txtPassword
      }
        const response = await axios.post ('https://www.mockachino.com/1b9b9eca-13b9-41/login',requestBody);
        
        if (response.data.result=="success")
      
        {
            //setResult("Giriş Başarılı");
            setResult(1);

            console.log("Ok");// chrome da console da taraycıda sonuc görürüz.

            localStorage.setItem("username","onurkulabas");//home page de welcome onurkulabas yazdırmak için

            navigate("/about");
            
        }
        else
        {
            //setResult("Hatalı kullanıcı adı veya Şifre!!");
            setResult(0);
            console.log("Not Ok");
            localStorage.setItem("username","");
        }

    }

        

    return(
        <div>
            <br/><br/>
            <center>
        <table>
        <tbody><tr>
            <td>Kullanıcı Adı</td>
            <td><input type="text" name="txtLoginName" autoComplete="off" onChange={e=>setTxtLoginName(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Şifre</td>
            <td><input type="text" name="txtPassword" autoComplete="off"  onChange={e=>setTxtPassword(e.target.value)} /></td>
          </tr>
        <br/>
          <tr>
            <td colSpan={2} align="center">
              <input type="button" name="btnSubmit" defaultValue="Giriş" onClick={()=>gonder()} />
            </td>
          </tr>
          <br/>
          <br/>
          {txtResult=="1"?"Success":"Fail"}
         
         
         
        </tbody></table>
        </center>
        </div>
    );


}
export default Login;
