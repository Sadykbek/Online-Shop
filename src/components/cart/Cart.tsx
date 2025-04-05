import { useCartStore } from "../../store/useStore";
import CartItem from "./CartItem";
import CancelIcon from '@mui/icons-material/Cancel';

export default function Cart({close}:any) {
   const cart = useCartStore((state)=> state.cart);
   return(
      <div className="fixed z-50 top-0 right-2 bg-white border p-4 w-[450px] rounded">
         <div className="relative">
            <button className="absolute top-[-10px] right-[-10px]" onClick={()=> close()}><CancelIcon sx={{ fontSize: 30 ,  color: "black"  }}/></button>
         <h1>Корзина</h1>
         <div>
            {cart.map((item:any)=>(
               <CartItem key={item.id} {...item}/>
            ))}
            {cart.length == 0 && <p className="text-left pl-4 text-slate-400">Корзина пуста</p>}
         </div>
         </div>
      </div>
   )
}