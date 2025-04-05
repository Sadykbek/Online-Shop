import { useFavoriteStore } from "../store/useStore"
export default function Favorite() {
   const favorite = useFavoriteStore((set)=>set.products)
   return (
      <>
        {favorite.map(item=>(
         <p>{item.title}</p>
        ))}
      </>
   )
}