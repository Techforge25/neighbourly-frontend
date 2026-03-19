import React from "react";

const Banner = ({
  text,
  banner,
  height,
  textColor
}: {
  text: string;
  banner: string;
  width?: string;
  height?: string;
  textColor?: string;
}) => {
  return (
    <div
      className={`relative bg-cover bg-center flex items-center justify-center ${
        height ? height : "h-[400px] md:h-[500px] lg:h-[700px]"
      }`}
      style={{
        backgroundImage: `url(${banner || "/images/getintouch.png"})`,
      }}
    >

      {/* Text Content */}
      <h1
        className={`relative z-10 ${textColor?textColor:`text-white`} font-semibold text-center px-4
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-manrope md:w-[950px] md:leading-[67px] leadibng-[37px]`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Banner;