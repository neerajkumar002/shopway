import { AlignJustify, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-9 sm:justify-around items-center py-8  ">
      <div>
        <h3 className="text-4xl font-bold tracking-tighter italic">ShopWay</h3>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-4 text-xl font-semibold">
          <li>
            <Link>Home</Link>{" "}
          </li>
          <li>
            <Link>Product</Link>{" "}
          </li>
          <li>
            <Link>Contact</Link>{" "}
          </li>
          <li>
            <Link>About</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex gap-4 text-xl font-semibold ">
        <NavLink to="login">Log In</NavLink>
        <NavLink>Sign Up</NavLink>
        <NavLink className="flex gap-2">
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
