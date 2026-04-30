import Link from "next/link";
import { Metadata } from "next";

 export const metadata: Metadata = {
  title: "subrub says - Terms of Use",
  description:
    "Read the Terms of Use for subrub says to understand the rules, guidelines, and conditions for using our platform and services.",

  alternates: {
    canonical: "https://www.beneighbourly.com.au/terms-of-use",
  },

  keywords: [
    "terms of use",
    "terms and conditions",
    "user agreement",
    "website terms",
    "subrub says terms",
    "platform rules",
    "legal terms",
    "service conditions",
  ],

  openGraph: {
    title: "subrub says - Terms of Use",
    description:
      "Review the terms and conditions for using subrub says and understand your rights and responsibilities.",
    url: "https://www.beneighbourly.com.au/terms-of-use",
    siteName: "subrub says",
    type: "website",
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/logo.png",
        width: 1200,
        height: 630,
        alt: "subrub says Suburb Search",
      },
    ],
  },
};
const page = () => {
  return (
    <main className="bg-white">
      <div className="w-[90%] mx-auto md:py-20  ">
        <div className="flex flex-col md:gap-[10px] gap-[6px]">
          <h1 className="font-bold font-manrope md:text-[42px] text-[23px] md:leading-[49px] leading-[30px] max-w-[515px]">
            Subrub says <span className="text-primary">Terms of Use</span> and{" "}
            <span className="text-primary">Privacy Notice</span>
          </h1>
          <p className="md:text-[16px] text-[14px] md:leading-[28px] leading-[20px] font-medium font-poppins text-para md:max-w-[1274]">
            We collect your details to verify submissions, prevent misuse, and
            keep subrub says trustworthy. We may contact you about your
            submission or share relevant updates. Your information is never
            sold.
          </p>
        </div>

        <div className="sm:p-[32px] p-[22px] bg-[#FFF1ED] md:my-[42px] md:my-[32px] my-[28px] border-[1px] border-modal-line rounded-[12px] ">
          <div>
            <h4 className="text-para font-medium font-poppins md:text-[16px] text-[14px]">
              Effective date: 3 April 2026
            </h4>
            <p className="text-[16px] font-poppins md:leading-[28px] leading-[20px] ">
              <span className="text-para font-semibold">Contact:</span>{" "}
              <span className="text-verified font-semibold">
                <Link
                  href={`mailto:andrew@suburbsays.com.au`}
                  className="visited:underline"
                >
                  andrew@suburbsays.com.au
                </Link>
              </span>
            </p>

            <div className="max-w-[1047px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                Welcome to Subrub says.
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Subrub says is a free, community-led service that celebrates and
                publishes the local businesses people nearby know and trust. Our
                role is to help surface and share community trust. We do not
                make recommendations ourselves.
              </p>
            </div>

            <div className="max-w-[1047px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                By using this website or submitting information to it, you agree
                to the terms below.
              </h3>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                1. Using Subrub says
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Please use Subrub says in a respectful, honest and lawful way.
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                You must not misuse the website, interfere with how it works,
                submit false or misleading information, impersonate another
                person, or attempt to manipulate what appears on the site.
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We may restrict access, remove content, or decline submissions
                where needed to protect the integrity, safety or proper
                operation of the service.
              </p>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                2. Community submissions
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Subrub says is built on genuine input from local residents about
                the businesses and people they trust.
              </p>
              <div className="md:mt-4 mt-2">
                <span className="md:text-[16px] text-[14px] font-poppins font-medium">
                  By submitting information to Subrub says, you confirm that:
                </span>

                <ul className="list-disc font-poppins font-medium md:text-[16px] text-[14px] text-para md:px-8 px-5">
                  <li>it is based on your own real experience</li>
                  <li>it is honest and genuine</li>
                  <li>
                    it is not false, misleading, abusive, defamatory or
                    promotional
                  </li>
                  <li>
                    you are not submitting your own business, service or
                    commercial interest
                  </li>
                  <li>
                    you have the right to provide the information you submit
                  </li>
                </ul>
              </div>

              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Submissions are not published automatically. We may review,
                verify, moderate, delay, reject or remove any submission where
                we believe that is necessary, including where we detect
                duplication, suspicious activity, unusual behaviour, conflicts
                of interest, or content that does not meet our standards
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We may also limit the number of submissions made by a person
                within a certain period to help protect the quality and
                trustworthiness of the platform.
              </p>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                3. What Subrub says does
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Subrub says celebrates and publishes the businesses, trades and
                local service providers that members of the community say they
                trust.Subrub says does not independently recommend, endorse,
                guarantee or certify any business or provider. Any business
                shown on the site reflects community input, not a recommendation
                made by Subrub says.
              </p>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                4. Why we ask for your details
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We may ask for details such as your name, email address, phone
                number, suburb or other contact information when you submit
                information to the site.
              </p>
              <div className="md:mt-4 mt-2">
                <span className="md:text-[16px] text-[14px] font-poppins font-medium">
                  We ask for this information so we can:
                </span>

                <ul className="list-disc font-poppins font-medium md:text-[16px] text-[14px] text-para md:px-8 px-7">
                  <li>validate submissions</li>
                  <li>confirm authenticity</li>
                  <li>reduce spam, fraud and misuse</li>
                  <li>maintain the integrity of what appears on the site</li>
                  <li>
                    communicate with you about something you have submitted
                  </li>
                  <li>
                    occasionally let you know about relevant updates,
                    improvements or new functionality on Subrub says
                  </li>
                </ul>
              </div>

              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We do not sell your personal information.
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We do not knowingly share your personal information with third
                parties for their own marketing purposes.
              </p>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                5. How we handle personal information
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We collect and use personal information only where it is
                reasonably needed to operate and improve Subrub says.
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                This may include using your information to verify submissions,
                respond to enquiries, maintain the quality of the platform,
                communicate with users, and support the ongoing operation of the
                website.
              </p>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                We take reasonable steps to protect the personal information we
                hold from misuse, loss, unauthorised access, modification or
                disclosure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
