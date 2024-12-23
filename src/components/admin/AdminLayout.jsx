import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex w-full min-h-screen  ">
      <AdminSidebar />
      <div className="w-full bg-[#f9fafb] px-10">
        <div className="w-full flex justify-between items-center py-4">
          <h3 className="font-bold text-2xl">Products</h3>
          <div>
            <div className="bg-[#DAE9FD] w-[50px] h-[50px] rounded-full flex items-center justify-center ">
              <p className="font-bold">NK</p>
            </div>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
