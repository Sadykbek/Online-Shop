import { OutlinedInput, Box } from '@mui/material';
import icon from '/icon.png';
import Cart from '../cart/Cart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


export default function Header(){
   const navigate = useNavigate();
   function handleClick(){
      navigate("/")
   }
   const  [cartOpen, setCartOpen] = useState(false);
   function closeCart(){
      setCartOpen(false);
   }
   return(
      <header className='sticky top-0 bg-white z-40 flex justify-between items-center p-4 '>
         <div className='lg:w-10 w-8'>
            <a onClick={handleClick} className='cursor-pointer'>
             <img src= {icon} alt="icon" />
            </a>
         </div>
         <div>
            <OutlinedInput placeholder="Поиск" sx={{ width: 300 , px: 1,input: { padding: 1   }}} />
         </div>
         <div className='flex gap-4 items-center'>
            <Box className='cursor-pointer bg-blue-300 hover:bg-blue-100  border-blue-400 border'  p={1} borderRadius={2} onClick={() => setCartOpen(!cartOpen)}>Корзина</Box>
            {cartOpen &&  
            <AnimatePresence>
              <Cart close={closeCart} />
            </AnimatePresence>
            }
            <Link to="/favorite"><Box className='cursor-pointer bg-pink-300 hover:bg-pink-100  border-pink-400 border'  p={1} borderRadius={2}>Избранное</Box></Link>
         </div>
         <div className='flex gap-4 items-center'>
            <Box p={1} className='cursor-pointer bg-green-300 hover:bg-green-100 border rounded border-green-700'>
               <Link to="/login">
                  <button>Войти</button>
               </Link>
            </Box>
            <Box p={1} className='cursor-pointer bg-blue-300 hover:bg-blue-100 border rounded border-blue-700'>
               <Link to="/register">
                  <button>Регистрация</button>
               </Link>
            </Box>
         </div>
      </header>
   )
}