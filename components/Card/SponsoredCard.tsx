import { getTheme } from "@/utils/dumydata";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCall } from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";

interface SponsoredCardProps {
  personName: string;
  businessName: string;
  serviceType: string;
  businessContact: string;
  profileImage?: string;
  isNotDisabled: boolean;
}

const SponsoredCard = ({
  personName,
  businessName,
  serviceType,
  businessContact,
  profileImage,
  isNotDisabled,
}: SponsoredCardProps) => {
  const theme = getTheme(serviceType);

  return (
    <div
      className={`relative flex flex-col items-center sm:w-[410px] w-[310px] rounded-[20px] border ${theme.cardBg} shadow-md overflow-hidden`}
    >
      {/* ── Pink tinted top arch (background layer) ── */}
      <div
        className={`absolute top-0 left-0 w-full h-[200px] ${theme.banner} opacity-20 pointer-events-none`}
      />
      <div
        className="absolute left-0 w-full h-[120px] bg-white pointer-events-none"
        style={{
          top: "100px",
          clipPath: "ellipse(70% 100% at 50% 100%)",
        }}
      />

      <div className="relative w-full flex justify-center pt-5 pb-1 z-10">
        <div
          className={`${theme.banner} flex items-center gap-2 py-2.5 px-8`}
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 96% 50%, 100% 100%, 0% 100%, 4% 50%)",
          }}
        >
          <Image
            src={"/images/starShine.svg"}
            width={28}
            height={28}
            alt="starIcon"
          />
          <span
            className={`text-[16px] font-manrope font-semibold ${theme.bannerText}`}
          >
            Trusted suburb sponsor
          </span>
        </div>
      </div>

      {/* ── Profile image ── */}
      <div className="relative w-full flex flex-col items-center pt-14 pb-2 z-10">
        <div
          className={`relative w-[100px] h-[100px] rounded-full ring-[3px] ring-[#D6E2EC] ring-offset-2 ring-offset-white overflow-hidden bg-gray-100`}
        >
          {profileImage ? (
            <Image
              src={profileImage}
              alt={personName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-2xl font-bold text-gray-500 font-manrope">
                {personName.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Info ─────────────────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center gap-1 px-4 mt-3 w-full z-10">
        <h3 className="font-manrope font-extrabold text-textdark text-[40px] sm:text-[42px] text-center leading-tight">
          {personName}
        </h3>

        <p className="font-poppins text-[14px] sm:text-[16px] text-para text-center">
          {businessName}
        </p>

        <p
          className={`font-manrope font-bold ${(serviceType === "Conveyancer" || serviceType === "Real Estate Agent") && "mt-22"} text-[14px] sm:text-[16px] text-center mt-1 ${theme.serviceText}`}
        >
          {serviceType}
        </p>
      </div>

      {/* ── Call button ───────────────────────────────────────────────────── */}
      <div className="relative w-full px-4 py-5 mt-4 z-10">
        {isNotDisabled ? (
          <Link href={`tel:${businessContact}`} className="w-full">
            <button
              className={`w-full flex items-center justify-center gap-3 text-white font-outfit font-medium text-[18px] py-4 rounded-full transition-all duration-200 cursor-pointer ${theme.button}`}
            >
              Call
              <MdOutlineCall size={22} />
            </button>
          </Link>
        ) : (
          <div className={`${theme.serviceText} text-center text-[1.5rem] mt `}>
            Sponsorship available
          </div>
        )}
      </div>
    </div>
  );
};

export default SponsoredCard;
