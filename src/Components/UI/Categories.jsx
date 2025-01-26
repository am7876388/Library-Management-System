import { useNavigate } from "react-router-dom";//Importing Hooks
function Categories(){
    const navigate = useNavigate();
    return(<div id="Category_of_Books">
        <div id="Category_Heading">Categories of Books</div>
        <div id="Categories">
        <button className="Categories_Buttons" onClick={() => navigate(`/Books/Fiction`)}>Fiction</button>
        <button className="Categories_Buttons" onClick={() => navigate(`/Books/Science`)}>Science</button>
        <button className="Categories_Buttons" onClick={() => navigate(`/Books/Fantasy`)}>Fantasy</button>
        <button className="Categories_Buttons" onClick={() => navigate(`/Books/Crime`)}>Crime</button>
        <button className="Categories_Buttons" onClick={() => navigate(`/Books/New`)}>New-Books</button></div>
    </div>)
}
export default Categories;