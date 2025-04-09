import { useCartStore } from "../../store/useStore";
import CartItem from "./CartItem";
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from "framer-motion";

export default function Cart({ close }: any) {
   const cart = useCartStore((state) => state.cart);

   return (
      <motion.div
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 100 }}
         transition={{ duration: 0.3 }}
         className="fixed z-50 top-0 right-2 bg-white border p-4 w-[450px] rounded shadow-lg"
      >
         <div className="relative">
            <button
               className="absolute top-[-10px] right-[-10px] cursor-pointer"
               onClick={() => close()}
            >
               <CancelIcon sx={{ fontSize: 30, color: "black" }} />
            </button>
            <h1 className="text-xl font-semibold mb-4">Корзина</h1>
            <div>
               {cart.map((item: any) => (
                  <CartItem key={item.id} {...item} />
               ))}
               {cart.length === 0 && (
                  <p className="text-left pl-4 text-slate-400">Корзина пуста</p>
               )}
            </div>
         </div>
      </motion.div>
   );
}
