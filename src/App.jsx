import './App.css'
import './utils/Media.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Browser from './Components/Browse'
import AddBookForm from './Components/AddBookForm'
import DynamicRouting from './Components/DynamicRouting'
import BooksCategory from './Components/Category_Books'
import NotFound from './Components/404NotFound'
import Welcome from './Components/Welcome'
function App() {
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

export default App
