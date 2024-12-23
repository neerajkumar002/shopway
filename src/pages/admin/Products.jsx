import { Plus } from "lucide-react";
import AdminProductCard from "../../components/admin/ProductCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProductById,
  getAdminProductsList,
} from "../../store/products/product-slice";
import { toast, ToastContainer } from "react-toastify";

const AdminProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.products);
  console.log(productList);

  useEffect(() => {
    dispatch(getAdminProductsList());
  }, [dispatch]);

  const successToast = (message) => toast.success(message);

  const handleDeleteProduct = async (id) => {
    console.log(id);
    dispatch(deleteProductById(id)).then((data) => {
      if (data.payload.success === true) {
        dispatch(getAdminProductsList());
        successToast(data.payload.message);
      }
    });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex  justify-between py-3">
        <div className="bg-white shadow-sm rounded-md ">
          <input
            type="search"
            placeholder="Enter product name"
            className="px-1 py-2"
          />
          <button className="bg-[#DAE9FD] text-[#2978E1] py-2 px-2 font-semibold ">
            Search
          </button>
        </div>
        <button
          onClick={() => navigate("/admin/products/add")}
          className="bg-[#DAE9FD] text-[#2978E1] flex px-3 py-1 rounded-md items-center"
        >
          Add <Plus />
        </button>
      </div>
      <div className=" overflow-auto grid gap-3 grid-cols-5">
        {productList && productList.length > 0
          ? productList.map((item) => (
              <AdminProductCard
                key={item._id}
                id={item._id}
                title={item.title}
                image={item.productImage}
                price={item.price}
                stock={item.stock}
                category={item.category}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))
          : ""}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminProducts;
