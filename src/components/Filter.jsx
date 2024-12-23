const categories = [
  {
    slug: "beauty",
    name: "Beauty",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
  },
  {
    slug: "furniture",
    name: "Furniture",
  },
  {
    slug: "groceries",
    name: "Groceries",
  },
  {
    slug: "home-decoration",
    name: "Home Decoration",
  },
  {
    slug: "kitchen-accessories",
    name: "Kitchen Accessories",
  },
  {
    slug: "laptops",
    name: "Laptops",
  },
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
  },
  {
    slug: "mens-watches",
    name: "Mens Watches",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle",
  },
  {
    slug: "skin-care",
    name: "Skin Care",
  },
  {
    slug: "smartphones",
    name: "Smartphones",
  },
  {
    slug: "sports-accessories",
    name: "Sports Accessories",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
  },
  {
    slug: "tablets",
    name: "Tablets",
  },
  {
    slug: "tops",
    name: "Tops",
  },
  {
    slug: "vehicle",
    name: "Vehicle",
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
  },
  {
    slug: "womens-jewellery",
    name: "Womens Jewellery",
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
  },
  {
    slug: "womens-watches",
    name: "Womens Watches",
  },
];

const Filter = () => {
  return (
    <div className="w-full px-5 py-5 lg:w-[300px]">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl  ">Filters</h2>
        <button className="border-b border-gray-500 text-gray-500">
          Clear filters
        </button>
      </div>
      {/* category */}
      <div className="flex flex-col gap-2 mt-10   bg-gray-200 border">
        <h3 className="font-semibold  pl-2 pt-2">Categories</h3>
        <div>
          <select className="w-full px-1 py-2 outline-none">
            <option value="">Category</option>
            {categories.map((category) => (
              <option key={category.slug}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* price range */}
      <div className=" flex flex-col gap-2 mt-10 bg-gray-200 border">
        <h3 className="font-semibold pl-2 pt-2">Price </h3>
        <div className="flex   gap-1 bg-white px-2 py-3 items-center">
          <input type="range" min={1000} max={5000} className="w-full" />
          <span>5000</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
