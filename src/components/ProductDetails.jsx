/* eslint-disable react-hooks/exhaustive-deps */
import { BadgeInfo, CornerDownLeft, Star, Truck, Undo2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await response.json();
      if (product) {
        setProductDetails(product);
        setProductImages(product.images);
        setProductReviews(product.reviews);
      }
    }
    fetchData();
  }, [id]);

  console.log(productReviews);

  return (
    <div className="w-full  ">
      <div className="flex flex-col py-2 md:flex-row lg:justify-center">
        {/* product image */}
        <div className=" px-2">
          <div className="w-full h-[400px] md:w-[400px] lg:w-[500px] lg:h-[500px]">
            <img src={productImages[0]} alt="" className="w-full h-full" />
          </div>
          <div className="flex gap-5 ">
            {productImages.length > 0 &&
              productImages.map((image) => (
                <div className="w-[100px] h-[100px] border" key={image}>
                  <img src={image} alt="" className="w-full h-full" />
                </div>
              ))}
          </div>
        </div>

        {/* product details */}
        <div className="w-full px-2 py-2 flex flex-col gap-2 md:w-[500px]">
          <h2 className="font-semibold text-2xl">{productDetails.title}</h2>
          <div className="flex gap-2 items-center">
            <Star fill="gold " color="gold" size={18} />
            <Star fill="gold " color="gold" size={18} />
            <Star fill="gold " color="gold" size={18} />
            <Star fill="gold " color="gold" size={18} />
            {productDetails.rating}
          </div>
          <div className="font-semibold  ">
            <span className="text-xl">${productDetails.price} </span>
            <span className="line-through  ">
              MRP {(productDetails.price * 5).toFixed(2)}
            </span>
          </div>
          <p className="text-sm">Inclusive of all taxes</p>
          <div>
            <button className="w-full bg-red-400 text-white py-2 hover:bg-red-600">
              ADD TO CART
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-xl">Details</h4>
            <p className="tracking-tighter">{productDetails.description}</p>
            <div className="flex gap-2 border px-1">
              <CornerDownLeft /> {productDetails.returnPolicy}
            </div>
            <div className="flex gap-2 border px-1">
              <BadgeInfo /> {productDetails.warrantyInformation}
            </div>
            <div className="flex gap-2 border px-1">
              <Truck /> {productDetails.shippingInformation}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-2xl py-3 ">Customer Reviews</h3>

            {productReviews &&
              productReviews.map((review) => (
                <div key={review.reviewerName}>
                  <div className="flex gap-1">
                    <Star size={17} color="gold" fill="gold" />
                    <Star size={17} color="gold" fill="gold" />
                    <Star size={17} color="gold" fill="gold" />
                    <Star size={17} color="gold" fill="gold" />
                  </div>
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="tracking-tight">{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
