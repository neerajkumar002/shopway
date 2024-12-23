import { ChartNoAxesCombined, ShoppingCart, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="shadow-lg w-[260px] h-screen px-4 py-5">
      <h1 className="font-bold italic text-3xl   text-[#2978E1]">ShopWay</h1>
      <div className="flex gap-3 flex-col py-5">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2  font-semibold px-1 py-2 rounded-md bg-[#DAE9FD] text-[#2978E1]  "
              : "flex gap-2 text-gray-500 font-semibold px-1 py-2 rounded-md hover:bg-[#DAE9FD] hover:text-[#2978E1]"
          }
        >
          <ChartNoAxesCombined />
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2  font-semibold px-1 py-2 rounded-md bg-[#DAE9FD] text-[#2978E1]  "
              : "flex gap-2 text-gray-500 font-semibold px-1 py-2 rounded-md hover:bg-[#DAE9FD] hover:text-[#2978E1]"
          }
        >
          <Users />
          Users
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2  font-semibold px-1 py-2 rounded-md bg-[#DAE9FD] text-[#2978E1]  "
              : "flex gap-2 text-gray-500 font-semibold px-1 py-2 rounded-md hover:bg-[#DAE9FD] hover:text-[#2978E1]"
          }
        >
          <ShoppingCart />
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
