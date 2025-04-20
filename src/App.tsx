import HomePage from './pages/HomePage';
import Header from './components/HomeComponents/Header'
import { Routes, Route} from "react-router-dom";
import Favorite from './pages/Favorite';
import ProductPage from './pages/ProductPage';
import LogIn from './pages/LogIn';
import Registration from './pages/Registration';


function App() {
  return (

      <div className='w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-8'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/favorite' element={<Favorite/>} />
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </div>
  )
}

export default App
