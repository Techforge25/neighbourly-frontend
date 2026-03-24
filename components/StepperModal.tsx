import { useState } from "react";
import Loader from "./Loader";
import StepperHeader from "./StepperHeader";
import StepEmailOtp from "./Steps/StepEmailOtp";
import StepAbout from "./Steps/StepAbout";
import StepRecommendation from "./Steps/StepRecommendation";
import StepSuccess from "./Steps/StepSuccess";

export default function StepperModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", mobile: "" });

  const nextStep = () => setStep((s) => s + 1);
  const nextStepThree = () => setStep((s) => s + 2);
  const prevStep = () => setStep((s) => s - 1);

  const resetAll = () => {
    setFormData({ firstName: "", mobile: "" });
    setStep(1);
  };

  const handleOtpVerified = () => {
    setLoading(true);

    setTimeout(() => {
      resetAll(); // clear all fields
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await fakeSubmitAPI();
    setLoading(false);
    setStep(4);
  };

  if (!isOpen) return null;

  console.log(step, "stepstepstepstepstepstep");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose} // 👈 outside click close
    >
      {/* Modal Box */}
      <div
        className={` ${step === 4 ? 'bg-[#F1EAE5]' : 'bg-white'} w-full max-w-2xl rounded-2xl p-6 relative shadow-xl`}
        onClick={(e) => e.stopPropagation()} // 👈 prevent close inside click
      >
        {/* ❌ Close Button */}

        {step !== 4 && (
          <>
            <div className="flex items-center justify-between py-3">
              <h4 className="text-[24px] leading-[30px] font-semibold text-[#12141D]">
                Recommend a Business
              </h4>

              <button onClick={onClose} className="">
                ✕
              </button>
            </div>
            <div className="bg-[#E4E4E4] h-[1px]" />
          </>
        )}

        {/* 🔄 Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 rounded-2xl">
            <Loader />
          </div>
        )}

        {/* Stepper Header */}
        {step !== 4 && <StepperHeader step={step} />}

        {/* Steps */}
        <div className="mt-6">
          {step === 1 && <StepEmailOtp onVerified={handleOtpVerified} nextStepThree={nextStepThree} />}

          {step === 2 && (
            <StepAbout
              data={formData}
              setData={setFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}

          {step === 3 && (
            <StepRecommendation
              data={formData}
              setData={setFormData}
              onBack={prevStep}
              onSubmit={handleSubmit}
            />
          )}

          {step === 4 && <StepSuccess onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}

const fakeSubmitAPI = () => new Promise((res) => setTimeout(res, 1500));
