import { OutlinedInput } from '@mui/material';
import icon from '/icon.png';
export default function Header(){
   return(
      <header className='flex justify-between items-center p-4'>
         <div className='lg:w-10 w-8'>
            <img src= {icon} alt="icon" />
         </div>
         <div>
            <OutlinedInput placeholder="Поиск" sx={{ width: 300 , px: 1,input: { padding: 1   }}} />
         </div>
         <div>
            <button>Войти</button>
            <button>Регистрация</button>
         </div>
      </header>
   )
}