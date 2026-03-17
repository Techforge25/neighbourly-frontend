import React from "react";

const Banner = () => {
  return (
    <div
      className={`bg-[url('/images/banner.png')] bg-cover bg-center h-[600px] bg-[#000000] bg-opacity-50 relative`}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[62px] font-bold text-center font-monrope">
                your suburb’s Most <br /> Recommended <span> </span>
      </h1>
    </div>
  );
};

export default Banner;
