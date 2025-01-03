import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomeLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* mina */}
      <main className="">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
