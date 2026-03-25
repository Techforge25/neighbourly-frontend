import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";

import * as Yup from "yup";
import axios from "axios";

interface RecommendationData {
  firstName: string;
  businessName: string;
  theirNumber: string;
  service: string;
  location: string;
  website: string;
  recommendationReason: string[];
}

const SERVICE_OPTIONS = [
  "Accountant",
  "Plumber",
  "Electrician",
  "Builder",
  "Painter",
  "Landscaper",
  "Cleaner",
  "Mechanic",
  "Other",
];

const RECOMMEND_OPTIONS = [
  { value: "Fast Response", label: "Fast Response" },
  { value: "Reliable", label: "Reliable" },
  { value: "Fair Price", label: "Fair Price" },
];

const RecommendationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  businessName: Yup.string().required("Business name is required"),
  theirNumber: Yup.string()
    .required("Number is required")
    .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  service: Yup.string().required("Please select a service"),
  location: Yup.string().required("Location is required"),
  website: Yup.string().url("Enter a valid URL").nullable(),
  recommendationReason: Yup.array()
    .min(1, "Select at least one reason")
    .of(Yup.string().required()),
});

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
  const handleGetFormData = async (values: RecommendationData) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}recommendation`,
        {
          personName: values.firstName,
          businessName: values.businessName,
          contact: values.theirNumber,
          serviceType: values.service,
          location: values.location,
          website: values.website,
          reasonsOfRecommendation: values.recommendationReason,
        },
      );
      console.log("Recommendation submitted successfully:", res.data);
    } catch (error) {
      console.log(error);
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

            {/* Their Number */}
            <div className="flex flex-col gap-[10px]">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                Their Number <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                name="theirNumber"
                placeholder="e.g. +12397879793"
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

            {/* Location */}
            <div className="flex flex-col gap-[10px] sm:col-span-2">
              <Label className="text-[14px] leading-[20px] font-manrope font-medium">
                Location <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                name="location"
                placeholder="location"
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

            {/* Website */}
            <div className="flex flex-col gap-[10px] sm:col-span-2">
              <Label className="text-[14px] leading-[20px] font-medium text-muted-foreground">
                Website (Optional)
              </Label>
              <Field
                as={Input}
                name="website"
                placeholder="website URL"
                className={`border border-input rounded-[12px] px-3 py-3 text-[16px] h-auto font-manrope text-para ${
                  errors.website && touched.website
                    ? "border-red-500"
                    : "border-[#E4E4E4]"
                }`}
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500 text-[12px]"
              />
            </div>
          </div>

          {/* MultiSelect for Recommendation Reasons */}
          <div className="flex flex-col gap-2 mt-4">
            <Label className="text-[14px] leading-[20px] font-manrope font-medium">
              Reasons for Recommendation <span className="text-red-500">*</span>
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
