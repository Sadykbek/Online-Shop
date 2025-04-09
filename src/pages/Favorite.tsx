import { useFavoriteStore } from "../store/useStore"
import ProductCard from "../components/HomeComponents/ProductCard"
export default function Favorite() {
   const favorite = useFavoriteStore((set)=>set.products)
   return (
      <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {favorite.map(item=>(
         <div key={item.id}>
            <ProductCard {...item} />
         </div>
        ))}
      </div>
      </>
   )
}