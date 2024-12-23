import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../store/products/product-slice";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.products);
  console.log(productDetails);
  useEffect(() => {
    dispatch(getProductById(id));
    if (productDetails) {
      setTitle(productDetails.title);
      setDescription(productDetails.description);
      setPrice(productDetails.price);
      setStock(productDetails.stock);
      setCategory(productDetails.category);
      setImage(productDetails.productImage);
    }
  }, [id, productDetails]);

  return (
    <div className="flex justify-around">
      <div className="w-[600px] flex flex-col items-center bg-white ">
        <div className="w-[500px]  h-[300px]">
          <img src={image} alt="" className="h-full w-full" />
        </div>


        <form className="flex flex-col gap-4 w-full px-12 py-2 ">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Description"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Stock"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Category"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <button className="w-full bg-gray-400 font-bold py-2">Save</button>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-lg w-[400px] px-2 py-3 rounded-md">
        <h4 className="font-bold text-2xl  ">Products Details</h4>

        <p className="py-2">Product Id: {productDetails?._id}</p>
        <img
          src={productDetails?.productImage}
          alt=""
          className="h-[300px] w-full"
        />
        <div className="flex flex-col gap-2 py-4  ">
          <div className="">
            <p className="text-sm font-bold">Title: </p>
            <p> {productDetails?.title}</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Description: </p>
            <p className=" ">{productDetails?.description}</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Price: </p>
            <p> ${productDetails?.price}</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Stock: </p>
            <p> {productDetails?.stock}</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Category: </p>
            <p> {productDetails?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
