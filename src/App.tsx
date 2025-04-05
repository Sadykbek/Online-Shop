import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/HomeComponents/Header'
import { Routes, Route, Link } from "react-router-dom";
import Favorite from './pages/Favorite';


function App() {

  
  return (

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/favorite' element={<Favorite/>} />
        </Routes>
      </div>
  )
}

export default App
