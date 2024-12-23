import { Camera } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/products/product-slice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const [productImage, setProductImage] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const successToast = (message) => toast.success(message);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      // const formData = { ...data, productImage: productImage };
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("category", data.category);
      if (data.file[0]) formData.append("productImage", data.file[0]);

      console.log(formData);
      dispatch(addProduct(formData)).then((data) => {
        if (data.payload.success === true) {
          successToast(data.payload.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[600px] flex flex-col items-center  bg-white ">
        <h3 className="font-bold text-2xl py-2">Add New Product</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          // encType="multipart/form-data"
          className="flex flex-col gap-4 w-full px-12 py-2"
        >
          <div className="w-full  ">
            {/* <img
              src={productImage && URL.createObjectURL(productImage)}
              alt=""
              className="h-full w-full "
            /> */}

            {/* {imageFile ? (
              <div className="border text-center px-2 py-2">
                <p className="text-xs font-medium">{imageFile.name}</p>
              </div>
            ) : ( */}
            <label
              htmlFor="image"
              className="flex gap-2 border px-2 py-2 rounded-md"
            >
              <Camera /> Upload Image
              <input
                type="file"
                id="image"
                name="productImage"
                accept="image/png, image/jpg, image/jpeg"
                // onChange={(e) => setProductImage(e.target.files?.[0])}
                {...register("file", { required: true })}
              />
            </label>
            {/* )} */}
          </div>

          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              {...register("description", { required: true })}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              {...register("price", { required: true })}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Stock"
              name="stock"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              {...register("stock", { required: true })}
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              {...register("category", { required: true })}
            />
          </div>
          <div>
            <button className="w-full bg-gray-400 font-bold py-2">Save</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProduct;
