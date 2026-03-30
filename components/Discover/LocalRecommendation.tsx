"use client";
import React, { useLayoutEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "../Card";
import ButtonModal from "../ButtomModal";

const LocalRecommendation = () => {
  const [isProfile, setIsProfile] = useState<any>(false);

  useLayoutEffect(() => {
    const isProfileCompleted = localStorage.getItem("isProfileCompleted");
    setIsProfile(isProfileCompleted);
  }, []);

  return (
    <div className="max-w-[1396px] mx-auto my-20">
      {isProfile !== "true" && (
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="md:text-[42px] text-[32px] text-center font-manrope font-bold md:leading-[49px] leading-[40px] p-4">
              <span className="text-textdark">Want to see more </span>
              <br />
              <span className="text-primary">local recommendations?</span>
            </p>

            
             <ButtonModal bg={'text-secondary'}  />

          </div>

          <div className="mt-20 relative w-full overflow-hidden">
            <Card />
            <div className="absolute inset-0 backdrop-blur-md bg-gray-700/1 pointer-events-none"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocalRecommendation;
