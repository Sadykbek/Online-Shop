import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { descriptionCrop } from "./descriptionCrop";
import { useCartStore } from "../../store/useStore";


interface ProductProps {
  title: string;
  description: string;
  price: number;
  image?: string;
  id: number
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  id
}: ProductProps) {
  const [loading, setLoading] = useState(true);
  const [isIncart, setIsIncart] = useState(false);
  function handleAddToCart(product: any) {
    if(isIncart){
      setIsIncart(false);
      return useCartStore.getState().removeFromCart(product);

    }
    else{
      useCartStore.getState().addToCart(product);
      setIsIncart(true);
    }
    
  }
  
  return (
    <Box
      component={"div"}
      sx={{ px: 2, py: 1, border: "1px solid #778da9", borderRadius: 2 , position: "relative" }}
    ><div className="absolute top-0 right-2" onClick={() => handleAddToCart({ title, description, price, image, id })}>{isIncart ? "❌" : "🛒"}</div>
      <div className="h-60 w-full overflow-hidden flex justify-center items-center">
        {loading && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )}

        <img
          src={image}
          alt={title}
          className={`h-full object-cover object-center transition-opacity duration-300 ${
            loading ? "opacity-0 w-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoad={() => setLoading(false)}
        />
      </div>

      <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="lg:text-base md:text-sm text-xs text-gray-600">
        {descriptionCrop(description)}
      </p>

      <div className="flex justify-between items-center px-2 mt-2">
        <div>
          <p>
            <b>Цена:</b> {price} ₽
          </p>
        </div>
        <Button variant="contained" color="primary">
          Купить
        </Button>
      </div>
    </Box>
  );
}
