import { useNavigate } from "react-router-dom";

const AdminProductCard = ({
  id,
  title,
  price,
  stock,
  image,
  category,
  handleDeleteProduct,
}) => {
  const navigate = useNavigate();

  return (
    <div className="admin-product-card w-[300px] bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[250px] ">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="px-3 py-2">
        <div className="  min-h-10 ">
          <h2 className="text-sm ">{title}</h2>
        </div>
        <div className="flex justify-between font-semibold py-2">
          <p>Price: ${price}</p>
          <p>Stock: {stock}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <button
            onClick={() => navigate(`/admin/products/${id}`)}
            className="bg-[#DAE9FD] text-[#2978E1] px-4 py-1 rounded-md "
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(id)}
            className="bg-[#DAE9FD] text-[#2978E1] px-4 py-1 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
