import { useState } from "react";
import Table from "../../../components/Table/Table";

const Orders = () => {
  const [noOrders, setOrders] = useState("");
  const data = [
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
    {
      order_id: "#123",
      order_date: "January 5,2025",
      order_status: "Processing",
      order_total: "₹ 3200",
      action: "View",
    },
  ];

  const columns = [
    {
      accessorKey: "order_id",
      header: "Order ID",
    },
    {
      accessorKey: "order_date",
      header: "Date",
    },
    {
      accessorKey: "order_status",
      header: "Status",
    },
    {
      accessorKey: "order_total",
      header: "Total",
    },
    {
      accessorKey: "action",
      header: "Action",
    },
  ];

  return (
    <div>
      <div className="border ">
        <div className="header bg-gray-400/10 py-4 px-3 flex justify-between items-center ">
          <p className="font-bold">Your Orders</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Type Order Id"
              className="px-2 w-[300px] py-1 outline-none"
            />
            <button className="bg-[#DAE9FD] text-[#2978E1] px-2 py-1">
              Search
            </button>
          </div>
        </div>
        {noOrders === "" ? (
          <h4 className="text-center py-5   text-2xl">You have no orders yet</h4>
        ) : (
          <div className="px-3 py-4">
            <Table data={data} columns={columns} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
