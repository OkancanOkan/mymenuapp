import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostProject() {
  const [txtNameProject, setProject] = useState();
  const [cmbCityProject, setcmbCityProject] = useState(); // değişken degerlerini okumaya yarar
  const [cmbStatusProject, setcmbStatusProject] = useState();
  const [txtResult, setResult] = useState(); // sonucu set etmek için

  const navigate = useNavigate();

  const gonder = async () => {
    let requestBody = {
      txtName: txtNameProject,
      cmbCity: cmbCityProject,
      cmbStatus: cmbStatusProject,
    };
    const response = await axios.post(
      "https://private-e4e6e-okancanokan.apiary-mock.com/postProject",
      requestBody
    );

    if (response.data.Result == "İşlem Başarıyla Tamamlandı.") {
      //setResult("Giriş Başarılı");
      setResult(1);

      console.log("Ok"); // chrome da console da taraycıda sonuc görürüz.
      navigate("/PostProject");
    } else {
      //setResult("Hatalı kullanıcı adı veya Şifre!!");
      setResult(0);
      console.log("Not Ok");
      localStorage.setItem("Projects", "");
    }
  };

  return (
    <div>
      <br />
      <br />
      <center>
        <table>
          <tbody>
            <tr>
              <td>Yeni Project</td>
              <td>
                <input
                  type="text"
                  name="txtName"
                  autoComplete="off"
                  onChange={(e) => setProject(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <select onChange={(e) => setcmbCityProject(e.target.value)}>
                  <option value={0} selected hidden>
                    {" "}
                    Lütfen Seçiniz
                  </option>
                  <option value={1} selected="selected">
                    {" "}
                    İstanbul{" "}
                  </option>
                  <option value={2} selected="selected">
                    {" "}
                    Ankara{" "}
                  </option>
                  <option value={3} selected="selected">
                    {" "}
                    Adıyaman{" "}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <select onChange={(e) => setcmbStatusProject(e.target.value)}>
                  <option value={0} selected hidden>
                    {" "}
                    Lütfen Seçiniz
                  </option>
                  <option value={1} selected="selected">
                    {" "}
                    Tamamlandı{" "}
                  </option>
                  <option value={2} selected="selected">
                    {" "}
                    Tamamlanmadı{" "}
                  </option>
                </select>
              </td>
            </tr>
            <br />
            <tr>
              <td colSpan={2} align="center">
                <input
                  type="button"
                  name="btnSubmit"
                  defaultValue="Giriş"
                  onClick={() => gonder()}
                />
              </td>
            </tr>
            <br />
            <br />
            {txtResult == "1"
              ? "İşlem Başarıyla Tamamlandı."
              : "OLLLMAAAADIIIII!!!!"}
          </tbody>
        </table>
      </center>
    </div>
  );
}
export default PostProject;
