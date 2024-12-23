import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../store/auth-slice";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { errorMessage, user, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "" && formData.password === "") {
      setError("Please Enter Username and Password");
    } else {
      dispatch(loginUser(formData));
    }
  };

  useEffect(() => {
    console.log(user);
  }, [isAuthenticated, user]);

  return (
    <div className="w-full min-h-screen flex  justify-center items-center relative">
      <Link
        to="/"
        className="absolute top-12 left-10 shadow-xl flex items-center  gap-3 font-semibold px-2 py-2"
      >
        <ArrowLeft size={20} /> Back
      </Link>
      <div className="bg-white shadow-lg w-[400px]  sm:w-[500px]  py-8 rounded-lg ">
        <h3 className="text-3xl text-center border-b-2 py-3">Login</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full px-12 py-2 "
        >
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="w-full border-b-2 outline-none px-1 py-3 text-xl"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div>
            <button className="w-full bg-gray-400 font-bold py-2">Login</button>
          </div>
        </form>
        <div className="pt-1">
          <p className="text-center">
            Not a Member ?{" "}
            <Link to="/signup" className="text-sky-400 font-semibold">
              Signup
            </Link>
          </p>
          <p className="text-center text-red-500">{error && error}</p>
          <p className="text-center text-red-500">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
