/* eslint-disable react-hooks/exhaustive-deps */
import { SortAsc } from "lucide-react";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import ProductShimmer from "../../components/ProductShimmer";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../store/products/product-slice";

const ProductListing = () => {
  const { productList } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState("");
  const dispatch = useDispatch();

  function filterByProductCategory(category, priceRange) {
    let filteredProductsList = productList.filter(
      (item) =>
        (category === "" ||
          item.category.toLowerCase() === category.toLowerCase()) &&
        item.price <= priceRange,
    );
    setProductsData(filteredProductsList);
  }
  // clear filter
  function clearFilter() {
    setSelectedOption("");
    setPriceRange(1000);
  }

  //sorting by price
  useEffect(() => {
    function sortByPrice(sortValue) {
      let products = [...productList];
      if (sortValue === "asc") {
        products.sort((nextItem, preItem) => nextItem.price - preItem.price);
        setProductsData(products);
      } else if (sortValue === "des") {
        products.sort((nextItem, preItem) => preItem.price - nextItem.price);
        setProductsData(products);
      }
    }
    sortByPrice(sortOption);
  }, [sortOption]);

  useEffect(() => {
    setProductsData(productList);
  }, [productList]);

  useEffect(() => {
    filterByProductCategory(selectedOption, priceRange);
  }, [selectedOption, priceRange]);

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  return (
    <div className="lg:flex ">
      <Filter
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
        clearFilter={clearFilter}
      />
      <div className="w-full">
        <div className="flex justify-between px-3 py-5 items-center">
          <p className="text-sm xl:text-xl">
            Showing {productList && productList.length} Products
          </p>
          <div className="flex  gap-1 border p-1">
            <p className="text-gray-400 flex items-center tracking-tighter gap-1">
              <SortAsc />
              Sort by :
            </p>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-sm outline-none tracking-tighter font-semibold"
            >
              <option value="">Select Sorting Option</option>
              <option value="asc">Price: Low To High</option>
              <option value="des">Price: High To Low</option>
            </select>
          </div>
        </div>

        {productList.length === 0 ? (
          <ProductShimmer />
        ) : (
          <div className="w-full px-5 grid items-center gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {/* card */}

            {productsData &&
              productsData.length > 0 &&
              productsData.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  productImage={item.productImage}
                  title={item.title}
                  price={item.price}
                  // disPercentage={item.discountPercentage}
                  // reviews={item.reviews}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
