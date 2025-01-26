import { useNavigate } from "react-router-dom";//Importing Hooks
import NavigationBar from "../Header/NaviagtionBar";//Importing Components
import "./NotFound.css"//Importing Styles
function NotFound(){//Not found Page function
    const navigate = useNavigate();
    return(<>
    <NavigationBar/>
    <div id = "NotFound_Container">
    <div id="NotFound"><h1>404 Not Found</h1></div>
    <button id="NotFound_Button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </>)
}
export default NotFound;//Exporting default function