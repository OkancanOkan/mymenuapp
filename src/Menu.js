import { Link } from "react-router-dom";


function Menu(){
    return(
        <div>
            <center>
            <Link to ="/"> <strong>Home</strong> </Link> &nbsp;   
            <Link to ="/about"> <strong>About</strong> </Link> &nbsp;   
            <Link to ="/contact"> <strong>Contact</strong> </Link> &nbsp;
            <Link to ="/MyArray"> <strong>MY ARRAY</strong></Link>
            <Link to ="/PostIncomeType"> <strong>Income Type</strong></Link>

            </center>
            {/* //link to =a href gibi olur react-router-dom bizim navigasyonumuz  */}
        </div>
    

    
    
    
    
    );
}
export default Menu;