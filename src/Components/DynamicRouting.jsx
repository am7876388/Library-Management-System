import NavigationBar from "./NaviagtionBar";
import ListofBooks from "./ListofBooks";
import Details from "./Details";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
function DynamicRouting(){
    const {id} = useParams();
    return(<>
    <NavigationBar/>
    <Details id = {id}/>
    <ListofBooks text = {"See Other Books"}/>
    <Footer/>
    </>)
}
export default DynamicRouting;