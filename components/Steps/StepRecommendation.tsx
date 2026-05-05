import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { api } from "../../src/service/axios";
import { toast } from "react-toastify";
import { RecommendationSchema } from "@/validations/Recommendations";
import { RECOMMEND_OPTIONS, SERVICE_OPTIONS } from "@/utils/dumydata";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { ApiErrorResponse, TypeRecommendationOption } from "@/types";
import { AxiosError } from "axios";
interface RecommendationData {
  firstName: string;
  businessName: string;
  theirNumber: string;
  service: string;
  location: string;
  recommendationReason: string[];
  comment: string;
}

export default function StepRecommendation({
  data,
  setData,
  onBack,
  onSubmit,
  nextStepOne,
  setHeaderTitle,
}: {
  data: RecommendationData;
  setData: React.Dispatch<React.SetStateAction<RecommendationData>>;
  onBack: () => void;
  onSubmit: () => void;
  nextStepOne: () => void;
  setHeaderTitle: (title: string) => void;
}) {
  const getAboutData = localStorage.getItem("stepAboutData");
  const parsedAboutData = getAboutData ? JSON.parse(getAboutData) : null;
  const [isError, setIsError] = useState<string>("");
  const [nextStep, setNextStep] = useState(false);

  const handleGetFormData = async (values: RecommendationData) => {
    console.log(
      "Form data received in StepRecommendation:",
      values,
      parsedAboutData,
    );
    try {
      const isStep2 = parsedAboutData?.step === 2;

      const url = isStep2 ? "recommendation/with-user-info" : "recommendation";

      const payload = {
        personName: values.firstName,
        businessName: values.businessName,
        [parsedAboutData?.step === 2 ? "businessContact" : "contact"]:
          values.theirNumber,
        serviceType: values.service,
        reasonsOfRecommendation: values.recommendationReason,
        comment: values.comment,

        // ✅ extra fields only if step 2
        ...(isStep2 && {
          fullName: parsedAboutData.firstName,
          userContact: parsedAboutData.mobile,
          userAddress: parsedAboutData.suburb,
        }),
      };

      const res = await api.post(url, payload, {
        withCredentials: true,
      });

      toast.success(res.data.message);
      console.log("Recommendation submitted successfully:", res);
      localStorage.removeItem("stepAboutData");
      onSubmit();
    } catch (error: unknown) {
      const err = error as AxiosError<ApiErrorResponse>;
      if (err.response) {
        console.log(
          "Server responded with an error:",
          err.response.data.message,
        );
        setIsError(err.response.data.message);
      }

      console.log("Failed to create recommendation:", error);
    }
  };

  // handel Back

  const handleBack = () => {
    if (parsedAboutData?.step !== 2) {
      nextStepOne();
    } else {
      onBack();
    }
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={RecommendationSchema}
      onSubmit={(values) => {
        setData(values);
        handleGetFormData(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        isValid,
      }) => (
        <Form className="w-full rounded-2xl">
          {isError && (
            <p
              className={`text-red-500 text-[12px] transition-all duration-300 ease-out transform ${
                isError
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {isError}
            </p>
          )}
          {!nextStep && (
            <>
              <div className="flex flex-col gap-[24px]">
                {/* First Name */}
                <div className="flex flex-col gap-[12px]">
                  <Label className="md:text-[14px] text-[12px] leading-[20px] font-manrope font-medium">
                    Their first name
                  </Label>
                  <Field
                    as={Input}
                    name="firstName"
                    placeholder="e.g. Shannon"
                    className={`border border-input rounded-[12px] md:px-3 px-3 md:py-3 py-2 text-[16px] h-auto font-manrope text-para ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-[#E4E4E4]"
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                {/* Business Name */}
                <div className="flex flex-col gap-[12px]">
                  <Label className="md:text-[14px] text-[12px] leading-[20px] font-manrope font-medium">
                    Business Name <span className="text-red-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    name="businessName"
                    placeholder="e.g. Sunny Day Plumbing"
                    className={`border border-input rounded-[12px] md:px-3 px-3 md:py-3 py-2 text-[16px] h-auto font-manrope text-para ${
                      errors.businessName && touched.businessName
                        ? "border-red-500"
                        : "border-[#E4E4E4]"
                    }`}
                  />
                  <ErrorMessage
                    name="businessName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
                {/* Service */}
                <div className="flex flex-col gap-[12px]">
                  <Label className="md:text-[14px] text-[12px] leading-[20px] font-manrope font-medium">
                    Service <span className="text-red-500">*</span>
                  </Label>
                  <Field
                    as="select"
                    name="service"
                    className={`flex w-full border rounded-[12px] md:px-3 px-3 md:py-3 py-2 text-[16px]  text-para ${
                      errors.service && touched.service
                        ? "border-red-500"
                        : "border-[#E4E4E4]"
                    }`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map(
                      (s: { value: string }, ind: number) => (
                        <option key={ind} value={s.value}>
                          {s.value}
                        </option>
                      ),
                    )}
                  </Field>
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                <div className="flex flex-col gap-[12px]">
                  <Label className="md:text-[14px] text-[12px] leading-[20px] font-manrope font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>

                  <PhoneInput
                    international
                    defaultCountry="AU"
                    name="theirNumber"
                    value={values.theirNumber}
                    onChange={(value) => setFieldValue("theirNumber", value)}
                    onBlur={() => setFieldTouched("theirNumber", true)} // 👈 add this
                    className={`phone-input ${
                      errors.theirNumber && touched.theirNumber
                        ? "border-red-500"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="theirNumber"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
              </div>
              <div className="pt-[32px]">
                <button
                  onClick={() => {
                    setNextStep(true);
                    setHeaderTitle("Why you recommend them (choose up to 3) ");
                  }}
                  disabled={
                    !values.firstName ||
                    !values.businessName ||
                    !values.theirNumber ||
                    !values.service ||
                    !!errors.theirNumber
                  }
                  type="button"
                  className="flex disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer items-center justify-center text-white text-[16px] font-poppins  gap-2 w-full bg-share-modal-icon py-[14px] rounded-full  "
                >
                  <span>Continue</span>
                  <span>
                    <GrFormNextLink size={24} />
                  </span>
                </button>
              </div>
            </>
          )}

          {nextStep && (
            <>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {RECOMMEND_OPTIONS.map((option: TypeRecommendationOption) => {
                  const isSelected = values.recommendationReason?.includes(
                    option.value,
                  );

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        const current = values.recommendationReason || [];

                        if (isSelected) {
                          setFieldValue(
                            "recommendationReason",
                            current.filter(
                              (item: string) => item !== option.value,
                            ),
                          );
                        } else {
                          setFieldValue("recommendationReason", [
                            ...current,
                            option.value,
                          ]);
                        }
                      }}
                      className={`flex items-center justify-between cursor-pointer w-full px-4 py-3 rounded-xl border transition-all
                        ${
                          isSelected
                            ? "bg-share-modal-icon border-share-modal-icon text-white "
                            : "bg-bgLight border-border-light"
                        }
                        `}
                    >
                      <span className="text-[0.8rem] font-manrope text-start  ">
                        {option.label || option.value}
                      </span>

                      {/* Circle indicator */}
                      <span
                        className={`w-5 h-5 flex items-center justify-center rounded-full border
                        ${
                          isSelected
                            ? "bg-share-modal-icon border-border-light text-white"
                            : "border-gray-300 text-white border-dashed"
                        }
                      `}
                      >
                        {isSelected && "✓"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <ErrorMessage
                name="recommendationReason"
                component="div"
                className="text-red-500 text-[12px]"
              />

              <div className="flex flex-col md:gap-2 gap-1 md:mt-4 mt-1">
                <Label className="md:text-[14px] text-[12px] leading-[20px] font-medium text-#202939">
                  {`Comment (Optional)`}
                </Label>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Tell us a little about your experience"
                  className={`border border-input rounded-[12px] md:px-3 px-3 md:py-3 py-2 text-[16px] h-auto font-manrope focus:outline-none text-para `}
                />
              </div>

              <div className="pt-[32px]">
                <button
                  type="submit"
                  className="sm:order-2 order-1 rounded-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer md:py-4 md:px-7 px-2 py-2 flex items-center w-full justify-center gap-2 bg-share-modal-icon md:text-[16px] text-[12px] text-[#fff]"
                >
                  Submit Recommendation
                  <ArrowRight size={20} className="md:flex hidden" />
                </button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}
