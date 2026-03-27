"use client";
import React, { useLayoutEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "../Card";

const LocalRecommendation = () => {
  const [isProfile, setIsProfile] = useState<any>(false);

  useLayoutEffect(() => {
    const isProfileCompleted = localStorage.getItem("isProfileCompleted");
    setIsProfile(isProfileCompleted);
  }, []);

  return (
    <div className="max-w-[1396px] mx-auto my-20">
      <div className="flex flex-col">
        <p className="md:text-[42px] text-[32px] text-center font-manrope font-bold md:leading-[49px] leading-[40px] p-4">
          <span className="text-textdark">Want to see more </span>
          <br />
          <span className="text-primary">local recommendations?</span>
        </p>

        {isProfile === "false" && (
          <button className="w-[285px] mx-auto  md:flex hidden items-center justify-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-secondary text-white lg:text-[16px] text-sm">
            <span>Share your recommendation</span>
            <span>
              <IoMdAdd size={20} />
            </span>
          </button>
        )}
      </div>

      <div className="mt-20 relative w-full overflow-hidden">
        
        <Card />

        {/* Blur overlay */}
        {isProfile === "false" && (
          <div className="absolute inset-0 backdrop-blur-md bg-gray-700/1 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default LocalRecommendation;
