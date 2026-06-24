import { useEffect, useState } from "react";
import Loader from "./Loader";
import StepperHeader from "./StepperHeader";
import StepEmailOtp from "./Steps/StepEmailOtp";
import StepAbout from "./Steps/StepAbout";
import StepRecommendation from "./Steps/StepRecommendation";
import StepSuccess from "./Steps/StepSuccess";
import { RxCross2 } from "react-icons/rx";
import { IoArrowBackSharp } from "react-icons/io5";

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
  const [headerTitle, setHeaderTitle] = useState("Recommend A Local Legend");
  const [stepOtp, setStepOtp] = useState(false);
  const [stepAbout, setStepAbout] = useState(false);
  const [hideBackButton, setHideBackButton] = useState(false);
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
    setStepAbout(false);
    setHeaderTitle("Who Are You Recommending?");
  };
  const nextStepThree = () => {
    setStep((s) => s + 2);
    setHeaderTitle("Who Are You Recommending?");
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
      setHeaderTitle("About You");
      setStepOtp(false);
      setStep(2);
    }, 1500);
  };

  const handleSubmit = async () => {
    setLoading(true);
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


  const resetModal = () => {
  setStep(1);
  setLoading(false);
  setHeaderTitle("Recommend A Local Legend");
  setStepOtp(false);
  setStepAbout(false);
   setHideBackButton(false);
  setFormData({
    firstName: "",
    businessName: "",
    theirNumber: "",
    service: "",
    location: "",
    recommendationReason: [],
    comment: "",
  });
};

useEffect(() => {
  if (isOpen) {
    setStep(1);
      setHideBackButton(false);
    setLoading(false);
    setHeaderTitle("Recommend A Local Legend");
    setStepOtp(false);
    setStepAbout(false);
  }
}, [isOpen]);


const getHeaderTitle = (step: number) => {
  switch (step) {
    case 1:
      return "Recommend A Local Legend";
    case 2:
      return "About You";
    case 3:
      return "Who Are You Recommending?";
    default:
      return "Why Do You Recommend Them (Choose Up To 3)?";
  }
};

useEffect(() => {
  setHeaderTitle(getHeaderTitle(step));
}, [step]);


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
            <div className="flex items-center justify-between gap-4">
{step === 3 && !hideBackButton && (
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center justify-center cursor-pointer  p-[3px] rounded-full"
                >
                  <IoArrowBackSharp size={20} className="text-black" />
                </button>
              )}

  <div>
             {step <= 3 && (
  <p className="text-[1rem] font-medium font-manrope text-secondary">
    Step {step} of 3
  </p>
)}
              
              </div>

              <button
                 onClick={() => {
    resetModal();
    onClose();
  }}
                className="cursor-pointer sm:flex hidden bg-secondary-close-btn-bg sm:p-[6px] p-[3px] rounded-full "
              >
                <RxCross2
                  size={22}
                  className="sm:w-[20] h-[20] w-[18] h-[18]"
                />
              </button>
            </div>
              <h4
                  className={`font-manrope  text-center mt-3  font-bold   whitespace-break-spaces  md:text-[24px] sm:text-[20px] text-[18px]`}
                >
                  {headerTitle}
                </h4>
            <div className="md:py-[32px] sm:py-[28px] py-[22px]">
              <div className="bg-border h-[1px]" />
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
            nextStepThree={() => {
              setHideBackButton(true); 
              nextStepThree();
            }}
              onClose={onClose}
              setHeaderTitle={setHeaderTitle}
              setStepOtp={setStepOtp}
            />
          )}

          {step === 2 && (
            <StepAbout
              // data={formData}
              // setData={setFormData}
              setStep={setStep}
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

          {step === 4 && <StepSuccess resetAll={resetAll} onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}
