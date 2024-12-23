import { AlignJustify, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full  flex items-center justify-between px-5 py-4 ">
      <div>
        <h3 className="text-4xl font-bold tracking-tighter italic">ShopWay</h3>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-4 text-xl font-semibold">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="products">Product</Link>{" "}
          </li>
          <li>
            <Link>Contact</Link>{" "}
          </li>
          <li>
            <Link>About</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-4 text-xl font-semibold ">
        <NavLink to="login">Log In</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
        <NavLink className=" gap-2">
          <ShoppingBag />
        </NavLink>
      </div>
      <div className="sm:hidden">
        <AlignJustify />
      </div>
    </nav>
  );
};

export default Navbar;
