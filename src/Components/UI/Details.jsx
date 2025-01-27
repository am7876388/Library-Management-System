import { Link } from "react-router-dom";//Importing Functions
import Back from "../../assets/Back.svg";//Importing Components
import { useSelector } from "react-redux";//Importing Hooks
import { useEffect } from "react";//Importing Hooks
function Details(props){//Using Hooks
    const id = props.id;
    const Data = useSelector((state) => state.data);
    (useEffect(() =>{
        window.scrollTo(0,0)
    },[location]))
    return(<>
        <Link id="Back" to={"/Browse"}><img src= {Back} alt="" /></Link>
        <div id="Book_Details">
            <img src={Data[id].image} alt="" id="Book_Image"/>
            <div id="Book_OtherPart"><h1>Title: {Data[id].Name}</h1>
            <p>Description : {Data[id].Description}</p>
            <div id="Author_Name"><div>Author</div>: {Data[id].Author}</div>
            <div id="Book_Ratings">Ratings: {Data[id].Rating}</div></div>
        </div></>)
}
export default Details;