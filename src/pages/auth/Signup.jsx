import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full min-h-screen flex  justify-center items-center relative">
      <Link
        to="/"
        className="absolute top-12 left-10 shadow-xl flex items-center  gap-3 font-semibold px-2 py-2"
      >
        <ArrowLeft size={20} /> Back
      </Link>
      <div className="bg-white shadow-lg w-[400px]  sm:w-[500px]  py-8 rounded-lg ">
        <h3 className="text-3xl text-center border-b-2 py-3">Signup</h3>
        <form className="flex flex-col gap-4 w-full px-12 py-2 ">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
            />
          </div>
          <div>
            <button className="w-full bg-gray-400 font-bold py-2">
              Signup
            </button>
          </div>
        </form>
        <div className="py-4">
          <p className="text-center">
            Already have an account
            <Link to="/login" className="text-sky-400 font-semibold ml-2 ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
