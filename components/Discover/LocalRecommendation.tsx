"use client";
import Card from "../Card";
import ButtonModal from "../ButtomModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Across from "../Across";

const LocalRecommendation = () => {
  const cardLength = useSelector(
    (state: RootState) => state.cardLength.isShowFullList,
  );
  return (
    <>
      {!cardLength && (
        <>
          <div className="max-w-[1396px] mx-auto">
            <div className="flex flex-col py-10 items-center justify-center">
              <p className="md:text-[42px] text-[32px] text-center font-manrope font-bold md:leading-[49px] leading-[40px] p-4">
                <span className="text-textdark">Want to see more </span>
                <br />
                <span className="text-primary">local recommendations?</span>
              </p>

              <ButtonModal bg={"text-secondary"} />
            </div>

            <div className="mt-20 relative w-full overflow-hidden">
              <Card />
              <div className="absolute inset-0 z-50 backdrop-blur-md bg-white/0"></div>
            </div>
          </div>
          <div className=" mt-18">
            <Across />
          </div>
        </>
      )}
    </>
  );
};

export default LocalRecommendation;
