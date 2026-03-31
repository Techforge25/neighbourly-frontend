interface StepperHeaderProps {
  step: number;
  steps?: string[];
}

export default function StepperHeader({
  step,
  steps = ["Email", "AboutYou", "Recommendation"],
}: StepperHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = step >= stepNum;
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center justify-center relative">
              <div
                className={`md:w-[40px] w-[25px] md:h-[40px] mx-auto h-[25px] rounded-full flex items-center justify-center text-[14px]  font-medium transition-colors ${
                  isActive
                    ? "bg-[#8FA58A] text-white"
                    : "border-[1px] border-para text-para font-bold font-poppins md:text-[16px] text-[14px]"
                }`}
              >
                {stepNum}
              </div>
            </div>
              <p className={`md:text-[14px] text-[11px] text-textdark text-wrap md:mt-14 text-start mt-10 absolute ${label =="Recommendation"&&("-ml-6")} `}>
                {label}
              </p>
            {!isLast && (
              <div
                className={`md:w-30 w-20 p-[1px] mx-auto transition-colors ${
                  step > stepNum ? "bg-green" : "bg-modal-line"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
