const categories = [
  {
    slug: "beauty",
    name: "Beauty",
  },

  {
    slug: "mens-shirts",
    name: "Mens Tshirt",
  },
];

const Filter = ({
  setSelectedOption,
  selectedOption,
  priceRange,
  setPriceRange,
  clearFilter,
}) => {
  return (
    <div className="w-full px-5 py-5 lg:w-[300px]">
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl  ">Filters</h2>
        <button
          onClick={clearFilter}
          className="border-b border-gray-500 text-gray-500"
        >
          Clear filters
        </button>
      </div>
      {/* category */}
      <div className="flex flex-col gap-2 mt-10   bg-gray-200 border">
        <h3 className="font-semibold  pl-2 pt-2">Categories</h3>
        <div>
          <select
            className="w-full px-1 py-2 outline-none "
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
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
          <input
            type="range"
            min={100}
            max={5000}
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full"
          />
          <span>{priceRange}</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
