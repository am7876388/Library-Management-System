import { Link } from "react-router-dom";//Importing function
import "./Footer.css"//Importing Styles
function Footer(){
    return(<>
    <footer id="Footer">
        <div id="Logo">BookNest</div>
        <div id="Footer-Buttons"><button className="Nav_Buttons"><Link className="Nav_Links" to={"/"}>Home</Link></button> <button className="Nav_Buttons"><Link to={"/AddBook"} className="Nav_Links">Add Book</Link></button> <button className="Nav_Buttons"><Link to={"/Browse"} className="Nav_Links">Browse Books </Link></button></div>
    </footer>
    </>)
}
export default Footer;//exporting function