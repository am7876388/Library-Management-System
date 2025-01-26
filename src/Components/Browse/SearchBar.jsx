import { useDispatch, useSelector } from "react-redux";
import "./Browse.css"
import { Update } from "../../utils/Store";
function SearchBar(){
    const Search = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const Change = (e) =>{
        const Data = e.target.value;
        dispatch(Update(Data));
    }
    return(<div id="Search_Container">
    <input type="text" id="Search_Value" placeholder="Search by Book or Author Name" onChange={Change}/></div>)
}
export default SearchBar;