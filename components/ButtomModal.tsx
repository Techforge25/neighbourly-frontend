import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import StepperModal from "./StepperModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/store/modalSlice";

export default function ButtonModal({ bg }: any) {
   const dispatch = useDispatch();
  const openModalState = useSelector((state) => state.modal.openModal);
  useEffect(() => {
    if (openModalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModalState]);

  return (
    <>
      {/* 🔘 Your Button */}
      <div>
        <button
          onClick={() => dispatch(openModal())}
          className={`flex  items-center gap-2 lg:px-6 px-3 lg:py-4 py-3 rounded-full cursor-pointer ${bg ? "bg-secondary" : "bg-share-modal-icon hover:bg-share-modal-icon/80"}   text-white lg:text-[18px] ms:text-[16px] text-[14px] font-outfit text-sm`}
        >
          <span>Share your recommendation</span>
          <IoMdAdd size={20} />
        </button>
      </div>

      {/* 🧩 Modal */}
      <div className="z-1000">
        <StepperModal isOpen={openModalState} onClose={() => dispatch(closeModal())} />
      </div>
    </>
  );
}
