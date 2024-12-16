import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  thumbnail,
  title,
  price,
  disPercentage,
  reviews,
}) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="w-full  border bg-white   rounded-md">
        <div className="w-full h-[250px]">
          <img src={thumbnail} alt={title} className="w-full h-full" />
        </div>
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
            $71 <span className="text-gray-400">$500</span>{" "}
            <span className="font-semibold text-red-600 tracking-tighter">
              50% off
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
