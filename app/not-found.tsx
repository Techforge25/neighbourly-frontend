"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function NotFound() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="md:text-[82px] text-[42px] font-bold font-manrope">404</h1>
      <p className="mt-4 text-lg font-semibold font-poppins text-[24px] ">Page Not Found</p>
      <button onClick={()=>{router.push('/')}} className="flex items-center gap-4 border mt-4 px-4 py-2 rounded-[24px] border-modal-line hover:border-primary cursor-pointer ">
        <span><IoMdArrowRoundBack size={24} className="text-tabText hover:text-primary " /></span>
        <span className="font-manrope text-[18px] font-medium text-tabText hover:text-share-modal-icon " >Back To Home</span>
      </button>
    </div>
  );
}