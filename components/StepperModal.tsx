import { useEffect, useState } from "react";
import Loader from "./Loader";
import StepperHeader from "./StepperHeader";
import StepEmailOtp from "./Steps/StepEmailOtp";
import StepAbout from "./Steps/StepAbout";
import StepRecommendation from "./Steps/StepRecommendation";
import StepSuccess from "./Steps/StepSuccess";
import { RxCross2 } from "react-icons/rx";

interface RecommendationData {
  firstName: string;
  businessName: string;
  theirNumber: string;
  service: string;
  location: string;
  recommendationReason: string[];
  comment: string;
}

export default function StepperModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Recommend a local legend");
  const [stepOtp, setStepOtp] = useState(false);
  const [stepAbout, setStepAbout] = useState(false);
  const [formData, setFormData] = useState<RecommendationData>({
    firstName: "",
    businessName: "",
    theirNumber: "",
    service: "",
    location: "",
    recommendationReason: [],
    comment: "",
  });

  const nextStep = () => {
    setStep((s) => s + 1);
    setStepAbout(false)
    setHeaderTitle("Who are you recommending?");
  };
  const nextStepThree = () => {
    setStep((s) => s + 2);
    setHeaderTitle("Who are you recommending?");
  };
  const nextStepOne = () => setStep((s) => s - 2);
  const prevStep = () => setStep((s) => s - 1);

  const resetAll = () => {
    setFormData({
      firstName: "",
      businessName: "",
      theirNumber: "",
      service: "",
      location: "",
      recommendationReason: [],
      comment: "",
    });
    setStep(1);
  };

  const handleOtpVerified = () => {
    setLoading(true);
    setStepAbout(true);
    setTimeout(() => {
      resetAll();
      setLoading(false);
      setHeaderTitle("About you");
      setStepOtp(false);
      setStep(2);
    }, 1500);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await fakeSubmitAPI();
    setLoading(false);
    setStep(4);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 sm:px-4 h-[100dvh]"
      onClick={onClose} // 👈 outside click close
    >
      {/* Modal Box */}
      <div
        className={`bg-white overflow-hidden overflow-y-auto  sm:h-auto sm:p-auto  pb-20 sm:max-h-screen h-[100dvh] w-full sm:max-w-[530px] sm:rounded-2xl px-[32px] py-[32px] relative shadow-xl`}
        onClick={(e) => e.stopPropagation()} // 👈 prevent close inside click
      >
        {/* ❌ Close Button */}

        {step !== 4 && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[1rem] font-medium font-manrope text-secondary">Step {stepOtp ? "2" : stepAbout ? "3" : step === 3 ?"4" :step} of 4</p>
                <h4 className={`font-manrope ${headerTitle == "Who are you recommending?"?"sm:w-[269px] leading-relaxed":""}  font-semibold md:text-[24px] sm:text-[20px] text-[18px]`}>
                  {headerTitle}
                </h4>
              </div>

              <button
                onClick={onClose}
                className="cursor-pointer sm:flex hidden bg-secondary-close-btn-bg sm:p-[6px] p-[3px] rounded-full "
              >
                <RxCross2
                  size={22}
                  className="sm:w-[20] h-[20] w-[18] h-[18]"
                />
              </button>
            </div>
            <div className="md:py-[32px] sm:py-[28px] py-[22px]">
              <div className="bg-[#E4E4E4] h-[1px]" />
            </div>
          </>
        )}

        {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 rounded-2xl">
            <Loader />
          </div>
        )}

        {/* Stepper Header */}
        {/* {step !== 4 && <StepperHeader step={step} />} */}

        {/* Steps */}
        <div className="">
          {step === 1 && (
            <StepEmailOtp
              onVerified={handleOtpVerified}
              nextStepThree={nextStepThree}
              onClose={onClose}
              setHeaderTitle={setHeaderTitle}
              setStepOtp={setStepOtp}
            />
          )}

          {step === 2 && (
            <StepAbout
              data={formData}
              setData={setFormData}
              onNext={nextStep}
              onBack={prevStep}
              setHeaderTitle={setHeaderTitle}
            />
          )}

          {step === 3 && (
            <StepRecommendation
              data={formData}
              setData={setFormData}
              onBack={prevStep}
              onSubmit={handleSubmit}
              nextStepOne={nextStepOne}
              setHeaderTitle={setHeaderTitle}
            />
          )}

          {step === 4 && <StepSuccess onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}

const fakeSubmitAPI = () => new Promise((res) => setTimeout(res, 1500));
