import React from "react";

const Banner = ({
  text,
  banner,
  height,
  textColor,
  para,
  textSize,
  bgPosition,
}: {
  text: string;
  banner: string;
  width?: string;
  height?: string;
  textColor?: string;
  para?: string;
  textSize?: string;
  bgPosition?: string;
}) => {
  return (
    <div
      className={`relative  bg-cover bg-center flex items-center justify-center ${
        height ? height : "h-[400px] md:h-[500px]  lg:h-[62.2vh]"
      }`}
      style={{
        backgroundImage: `url(${banner || "/images/getintouch.png"})`,
        backgroundPosition: bgPosition,
      }}
    >
      <div>
        <h1
          className={`relative z-10 ${textColor ? textColor : `text-white`} font-semibold text-center px-4
        text-2xl ${textSize ? textSize : "sm:text-[36px] md:text-[42px] lg:text-[52px] xl:text-[62px] md:leading-[67px] leadibng-[37px]"} font-manrope xl:w-[1200px] `}
        >
          {text}
        </h1>
        {/* para */}
        {para && (
          <p className="text-center text-[18px] font-poppins text-white md:mt-6 mt-4 xl:w-[800px] md:leading-[24px] leading-[18px] mx-auto">
            {para}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
