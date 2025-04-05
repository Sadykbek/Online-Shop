import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";


async function fetchProducts({ pageParam = 0 }) {
  const { data } = await axios.get(`https://dummyjson.com/products?limit=20&skip=${pageParam}&select=title,price,description,images`);
  return { ...data, nextPage: pageParam + 20 }; // Добавляем nextPage для пагинации
}

export default function Products() {

   const {
      data = { pages: [] },
      error,
      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    } = useInfiniteQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => (lastPage.products.length ? lastPage.nextPage : undefined),
      staleTime: 1000 * 60 * 5, 
    });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {data.pages.map((page) =>
        page.products.map((item: any) => (
          <ProductCard 
            key={item.id}
            title={item.title}
            description={item.description}
            price={+item.price}
            image={item.images[0]}
            id={item.id}
          />
        ))
      )}


      {isFetchingNextPage && <p>Загружаем ещё...</p>}
    </div>
    <div className="mt-10 flex justify-center">
        {hasNextPage && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchNextPage()}
          >
            Загрузить ещё
          </Button>
        )}
      </div>
    </div>
  );
}
