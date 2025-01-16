import { useDispatch, useSelector } from "react-redux";
function SearchBar(){
    const Search = useSelector((state) => state.search);
    const Mode = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    console.log(Mode);
    console.log(Search);
    const Change = (e) =>{
        const Data = e.target.value;
        dispatch({type:"Update",payload:Data});
        console.log(Search);
    }
    return(<div id="Search_Container">
    <input type="text" id="Search_Value" placeholder="Search by Book or Author Name" onChange={Change}/></div>)
}
export default SearchBar;