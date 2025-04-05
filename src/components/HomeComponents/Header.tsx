import { OutlinedInput } from '@mui/material';
import icon from '/icon.png';
import Cart from '../cart/Cart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
   const  [cartOpen, setCartOpen] = useState(false);
   function closeCart(){
      setCartOpen(false);
   }
   return(
      <header className='sticky top-0 bg-white z-40 flex justify-between items-center p-4'>
         <div className='lg:w-10 w-8'>
            <img src= {icon} alt="icon" />
         </div>
         <div>
            <OutlinedInput placeholder="Поиск" sx={{ width: 300 , px: 1,input: { padding: 1   }}} />
         </div>
         <div >
            <button onClick={() => setCartOpen(!cartOpen)}>Корзина</button>
            {cartOpen && <Cart close={closeCart} />}
            <Link to="/favorite"><button>Избранное</button></Link>
         </div>
         <div>
            <button>Войти</button>
            <button>Регистрация</button>
         </div>
      </header>
   )
}