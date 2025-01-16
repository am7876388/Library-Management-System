import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ListofBooks(props){
    const Datas = useSelector((state) => state.data);
    const Mode = useSelector((state) => state.mode);
    const Search = useSelector((state) => state.search);
    const Navigate = useNavigate();
    function ViewDetails(e){
        const num1 = e.target.parentElement.parentElement.id;
        Navigate(`/Details/${num1}`);
    }
    if(Mode === 0){
    return(
    <div id="ListofBooks">
    <div id="PopularBooks"><div>{props.text}</div> <Link id="View_More" to={"/Browse"}>{props.viewmore}</Link></div>{
    Datas.map((data,index) =>{
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
    })}</div>)
}
else{
    return(
        <div id="ListofBooks">
        <div id="PopularBooks"><div>{props.text}</div> <Link id="View_More">{props.viewmore}</Link></div>{
        Datas.map((data,index) =>{
        if(data.Name.includes(Search) || data.Author.includes(Search)){
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
        })}</div>)
}
}
export default ListofBooks;