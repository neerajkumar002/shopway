import { SortAsc } from "lucide-react";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import ProductShimmer from "../../components/ProductShimmer";

const ProductListing = () => {
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
    <div className="lg:flex ">
      <Filter />
      <div className="w-full">
        <div className="flex justify-between px-3 py-5 items-center">
          <p className="text-sm xl:text-xl">
            Showing {productsData.length} Products
          </p>
          <div className="flex  gap-1 border p-1">
            <p className="text-gray-400 flex items-center tracking-tighter gap-1">
              <SortAsc />
              Sort by :
            </p>
            <select className="text-sm outline-none tracking-tighter font-semibold">
              <option value="">Price: Low To High</option>
              <option value="">Price: High To Low</option>
            </select>
          </div>
        </div>

        {productsData.length === 0 ? (
          <ProductShimmer />
        ) : (
          <div className="w-full px-5 grid items-center gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {/* card */}

            {productsData &&
              productsData.length > 0 &&
              productsData.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  disPercentage={item.discountPercentage}
                  reviews={item.reviews}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;