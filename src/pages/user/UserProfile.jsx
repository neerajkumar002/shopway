const UserProfile = () => {
  return (
    <div>
      <div className="  flex flex-col gap-3 ">
        <div className="header bg-gray-400/10 py-4 px-3   ">
          <p className=" ">Account Details</p>
        </div>
        <div className=" bg-gray-400/10 py-4 px-3   ">
          <div className="font-semibold">Your Email Id: user@gmail.com</div>
          <div className="mt-3">
            <form className="flex flex-col gap-3">
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  className="ml-4 px-3 py-2 w-[300px]"
                />
              </div>
              <div>
                <button className="bg-[#DAE9FD] text-[#2978E1] px-4 py-1 hover:bg-[#2978E1] hover:text-white transition-colors">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
