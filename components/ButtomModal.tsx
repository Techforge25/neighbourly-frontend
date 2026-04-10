import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import StepperModal from "./StepperModal";

export default function ButtonModal({ bg }: any) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <>
      {/* 🔘 Your Button */}
      <div>
        <button
          onClick={() => setOpenModal(true)}
          className={`flex  items-center gap-2 lg:px-6 px-3 lg:py-4 py-3 rounded-full cursor-pointer ${bg ? "bg-secondary" : "bg-primary hover:bg-share-modal-icon/60"}   text-white lg:text-[18px] text-[16px] font-outfit text-sm`}
        >
          <span>Share your recommendation</span>
          <IoMdAdd size={20} />
        </button>
      </div>

      {/* 🧩 Modal */}
      <div className="z-1000">
        <StepperModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
}
