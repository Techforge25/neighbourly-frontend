import React from "react";

const Banner = ({ text,banner }: { text: string; banner: string }) => {
  console.log("Banner props:", { text, banner });
  return (
    <div className={`relative h-[600px] bg-[url('${banner?banner:"/images/getintouch.jpg"}')] bg-cover bg-center`}>
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b1a12]/70 via-[#8b4a2b]/40 to-[#f3b39d]/30"></div>

      {/* Content */}
      <h1 className="relative z-10 text-white text-[62px] font-bold text-center pt-40">
        {text}
      </h1>
    </div>
  );
};

export default Banner;
