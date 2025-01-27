import { useNavigate } from "react-router-dom";//Importing Hooks
import NavigationBar from "../Header/NaviagtionBar";//Importing Components
import { useDispatch, useSelector } from "react-redux";//Importing Hooks
import { Add } from "../../utils/Store";//Importing Functions from store
import "./AddBook.css"//Importing Styles
function AddBookForm(){//This function contains the Add book form
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.data);
    const navigate = useNavigate();
    function AddingBook(){
        const Title = document.getElementById("Book_Title").value;
        const Author = document.getElementById("Book_Author").value;
        const Rating = document.getElementById("Book_Rating").value;
        const Description = document.getElementById("Book_Description").value;
        const Category = document.getElementById("Book_Category").value;
        const I = document.getElementById("image").files[0];
        const Categories = ["Fiction","Science","Fantasy","Crime"]
        const num1 = Categories.findIndex(elem => elem.toLowerCase() === Category.toLowerCase());
        const num2 = (num1 !== -1)?Categories[num1]:"New"
        const Image = (I)?URL.createObjectURL(I):I;
        const Objects = {//Object is created to push it into the array
        Name:Title,
        Author:Author,
        Description:Description,
        Rating:Rating,
        Category:num2,
        image:Image
        }
        if(Title && Author && Rating && Description && Image && Category){
        if(Rating >= 0 && Rating <= 5){//Checking the conditions
        dispatch(Add(Objects));
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
        <div className="FormFields_Container">
            <div className="FormFields_Label">Category</div>
            <input type="text" id="Book_Category" placeholder="Category"/>
        </div>
        <div id="Image_Info"> Upload a Image <input type="file" name="" id="image" /></div>
        <button id="AddBookForm_Submit" onClick={AddingBook}>Submit</button>
    </div>
    </div>
    </>)
}
export default AddBookForm;