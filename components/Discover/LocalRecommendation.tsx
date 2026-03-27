"use client";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "../Card";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const LocalRecommendation = () => {
  const { user, isAuthenticated, loading } = useSelector(
    (state: any) => state.auth,
  );

  return (
    <div className="max-w-[1296px] mx-auto my-20">
      <div className="flex flex-col">
        <p className="md:text-[42px] text-[32px] text-center font-manrope font-bold md:leading-[49px] leading-[40px] p-4">
          <span className="text-textdark">Want to see more </span>
          <br />
          <span className="text-primary">local recommendations?</span>
        </p>

        {!isAuthenticated && (
          <button className="w-[285px] mx-auto  md:flex hidden items-center justify-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-secondary text-white lg:text-[16px] text-sm">
            <span>Share your recommendation</span>
            <span>
              <IoMdAdd size={20} />
            </span>
          </button>
        )}
      </div>

      <div className="mt-20 relative w-full overflow-hidden">
        {loading ? <Loader /> : <Card />}

        {/* Blur overlay */}
        {!isAuthenticated && (
          <div className="absolute inset-0 backdrop-blur-md bg-gray-700/1 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default LocalRecommendation;
