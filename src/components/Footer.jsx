import { Copyright, Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:px-60  sm:pt-8   ">
      <div className="flex flex-col gap-4 px-10 sm:px-1 sm:flex-row sm:justify-between ">
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

        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="text-center w-full ">
        <p className="flex items-center justify-center gap-1 font-semibold text-sm   ">
          <Copyright size={15} /> ShopWay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
