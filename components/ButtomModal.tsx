import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import StepperModal from "./StepperModal";

export default function ButtonModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* 🔘 Your Button */}
      <div>
        <button
          onClick={() => setOpenModal(true)}
          className="flex  items-center gap-2 lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-[#F3B39D] text-white lg:text-[16px] font-outfit text-sm"
        >
          <span>Share your recommendation</span>
          <IoMdAdd size={20} />
        </button>
      </div>

      {/* 🧩 Modal */}
      <StepperModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
