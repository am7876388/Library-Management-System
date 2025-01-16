import { useSelector } from "react-redux";
import NavigationBar from "./NaviagtionBar";
import { useNavigate, useParams } from "react-router-dom";
function BooksCategory(){
    const Datas = useSelector((state) => state.data);
    const Navigate = useNavigate();
    const {Category} = useParams()
    function ViewDetails(e){
        const num1 = e.target.parentElement.parentElement.id;
        Navigate(`/Details/${num1}`);
    }
    return(<>
     <NavigationBar/>
        <div id="ListofBooks">
        {Category === "New" ? (
          <div id="PopularBooks"><div>{Category} Books</div></div>  
        ):(<div id="PopularBooks"><div>Books on {Category}</div></div>)}{
        Datas.map((data,index) =>{
        if(data.Category === Category){
        return(
            <div className="Books" id={index} key={index + 1}>
            <img src={data.image} alt="" className="Books_img" />
            <div className="Books_name">{data.Name}</div>
            <div className="Books_Author"><div className="Author">Author</div><div className="Author_Name">{data.Author}</div></div>
            <p className="Books_Description">{data.Description}</p>
            <div className="Books_Rating">Ratings {data.Rating}</div>
            <div className="Button_Container"><button className="Books_View_Details" onClick={ViewDetails}>View Details</button></div>
            </div>
        );
    }
    else{
        return null;
    }
        })}</div>

    </>)
}
export default BooksCategory;