import Link from "next/link";
import { MdOutlineCall, MdOutlineChat } from "react-icons/md";
import { motion } from "framer-motion";
import { colorFunctions, getServiceColor } from "@/utils/dumydata";
import { RecommendationItem } from "@/types";

interface Props {
  item: RecommendationItem;
  isActive: boolean;
  onToggle: () => void;
}

const RecommendationCard = ({ item, isActive, onToggle }: Props) => {
  const color = getServiceColor(item.serviceType);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col justify-between hover:border border cursor-pointer border-modal-line hover:border-secondary transition duration-300 ease-linear p-4 shadow-lg rounded-[24px] ${
        isActive ? "h-auto" : "sm:h-[580px]"
      } sm:w-[410px] w-[330px] bg-white`}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Header */}
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[6px]">
            <p className="text-center md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold text-textdark line-clamp-1">
              {item.personName}
            </p>
            <p className="text-para font-poppins sm:text-[16px] text-[14px] text-center line-clamp-2">
              at {item.businessName}
            </p>
            <p
              className={`${colorFunctions(item.serviceType)} sm:text-[16px] text-[14px] font-manrope font-bold text-center`}
            >
              {item.serviceType}
            </p>
          </div>

          <div className="flex flex-col gap-6 border border-modal-line rounded-[12px]">
            {/* Count box */}
            <div className="w-full flex flex-col">
              <div
                className={`border text-white ${color} border-modal-line p-[12px] rounded-t-[12px] flex flex-col gap-[10px]`}
              >
                <div className="flex items-center gap-2">
                  <span className="md:text-[42px] sm:text-[32px] text-[24px] font-manrope font-extrabold">
                    {item.recommendationCount}
                  </span>
                  <span className="font-poppins md:text-[22px] sm:text-[18px] text-[16px]">
                    Local recommendations
                  </span>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="flex flex-col gap-1 px-[12px]">
              <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                Also trusted in
              </p>
              <div className="flex flex-wrap gap-1 line-clamp-2">
                {item.addresses
                  ?.slice(0, isActive ? undefined : 5)
                  ?.map((addr: string, i: number) => (
                    <p key={i} className="font-poppins md:text-[16px] text-[14px] text-para">
                      {addr} -
                    </p>
                  ))}
                {item.addresses?.length > 5 && (
                  <button className="cursor-pointer" onClick={onToggle}>
                    {isActive ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>

            {/* Reasons */}
            <div className="flex flex-col gap-1 px-[12px] pb-3">
              <p className="font-manrope font-semibold md:text-[18px] sm:text-[16px] text-[14px] text-tabText">
                Locals mention
              </p>
              <div className="flex flex-wrap line-clamp-2">
                {[...new Set(item.reasonsOfRecommendation.flat())]
                  .slice(0, 3)
                  .map((reason, i) => (
                    <p key={i} className="font-poppins md:text-[16px] text-[14px] text-para">
                      {reason} -
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-2 w-full">
          <Link href={`tel:${item.businessContact}`} className="w-full">
            <button
              className={`w-full flex items-center cursor-pointer justify-center gap-2 text-white sm:text-[18px] text-[14px] font-medium font-outfit px-4 py-3 rounded-full ${color}`}
            >
              Call <MdOutlineCall size={20} />
            </button>
          </Link>
          <Link href={`sms:${item.businessContact}`} target="_blank" className="w-full">
            <button className="w-full cursor-pointer flex items-center justify-center gap-2 text-black bg-white sm:text-[18px] text-[14px] border border-modal-line font-medium font-outfit px-4 py-3 rounded-full">
              Text <MdOutlineChat size={20} />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;