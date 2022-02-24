import {Routes,Route} from 'react-router-dom';
import Home from "./Home"; 
import About from "./About"; 
import Contact from "./Contact"; 
import Liste from "./Liste"; 
import Login from "./Login"; 
import MyArray from "./MyArray";
import MyServiceCall from "./MyServiceCall";
import MyServiceCall2D from "./MyServiceCall2D";
import PostGender from "./PostGender";
import PostIncomeType from "./PostIncomeType";
import PostProject from "./PostProject";







function App() {
  return (
    <div className="App">
      <center>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/liste" element={<Liste/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/MyArray" element={<MyArray/>}/>
        <Route path="/MyServiceCall" element={<MyServiceCall/>}/>
        <Route path="/MyServiceCall2D" element={<MyServiceCall2D/>}/>
        <Route path="/PostGender" element={<PostGender/>}/>
        <Route path="/PostIncomeType" element={<PostIncomeType/>}/>
        <Route path="/PostProject" element={<PostProject/>}/>

        





      </Routes>
      </center>
      
    </div>
  );
}

export default App;
