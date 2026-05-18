"use client";

import { useCallback, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/store/modalSlice";
import StepperModal from "./StepperModal";

export default function ButtonModal({ bg }: { bg?: string }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: { modal: { openModal: boolean } }) => state.modal.openModal,
  );

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleOpen = useCallback(() => dispatch(openModal()), [dispatch]);
  const handleClose = useCallback(() => dispatch(closeModal()), [dispatch]);

  return (
    <>
      <button
        onClick={handleOpen}
        className={`flex items-center gap-2 lg:px-6 px-3 lg:py-4 py-3 rounded-full cursor-pointer text-white lg:text-lg sm:text-base text-sm font-outfit transition-colors
          ${bg ? "bg-secondary" : "bg-share-modal-icon hover:bg-share-modal-icon/80"}`}
      >
        <span>Share your recommendation</span>
        <IoMdAdd size={20} />
      </button>

      <div className="z-[1000]">
        <StepperModal isOpen={isModalOpen} onClose={handleClose} />
      </div>
    </>
  );
}
