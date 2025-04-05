import { useCartStore } from "../../store/useStore";
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
export default function CartItem({ title, price, image, id }: any) {
   const removeFromCart = useCartStore((state) => state.removeFromCart);
   return (
      <div className="flex justify-between items-center gap-2 px-4 py-2 border-b">
       <div key={id}>{title}</div>
       <p>{price}</p>
       <div className="h-16 w-16 overflow-hidden ml-auto">
         <img src={image} className="h-full" alt="" />
       </div>
         <Box onClick={() => removeFromCart({ title, price, image, id })} className="cursor-pointer p-1 flex justify-center items-center" bgcolor={"#c1121f"} borderRadius={2} sx={{ "&:hover": { backgroundColor: "#780000" } }}>
            <CancelIcon  sx={{ fontSize: 20 ,  color: "white"  }}/>
         </Box>
        
     </div>
   )
}