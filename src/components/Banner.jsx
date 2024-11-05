import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="w-11/12 mx-auto bg-purple-500 flex flex-col justify-center items-center text-white gap-4 text-center pt-10 pb-48">
        <h1 className="text-3xl font-bold w-1/2">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-1/2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-purple-400 rounded-3xl p-2 font-bold"
        >
          Show Now
        </button>
      </div>
      <div className="flex justify-center items-center relative -top-28 ">
        <div className="border-2 border-gray-100 rounded-xl p-2">
          <img
            className="h-48 md:h-96 rounded-lg"
            src={bannerImg}
            alt="Photo of VR Headset"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
