import './App.css'
import Products from './components/HomeComponents/Products'
import Header from './components/HomeComponents/Header'
import { Routes, Route, Link } from "react-router-dom";


function App() {

  
  return (

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </div>
  )
}

export default App
