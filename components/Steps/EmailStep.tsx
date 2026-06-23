import { setPage } from "@/store/paginationSlice";
import { setTriggerRecommendations } from "@/store/shareSlice";
import { EmailStepProps } from "@/types";
import { IoArrowForward } from "react-icons/io5";
import { useDispatch } from "react-redux";

const EmailStep = ({
  userData,
  formik,
  pathname,
  onClose,
  router,
  nextStepThree,
  loading,
}: EmailStepProps) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="md:pb-[32px] sm:pb-[28px] pb-[22px]">
        <p className="font-manrope font-medium text-[1rem] text-secondary">
          Start with your email so we can verify it’s really you
        </p>
      </div>

      <div className="flex flex-col space-y-[32px]">
        <input
          name="email"
          disabled={!!userData?.isProfileCompleted}
          placeholder="olivia@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-[1px] px-[12px] outline-none disabled:opacity-50 disabled:cursor-not-allowed py-[13px] border-border rounded-[62px] text-black text-[16px]"
        />
        {/* ✅ Error message */}
      </div>
      {formik.touched.email && formik.errors.email && (
        <span className="text-red-500 text-sm">{formik.errors.email}</span>
      )}

      {!userData?.isProfileCompleted && (
        <button
          disabled={!formik.values.email}
          type="submit"
          className={`flex items-center disabled:opacity-50 disabled:cursor-not-allowed justify-center gap-[8px] w-full bg-share-modal-icon mt-4 md:py-[17px] sm:py-[14px] py-[12px] rounded-full cursor-pointer`}
        >
          {!loading ? (
            <>
              <span className="text-white text-[16px] font-poppins ">
                Continue
              </span>
              <IoArrowForward size={24} className="size-[20px] text-white" />
            </>
          ) : (
            <p className="text-white text-[16px] font-poppins ">Loading...</p>
          )}
        </button>
      )}

      {/* Is Profile Is Completed  */}
      {userData?.isProfileCompleted && (
        <>
          <div className="md:py-[32px] sm:py-[28px] py-[18px]">
            <p className="text-para px-[18px] py-[18px] bg-profile-bg-txt   font-poppins md:text-[16px] text-[12px] leading-[23px]">
              You’ve already shared someone you trust. Now discover a legend or
              share another recommendation
            </p>
          </div>

          <div className="flex items-center flex-col sm:gap-[12px] gap-[8px] flex-col-reverse justify-center">
            {/* Left Button */}
            <button
              onClick={() => {
                if (pathname === "/discover") {
                  dispatch(setTriggerRecommendations(true));
                  setPage(9);
                  onClose();
                  window.location.reload();
                } else {
                  (router.push("/discover"), onClose());
                }
              }}
              type="button"
              className="bg-share-modal-icon cursor-pointer w-full md:h-[56px] py-3 md:text-[16px] text-[11px] font-medium rounded-full text-white flex items-center justify-center"
            >
              View Full Recommendations
            </button>

            {/* Right Button */}
            <button
              onClick={nextStepThree}
              type="button"
              className="bg-secondary cursor-pointer w-full md:h-[56px] py-3 md:text-[16px] text-[12px] font-medium rounded-full text-white flex items-center justify-center gap-3"
            >
              Share Another Recommendation
              <IoArrowForward size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailStep;
