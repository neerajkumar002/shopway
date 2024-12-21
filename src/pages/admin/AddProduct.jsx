const AddProduct = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[600px] flex flex-col items-center  bg-white ">
        <h3 className="font-bold text-2xl py-2">Add New Product</h3>
        <div className="w-[500px]  h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="h-full w-full "
          />
        </div>

        <form className="flex flex-col gap-4 w-full px-12 py-2 ">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Stock"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Category"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <button className="w-full bg-gray-400 font-bold py-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
