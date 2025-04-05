import { useState } from "react";
import { useFavoriteStore } from "../../../store/useStore";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface ButtonFavoriteProps {
   product: {
      title: string,
      price : number,
      image: string| undefined,
      id :number
   };
 }
export default function ButtonFavorite({product}: ButtonFavoriteProps){
     const favorite = useFavoriteStore((set)=> set.products)
    const [isFavorite, setIsFavorite] = useState(favorite.some(item=>item.id == product.id));
    const addToFavorite = useFavoriteStore(state => state.addToFavorite)
  const removeFromFavorite = useFavoriteStore(state => state.removeFromFavorite)
     const toggleFavorite = (product: object) => {
       if(isFavorite){
         setIsFavorite(false);
         removeFromFavorite(product)
       }
       else{
         setIsFavorite(true)
         addToFavorite(product)
       }
     };
   return(
      <>
              {isFavorite ? <FavoriteIcon color="error" onClick={()=>toggleFavorite(product)} /> : <FavoriteBorderIcon color="error" onClick={()=>toggleFavorite(product)} />}
      </>
   )
}