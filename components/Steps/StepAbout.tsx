import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface StepAboutData {
  firstName: string;
  mobile: string;
  suburb: string;
}

export default function StepAbout({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  // ✅ Load from localStorage
  const savedData: StepAboutData = JSON.parse(
    localStorage.getItem("stepAboutData") || "null",
  ) || {
    firstName: "",
    mobile: "",
    suburb: "",
  };

  const formik = useFormik<StepAboutData>({
    initialValues: savedData,

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),

      mobile: Yup.string()
        .matches(/^[0-9+]+$/, "Invalid phone number")
        .required("Mobile number is required"),

      suburb: Yup.string().required("Suburb is required"),
    }),

    onSubmit: (values) => {
      // ✅ Save data
      if (formik.isValid) {
        localStorage.setItem(
          "stepAboutData",
          JSON.stringify({ ...values, step: 2 }),
        );
        onNext();
      }
    },
  });

  // handele Back

  const handleOnBack = () => {
    localStorage.removeItem("stepAboutData");
    onBack();
  };

  return (
    <form onSubmit={formik.handleSubmit} className="w-full rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col gap-[12px]">
          <Label>
            First Name <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            name="firstName"
            placeholder="e.g. olivia"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border md:text-[14px] text-[12px]"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-500 md:text-[14px] text-[12px]">
              {formik.errors.firstName}
            </span>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-[12px]">
          <Label>
            Mobile Number <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            name="mobile"
            placeholder="e.g. 012385868664"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border md:text-[14px] text-[12px]"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <span className="text-red-500 md:text-[14px] text-[12px]">
              {formik.errors.mobile}
            </span>
          )}
        </div>
      </div>

      {/* Suburb */}
      <div className="flex flex-col gap-[12px] mt-4">
        <Label>
          Suburb <span className="text-red-500">*</span>{" "}
        </Label>
        <Input
          name="suburb"
          placeholder="e.g. Collingwood"
          value={formik.values.suburb}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border md:text-[14px] text-[12px]"
        />
        {formik.touched.suburb && formik.errors.suburb && (
          <span className="text-red-500 md:text-[14px] text-[12px]">
            {formik.errors.suburb}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center pt-2 mt-4">
        <button
          className="rounded-full border-[1px] border-border w-full flex items-center justify-center py-2 md:py-[16px] px-4 md:px-[27px] text-[12px] md:text-[16px] font-poppins cursor-pointer"
          onClick={handleOnBack}
        >
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>

        <button
          type="submit"
          className="rounded-full w-full flex items-center justify-center gap-2 py-2 md:py-[16px] px-4 md:px-[27px] text-[11px] md:text-[16px] font-poppins bg-primary text-white"
        >
          Submit Recommendation
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
}
