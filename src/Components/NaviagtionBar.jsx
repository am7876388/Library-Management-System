import { Link } from "react-router-dom"
import Menu from "../assets/Burger-Menu.svg"
import Responsives from "../utils/Responsive"
function NavigationBar(){
return(<>
<nav><div id="Company-Name">BookNest</div> <div id="Remaining-Buttons"><button className="Nav_Buttons"><Link className="Nav_Links" to={"/"}>Home</Link></button> <button className="Nav_Buttons"><Link to={"/AddBook"} className="Nav_Links">Add Book</Link></button> <button className="Nav_Buttons"><Link to={"/Browse"} className="Nav_Links">Browse Books </Link></button></div> <button id="Responsive_Button" onClick={Responsives}><img src={Menu} alt="Menu" id="Menu-img" className="Button1"/></button></nav>
<ul id="Responsive_NAV">
<li><button className="Nav_Buttons"><Link className="Nav_Links" to={"/"}>Home</Link></button></li>
<li><button className="Nav_Buttons"><Link to={"/AddBook"} className="Nav_Links">Add Book</Link></button></li>
<li><button className="Nav_Buttons"><Link to={"/Browse"} className="Nav_Links">Browse Books </Link></button></li></ul></>)
}
export default NavigationBar