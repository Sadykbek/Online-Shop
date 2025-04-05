import { useCartStore } from "../../store/useStore";

export default function Cart({close}:any) {
   const removeFromCart = useCartStore((state) => state.removeFromCart);
   const cart = useCartStore((state)=> state.cart);
   return(
      <div className="fixed z-50 top-0 right-20 bg-white border p-4 ">
         <div className="relative">
            <button className="absolute top-[-20px] right-[-10px]" onClick={()=> close()}>❌</button>
         <h1>Корзина</h1>
         <div>
            {cart.map((item:any)=>(
               <div className="flex justify-between items-center">
                <div key={item.id}>{item.title}</div>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item)}>❌</button>
               </div>
            ))}
         </div>
         </div>
      </div>
   )
}