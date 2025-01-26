import './App.css'
import './utils/Media.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Browser from './Components/Browse/Browse'
import AddBookForm from './Components/AddBook/AddBookForm'
import DynamicRouting from './Components/BookDetails/DynamicRouting'
import BooksCategory from './Components/UI/Category_Books'
import NotFound from '../src/Components/NotFound/404NotFound'
import Welcome from './Components/UI/Welcome'
import { Done,Reset } from './utils/Store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
function App() {
  const Welcomes = useSelector((state) => state.WelcomeM);
  const dispatch = useDispatch();
  function HandleClick(){
    dispatch(Done());
    }
    useEffect(() =>{
        dispatch(Reset());
    },[dispatch])
  if(Welcomes){
  return (
      <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/Browse' element = {<Browser/>}/>
       <Route path='/AddBook' element = {<AddBookForm/>}/>
       <Route path='/Details/:id' element = {<DynamicRouting/>}/>
       <Route path='/Books/:Category' element = {<BooksCategory/>}/>
       <Route path='/Welcome' element = {<Welcome/>}/>
       <Route path='/*' element = {<NotFound/>}/>
      </Routes>
  )
}
else{
return<Welcome Clicking = {HandleClick}/>
}
}

export default App
