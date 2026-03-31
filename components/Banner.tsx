import React from "react";

const Banner = ({
  text,
  banner,
  height,
  textColor,
  para,
  textSize
}: {
  text: string;
  banner: string;
  width?: string;
  height?: string;
  textColor?: string;
  para?: string;
  textSize?:string
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
      <div>
        <h1
          className={`relative z-10 ${textColor ? textColor : `text-white`} font-semibold text-center px-4
        text-2xl ${textSize?textSize:"sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] md:leading-[67px] leadibng-[37px]"} font-manrope md:w-[950px] `}
        >
          {text}
        </h1>
        {/* para */}
        {para && <p className="text-center text-[18px] font-poppins text-white md:mt-6 mt-4 md:w-[50%] md:leading-[24px] leading-[18px] mx-auto">{para}</p>}
      </div>
    </div>
  );
};

export default Banner;
