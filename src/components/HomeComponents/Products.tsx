import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

async function fetchProducts({ pageParam = 0 }) {
  const { data } = await axios.get(`https://dummyjson.com/products?limit=20&skip=${pageParam}&select=title,price,description,images`);
  return { ...data, nextPage: pageParam + 20 }; // Добавляем nextPage для пагинации
}

export default function Products() {
  const {
    data = { pages: [] },
    error,
    isLoading,
    fetchNextPage, // Функция для загрузки следующей страницы
    hasNextPage,   // Флаг: есть ли ещё данные
    isFetchingNextPage, // Идёт ли подгрузка
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage.products.length ? lastPage.nextPage : undefined),
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {data.pages.map((page) =>
        page.products.map((item: any) => (
          <ProductCard 
            key={item.id}
            title={item.title}
            description={item.description}
            price={+item.price}
            image={item.images[0]}
          />
        ))
      )}

      {isFetchingNextPage && <p>Загружаем ещё...</p>}
    </div>
  );
}
