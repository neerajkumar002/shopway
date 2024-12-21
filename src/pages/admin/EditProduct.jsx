const EditProduct = () => {
  return (
    <div className="flex justify-around">
      <div className="w-[600px] flex flex-col items-center bg-white ">
        <div className="w-[500px]  h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="h-full w-full"
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

      <div className="bg-white shadow-lg w-[400px] px-2 py-3 rounded-md">
        <h4 className="font-bold text-2xl  ">Products Details</h4>

        <p className="py-2">Product Id: 67630205f5ea16a24b674770</p>
        <img
          src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="flex flex-col gap-2 py-4  ">
          <div className="">
            <p className="text-sm font-bold">Title: </p>
            <p> Headphone</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Description: </p>
            <p className=" ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias voluptas et expedita assumenda. Nobis!
            </p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Price: </p>
            <p> $10</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Stock: </p>
            <p> Headphone</p>
          </div>
          <div className="">
            <p className="text-sm font-bold">Category: </p>
            <p> Headphone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
