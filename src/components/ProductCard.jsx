import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  productImage,
  title,
  price,
  // disPercentage,
  // reviews,
}) => {
  return (
    <div className="w-full border bg-white rounded-md py-3 ">
      <Link to={`/products/${id}`}>
        <div className="w-full h-[300px]">
          <img src={productImage} alt={title} className="w-full h-full" />
        </div>
      </Link>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold tracking-tighter">{title}</h3>
        <div className="flex items-center   gap-1 ">
          <Star size={20} color="gold " fill="gold" />
          <Star size={20} color="gold " fill="gold" />
          <Star size={20} color="gold " fill="gold" />
          <Star size={20} color="gold " fill="gold" />
          <span className="text-sm pl-1 text-gray-400"> {500} Reviews</span>
        </div>

        <p>
          ${price} <span className="text-gray-400">${price * 5}</span>{" "}
          <span className="font-semibold text-red-600 tracking-tighter">
            50% off
          </span>
        </p>
      </div>
      <div className="px-2 py-1">
        <button className="w-full  py-2 rounded-md  bg-[#DAE9FD] text-[#2978E1]    hover:bg-[#2978E1]  hover:text-white font-semibold   transition-all">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
