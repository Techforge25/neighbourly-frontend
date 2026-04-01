"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const page = () => {

  const router = useRouter()


  const handleAccept = () =>{
    toast.success("Thank you for accepting the terms of use and privacy notice. Your acceptance has been recorded.")
  }


  return (
    <main className="bg-white">
      <div className="w-[90%] mx-auto py-20  ">
        <div className="flex flex-col md:gap-[10px] gap-[6px]">
          <h1 className="font-bold font-manrope md:text-[42px] text-[23px] md:leading-[49px] leading-[30px] max-w-[515px]">
            Neighbourly <span className="text-primary">Terms of Use</span> and{" "}
            <span className="text-primary">Privacy Notice</span>
          </h1>
          <p className="md:text-[16px] text-[14px] md:leading-[28px] leading-[20px] font-medium font-poppins text-para md:max-w-[1274]">
            We collect your details to verify submissions, prevent misuse, and
            keep Neighbourly trustworthy. We may contact you about your
            submission or share relevant updates. Your information is never
            sold.
          </p>
        </div>

        <div className="p-[32px] bg-[#FFF1ED] my-[42px] border-[1px] border-modal-line rounded-[12px] ">
          <div>
            <h4 className="text-para font-medium font-poppins md:text-[16px] text-[14px]">
              Effective date: 3 April 2026
            </h4>
            <p className="text-[16px] font-poppins md:leading-[28px] leading-[20px] ">
              <span className="text-para font-semibold">Contact:</span>{" "}
              <span className="text-verified font-semibold">
                team@beneighbourly.com.au
              </span>
            </p>

            <div className="max-w-[1047px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                Welcome to Neighbourly.
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Neighbourly is a free, community-led service that celebrates and
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
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Neighbourly is a free, community-led service that celebrates and
                publishes the local businesses people nearby know and trust. Our
                role is to help surface and share community trust. We do not
                make recommendations ourselves.
              </p>
            </div>

            <div className="max-w-[1214px] md:mt-3 mt-2 flex flex-col md:gap-[5px] gap-[3px]">
              <h3 className="font-manrope font-semibold md:text-[24px] text-[20px] text-textdark">
                1. Using Neighbourly
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Please use Neighbourly in a respectful, honest and lawful way.
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
                Neighbourly is built on genuine input from local residents about
                the businesses and people they trust.
              </p>
              <div>
                <span className="md:text-[16px] text-[14px] font-poppins font-medium">
                  By submitting information to Neighbourly, you confirm that:
                </span>

                <ul className="list-disc font-poppins font-medium md:text-[16px] text-[14px] text-para md:px-4 p-2">
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
                3. What Neighbourly does
              </h3>
              <p className="font-poppins font-medium md:text-[16px] text-[14px] text-para ">
                Neighbourly celebrates and publishes the businesses, trades and
                local service providers that members of the community say they
                trust.Neighbourly does not independently recommend, endorse,
                guarantee or certify any business or provider. Any business
                shown on the site reflects community input, not a recommendation
                made by Neighbourly.
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
              <div>
                <span className="md:text-[16px] text-[14px] font-poppins font-medium">
                  We ask for this information so we can:
                </span>

                <ul className="list-disc font-poppins font-medium md:text-[16px] text-[14px] text-para md:px-4 p-2">
                  <li>validate submissions</li>
                  <li>confirm authenticity</li>
                  <li>reduce spam, fraud and misuse</li>
                  <li>maintain the integrity of what appears on the site</li>
                  <li>
                    communicate with you about something you have submitted
                  </li>
                  <li>
                    occasionally let you know about relevant updates,
                    improvements or new functionality on Neighbourly
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
                reasonably needed to operate and improve Neighbourly.
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

        <div className="max-w-[821px] mx-auto flex items-center md:gap-8 gap-4">

          <button onClick={()=>{router.push('/getin-touch')}} className="w-full bg-white hover:bg-light-bg border-[1px] border-modal-line md:p-[16px] p-[8px] rounded-full cursor-pointer font-outfit md:text-[16px] text-[14px] font-medium ">
            Decline
          </button>

          <button onClick={()=>{handleAccept()}} className="w-full bg-primary hover:bg-heading md:p-[16px] p-[8px] rounded-full cursor-pointer font-outfit md:text-[16px] text-[14px] font-medium text-white ">
            Accept
          </button>
        </div>


      </div>
    </main>
  );
};

export default page;
