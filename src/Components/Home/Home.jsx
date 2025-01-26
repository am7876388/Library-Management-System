import Categories from "../UI/Categories";//Importing Components
import Footer from "../Footer/Footer";//Importing Components
import ListofBooks from "../UI/ListofBooks";//Importing Components
import NavigationBar from "../Header/NaviagtionBar";//Importing Components
function Home(){
    return(<>
    <NavigationBar/>
   <Categories/> 
   <ListofBooks text = {"Popular Books"} viewmore = {"View More"}/>
   <Footer/>
    </>)
}
export default Home;//Default exporting Home