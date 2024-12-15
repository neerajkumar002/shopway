import { SortAsc } from "lucide-react";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      if (result) {
        console.log(result.products);
        setProductsData(result.products);
      }
    }
    fetchData();
  }, []);

  console.log(productsData);

  return (
    <div className="sm:px-60 flex gap-2 flex-col sm:flex-row">
      <Filter />
      <div className="w-full">
        <div className="flex justify-between px-2 py-5 items-center">
          <div>Showing {productsData.length} Products</div>
          <div className="flex gap-2 border p-1">
            <p className="text-gray-400 flex gap-1" >
              <SortAsc />
              Sort by :
            </p>
            <select className="outline-none font-semibold">
              <option value="">Price: Low To High</option>
              <option value="">Price: High To Low</option>
            </select>
          </div>
        </div>
        <div className="w-full grid  grid-cols-2 sm:grid-cols-4 sm:gap-5">
          {/* card */}

          {productsData &&
            productsData.length > 0 &&
            productsData.map((item) => (
              <ProductCard
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                price={item.price}
                disPercentage={item.discountPercentage}
                reviews={item.reviews}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
