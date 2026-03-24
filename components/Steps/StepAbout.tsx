import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface StepAboutData {
  firstName: string;
  mobile: string;
  street: string;
  suburb: string;
}

export default function StepAbout({
  data,
  setData,
  onNext,
  onBack,
}: {
  data: StepAboutData;
  setData: React.Dispatch<React.SetStateAction<StepAboutData>>;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="w-full  rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-[12px]">
          <Label className="text-[14px] leading-[20px] font-manrope font-medium ">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="e.g. olivia"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            className="border-[1px] border-[#E4E4E4] rounded-[12px] px-[12px] py-[13px] text-[16px] font-para font-manrope   "
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <Label className="text-[14px] leading-[20px] font-manrope font-medium ">
            You Mobile Number <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="e.g. +12385868664"
            value={data.mobile}
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
            className="border-[1px] border-[#E4E4E4] rounded-[12px] px-[12px] py-[13px] text-[16px] font-para font-manrope   "
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <Label className="text-[14px] leading-[20px] font-manrope font-medium ">
            The Street You Live On <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="e.g. Smith St"
            value={data.street}
            onChange={(e) => setData({ ...data, street: e.target.value })}
            className="border-[1px] border-[#E4E4E4] rounded-[12px] px-[12px] py-[13px] text-[16px] font-para font-manrope   "
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <Label className="text-[14px] leading-[20px] font-manrope font-medium ">
            Your Suburb <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="e.g. Collingwood"
            value={data.suburb}
            onChange={(e) => setData({ ...data, suburb: e.target.value })}
            className="border-[1px] border-[#E4E4E4] rounded-[12px] px-[12px] py-[13px] text-[16px] font-para font-manrope   "
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2 mt-4">
        <button  className="rounded-full border-[1px] border-[#E4E4E4] py-[16px] px-[27px] flex items-center justify-center text-[16px] font-poppins " onClick={onBack}>
          <ArrowLeft size={24} />
          Back
        </button>
        <button  className="rounded-full py-[16px] px-[27px] flex items-center justify-center gap-2 bg-primary text-[16px] font-poppins text-white" onClick={onNext} >
          Submit Recommendation
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
