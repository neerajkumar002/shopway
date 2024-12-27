import ImageCarousel from "../../components/carousel/ImageCarousel";

const images = [
  "https://res.cloudinary.com/di0zcddgv/image/upload/v1735305460/blue_bold_winter_sale_banner_landscape_nbq19b.png",
  "https://res.cloudinary.com/di0zcddgv/image/upload/v1735305817/Black_And_White_Modern_Fashion_Sale_Banner_Landscape_tkykka.jpg",
  "https://res.cloudinary.com/di0zcddgv/image/upload/v1735306426/Green_and_Yellow_Simple_Clean_Shoes_Sale_Banner_syabuk.jpg",
  "https://res.cloudinary.com/di0zcddgv/image/upload/v1735306395/Gray_Minimalist_New_Collection_Banner_ypvidx.jpg",
];

const Home = () => {
  return (
    <div className=" ">
      <ImageCarousel images={images} />

      <section className="flex flex-col  gap-3 w-full items-center  ">
        <div className="  flex flex-col xl:flex-row    ">
          <div className="flex flex-col items-center text-center  w-[400px] py-10">
            <img
              src="/public/exchange-line.svg"
              alt=""
              className=" w-[50px] mb-5 "
            />

            <p className="font-semibold  text-2xl">Easy Exchange Policy</p>
            <p className="text-gray-400  text-xl">
              We offer free exchange policy
            </p>
          </div>
          <div className="flex flex-col items-center  w-[400px] py-10">
            <img
              src="/public/truck-return.svg"
              alt=""
              className=" w-[50px] mb-5 "
            />
            <p className="font-semibold  text-2xl">7 Days Return Policy</p>
            <p className="text-gray-400  text-xl">
              We provide 7 days free return policy
            </p>
          </div>
          <div className="flex flex-col items-center  w-[400px] py-10">
            <img src="/public/support.svg" alt="" className=" w-[50px] mb-5 " />
            <p className="font-semibold  text-2xl">Best customer support</p>
            <p className="text-gray-400  text-xl">
              We provide 24/7 customer support
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center px-10    ">
          <p className="font-bold text-2xl">Subscribe now & get 25% off</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ex?
          </p>
          <div className="flex border w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-2 border-none outline-none"
            />{" "}
            <button className="bg-black text-white px-3 py-3">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
