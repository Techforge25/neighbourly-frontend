import Link from "next/link";
import {
  getMataData,
  termsIntro,
  termsMetadata,
  termsSections,
} from "@/utils/dumydata";

export const metadata = getMataData("Suburb says - Terms of Use");

const page = () => {
  return (
    <main className="bg-white">
      <div className="w-[90%] mx-auto md:py-20">
        {/* Page heading */}
        <div className="flex flex-col md:gap-[10px] gap-[6px]">
          <h1 className="font-bold font-manrope md:text-[42px] text-[23px] md:leading-[49px] leading-[30px] max-w-[515px]">
            Suburb Says <span className="text-primary">Terms of Use</span> and{" "}
            <span className="text-primary">Privacy Notice</span>
          </h1>
          <p className="md:text-[16px] text-[14px] md:leading-[28px] leading-[20px] font-medium font-poppins text-para md:max-w-[1274]">
            We collect your details to verify submissions, prevent misuse, and
            keep Suburb Says trustworthy. We may contact you about your
            submission or share relevant updates. Your information is never
            sold.
          </p>
        </div>

        {/* Content card */}
        <div className="sm:p-[32px] p-[22px] bg-light_beige md:my-[42px] my-[28px] border-[1px] border-modal-line rounded-[12px]">
          {/* Effective date & contact */}
          <h4 className="text-para font-medium font-poppins md:text-[16px] text-[14px]">
            Effective date: {termsMetadata.effectiveDate}
          </h4>
          <p className="text-[16px] font-poppins md:leading-[28px] leading-[20px]">
            <span className="text-para font-semibold">Contact:</span>{" "}
            <span className="text-verified font-semibold">
              <Link
                href={termsMetadata.contact.href}
                className="visited:underline"
              >
                {termsMetadata.contact.label}
              </Link>
            </span>
          </p>

          {/* Intro block */}
          <div className="max-w-[1047px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
            <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
              {termsIntro.heading}
            </h3>
            <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para">
              {termsIntro.description}
            </p>
          </div>

          <div className="max-w-[1047px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
            <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
              {termsIntro.subHeading}
            </h3>
          </div>

          {/* Dynamic sections */}
          {termsSections.map((section) => (
            <div
              key={section.id}
              className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]"
            >
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                {section.title}
              </h3>

              {section.paragraphs?.map((para, i) => (
                <p
                  key={i}
                  className="font-poppins font-medium md:text-[16px] text-[14px] text-para"
                >
                  {para}
                </p>
              ))}

              {section.listIntro && (
                <div className="md:mt-4 mt-2">
                  <span className="md:text-[16px] text-[14px] font-poppins font-medium">
                    {section.listIntro}
                  </span>
                  <ul className="list-disc font-poppins font-medium md:text-[16px] text-[14px] text-para md:px-8 px-5">
                    {section.listItems?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.afterListParagraphs?.map((para, i) => (
                <p
                  key={i}
                  className="font-poppins font-medium md:text-[16px] text-[14px] text-para"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
