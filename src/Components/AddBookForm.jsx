import { useNavigate } from "react-router-dom";
import NavigationBar from "./NaviagtionBar";
import { useDispatch, useSelector } from "react-redux";
function AddBookForm(){
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.data);
    const navigate = useNavigate();
    console.log(Data);
    function AddingBook(){
        const Title = document.getElementById("Book_Title").value;
        const Author = document.getElementById("Book_Author").value;
        const Rating = document.getElementById("Book_Rating").value;
        const Description = document.getElementById("Book_Description").value;
        const I = document.getElementById("image").files[0];
        const Image = URL.createObjectURL(I);
        const Object = {
        Name:Title,
        Author:Author,
        Description:Description,
        Rating:Rating,
        Category:"New",
        image:Image
        }
        if(Title && Author && Rating && Description && Image){
        if(Rating >= 0 && Rating <= 5){
            dispatch({type:"ADD",payload:Object});
        console.log(Data);
        navigate("/Browse");
    }
    else{
        alert("The Rating should be between 0 and 5");
    }
    }
    else{
        alert("One of the Fields is missing");
    }
    }
    return(<>
    <NavigationBar/>
    <div id="AddBookForm_Container">
    <div id="AddBookForm">
        <div id="Title">Add New Book</div>
        <div className="FormFields_Container">
            <div className="FormFields_Label">Title</div>
            <input type="text" id="Book_Title" placeholder="Title of the Book"/>
        </div>
        <div className="FormFields_Container">
            <div className="FormFields_Label">Author</div>
            <input type="text" id="Book_Author" placeholder="Name of the Author"/>
        </div>
        <div className="FormFields_Container">
            <div className="FormFields_Label">Description</div>
            <input type="text" id="Book_Description" placeholder="Description"/>
        </div>
        <div className="FormFields_Container">
            <div className="FormFields_Label">Ratings</div>
            <input type="number" id="Book_Rating" placeholder="Rating"/>
        </div>
        <div id="Image_Info"> Upload a Image <input type="file" name="" id="image" /></div>
        <button id="AddBookForm_Submit" onClick={AddingBook}>Submit</button>
    </div>
    </div>
    </>)
}
export default AddBookForm;