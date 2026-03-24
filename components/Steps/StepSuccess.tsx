import { Heart, Share2, X } from "lucide-react";

interface StepSuccessProps {
  onClose: () => void;
  onViewRecommendations?: () => void;
  onSearchAnother?: () => void;
}

export default function StepSuccess({
  onClose,
  onViewRecommendations,
  onSearchAnother,
}: StepSuccessProps) {
  return (
    <div className="">
      {/* Share button */}
      <div className="flex items-center justify-between px-4">
        <button className="bg-white px-4 py-4 rounded-full" aria-label="Share">
          <Share2 className="w-5 h-5" />
        </button>

        {/* Close button */}
        <button onClick={onClose} className="" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-[20px] ">
        {/* Heart icon */}
        <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <Heart className="w-7 h-7 text-primary " />
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-bold leading-[42px] font-manrope text-center text-[#0F172A] ">
          Thanks — Your Recommendation
          <br />
          Has Been Received!
        </h2>

        {/* Subtext */}
        <p className="text-[18px] font-manrope font-medium leading-[28px]  text-center w-[342px] mx-auto text-[#202939]">
          Your Contribution Helps Build A Stronger Community.
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onViewRecommendations}
            className="flex-1 py-3.5 px-6 rounded-full bg-primary text-white text-[16px] leading-[16px] "
          >
            View Recommendations
          </button>
          <button
            onClick={onSearchAnother}
            className="flex-1 py-3.5 px-6 rounded-full bg-secondary text-white text-[16px] leading-[16px] "
          >
            Search Another Suburb
          </button>
        </div>
      </div>
    </div>
  );
}
