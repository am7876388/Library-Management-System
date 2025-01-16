import { useNavigate } from "react-router-dom";
import NavigationBar from "./NaviagtionBar";
function NotFound(){
    const navigate = useNavigate();
    return(<>
    <NavigationBar/>
    <div id = "NotFound_Container">
    <div id="NotFound"><h1>404 Not Found</h1></div>
    <button id="NotFound_Button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </>)
}
export default NotFound;