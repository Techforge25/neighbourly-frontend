import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { api } from "../../src/service/axios";
import { toast } from "react-toastify";
import { RecommendationSchema } from "@/validations/Recommendations";
import { RECOMMEND_OPTIONS, SERVICE_OPTIONS } from "@/utils/dumydata";
import { useState } from "react";
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
}: {
  data: RecommendationData;
  setData: React.Dispatch<React.SetStateAction<RecommendationData>>;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const getAboutData = localStorage.getItem("stepAboutData");
  const parsedAboutData = getAboutData ? JSON.parse(getAboutData) : null;
  const [isError, setIsError] = useState<any>("");

  const handleGetFormData = async (values: RecommendationData) => {
    try {
      const isStep2 = parsedAboutData?.step === 2;

      const url = isStep2 ? "recommendation/with-user-info" : "recommendation";

      const payload = {
        personName: values.firstName,
        businessName: values.businessName,
        [parsedAboutData?.step === 2 ? "businessContact" : "contact"]:
          values.theirNumber,
        serviceType: values.service,
        location: values.location,
        reasonsOfRecommendation: values.recommendationReason,
        comment: values.comment,

        // ✅ extra fields only if step 2
        ...(isStep2 && {
          fullName: parsedAboutData.firstName,
          userContact: parsedAboutData.mobile,
          userStreet: parsedAboutData.street,
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
    } catch (error: any) {
      if (error.response) {
        console.log(
          "Server responded with an error:",
          error.response.data.message,
        );
        setIsError(error.response.data.message);
      }

      console.log("Failed to create recommendation:", error);
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
      {({ values, errors, touched, setFieldValue }) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            {/* First Name */}
            <div className="flex flex-col gap-[10px]">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                First Name Of Who You Recommend{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                name="firstName"
                placeholder="e.g. Shannon"
                className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope text-para ${
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
            <div className="flex flex-col gap-[10px]">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                The Business Name <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                name="businessName"
                placeholder="e.g. Sunny Day Plumbing"
                className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope text-para ${
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

            {/* Phone Number */}
            <div className="flex flex-col gap-[10px]">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                name="theirNumber"
                placeholder="e.g. 012385868664"
                className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope text-para ${
                  errors.theirNumber && touched.theirNumber
                    ? "border-red-500"
                    : "border-[#E4E4E4]"
                }`}
              />
              <ErrorMessage
                name="theirNumber"
                component="div"
                className="text-red-500 text-[12px]"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-[10px]">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                What Service They Provide{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Field
                as="select"
                name="service"
                className={`flex w-full border rounded-[12px] px-3 py-3 text-[16px] text-para ${
                  errors.service && touched.service
                    ? "border-red-500"
                    : "border-[#E4E4E4]"
                }`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="service"
                component="div"
                className="text-red-500 text-[12px]"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-[10px] mt-4">
            <Label className="text-[14px] leading-[20px] font-manrope font-medium">
              Suburb <span className="text-red-500">*</span>
            </Label>
            <Field
              as={Input}
              name="location"
              placeholder="Suburb, City"
              className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope text-para ${
                errors.location && touched.location
                  ? "border-red-500"
                  : "border-[#E4E4E4]"
              }`}
            />
            <ErrorMessage
              name="location"
              component="div"
              className="text-red-500 text-[12px]"
            />
          </div>

          {/* MultiSelect for Recommendation Reasons */}
          <div className="flex flex-col gap-2 mt-4">
            <Label className="text-[14px] leading-[20px] font-manrope font-medium">
              why you recommend them <span className="text-red-500">*</span>
            </Label>

            <Select
              options={RECOMMEND_OPTIONS} // already {value, label} objects
              isMulti
              // Map Formik value array into objects for react-select
              value={(values.recommendationReason || []).map((val) => ({
                value: val,
                label: val,
              }))}
              onChange={(selectedOptions: any) => {
                // Convert selected objects back to string array
                setFieldValue(
                  "recommendationReason",
                  selectedOptions
                    ? selectedOptions.map((opt: any) => opt.value)
                    : [],
                );
              }}
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select reasons"
              styles={{
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#f3b39d",
                  color: "white",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "white",
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "white",
                  ":hover": { backgroundColor: "#f3b39d", color: "black" },
                }),
              }}
            />

            {errors.recommendationReason && touched.recommendationReason && (
              <div className="text-red-500 text-[12px] mt-1">
                {Array.isArray(errors.recommendationReason)
                  ? errors.recommendationReason.join(", ")
                  : errors.recommendationReason}
              </div>
            )}
          </div>

          {/* Optional Comment  */}
          <div className="flex flex-col gap-2 mt-4">
            <Label className="text-[14px] leading-[20px] font-medium text-#202939">
              {`Comment (Optional)`}
            </Label>
            <Field
              as="textarea"
              name="comment"
              placeholder="Tell us a little about your experience"
              className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope focus:outline-none text-para `}
            />
          </div>

          {/* Optional Comment  */}

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button
              type="button"
              className="rounded-full border border-[#E4E4E4] py-4 px-7 flex items-center justify-center gap-2 text-[16px] text-black"
              onClick={onBack}
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <button
              type="submit"
              className="rounded-full py-4 px-7 flex items-center justify-center gap-2 bg-primary text-[16px] text-[#fff]"
            >
              Submit Recommendation
              <ArrowRight size={20} />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
