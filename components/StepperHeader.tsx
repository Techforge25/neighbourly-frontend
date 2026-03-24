interface StepperHeaderProps {
  step: number;
  steps?: string[];
}

export default function StepperHeader({ step, steps = ["Email", "About You", "Recommendation"] }: StepperHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = step >= stepNum;
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-[14px]  font-medium transition-colors ${
                  isActive
                    ? "bg-[#8FA58A] text-white"
                    : "border-[1px] border-[#D5E8FC] text-[#697586] font-bold font-poppins text-[16px] "
                }`}
              >
                {stepNum}
              </div>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
            {!isLast && (
              <div className={`w-30 h-0.5 mx-2 mb-5 transition-colors ${
                step > stepNum ? "bg-[#8FA58A]" : "bg-[#D5E8FC]"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
