import { useCartStore } from "../../../store/useStore"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";


export default function AddToCartButton({product}: any) {
   const cart = useCartStore((set) => set.cart);
   const [isIncart, setIsIncart] = useState(cart.some((item) => item.id == product.id));
   const removeFromCart = useCartStore(state => state.removeFromCart)
   const addToCart = useCartStore(state => state.addToCart)
   function handleAddToCart(product: any) {
      if (isIncart) {
        setIsIncart(false);
        removeFromCart(product);
      } else {
        setIsIncart(true);
        addToCart(product);
      }
    }
     useEffect(() => {
        setIsIncart(cart.some((item) => item.id === product.id));
      }, [cart, product.id]);
   return (
      <Button
                variant="contained"
                size="small"
                sx={isIncart ? { backgroundColor: "#9e9e9e" } : { backgroundColor: "#2196f3" }}
                onClick={() =>
                  handleAddToCart(product)
                }
              >
                {isIncart ? <RemoveShoppingCartIcon/> : <AddShoppingCartIcon />}
              </Button>
   )
}