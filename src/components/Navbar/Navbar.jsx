import { AlignJustify, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/auth-slice";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <nav className="w-full  flex items-center justify-between px-5 py-4 ">
      <div>
        <h3 className="text-2xl font-bold tracking-tighter italic">ShopWay</h3>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-4   font-semibold">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="products">Product</Link>{" "}
          </li>
          <li>
            <Link to="contact">Contact</Link>{" "}
          </li>
          <li>
            <Link>About</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-4   font-semibold ">
        {!isAuthenticated && <NavLink to="login">Log In</NavLink>}
        {!isAuthenticated && <NavLink to="signup">Sign Up</NavLink>}

        <NavLink to="cart" className=" gap-2">
          <ShoppingBag size={22} />
        </NavLink>
        {isAuthenticated && (
          <div className="text-gray-500 flex gap-3   ">
            <p>{user.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <div className="sm:hidden">
        <AlignJustify />
      </div>
    </nav>
  );
};

export default Navbar;
