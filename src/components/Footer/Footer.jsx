import { Copyright, Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-3 py-10   ">
      <div className="xl:w-[1100px] m-auto flex flex-col gap-4   sm:px-1 sm:flex-row sm:justify-between ">
        <div className="w-[200px] flex  flex-col gap-3">
          <h3 className="text-xl font-bold ">ShopWay</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ducimus suscipit, exercitationem facere id
          </p>
          <div className="flex gap-3">
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
          </div>
        </div>

        <div className="flex gap-20 xl:justify-between  ">
          <div >
            <h4 className="font-semibold text-xl">Explore</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Customer Support</h4>
            <p>+91 987654321</p>
            <p>help@shopway.com</p>
          </div>
        </div>
      </div>
      <div className="  w-full ">
        <p className="flex items-center justify-center gap-1 font-semibold text-sm   ">
          <Copyright size={15} /> ShopWay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
