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

  const handleOnBack = () =>{
    localStorage.removeItem("stepAboutData");
    onBack();
  }

  return (
    <form onSubmit={formik.handleSubmit} className="w-full rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col gap-[12px]">
          <Label>First Name <span className="text-red-500">*</span> </Label>
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
          <Label>Mobile Number <span className="text-red-500">*</span> </Label>
          <Input
            name="mobile"
            placeholder="e.g. 012385868664"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border md:text-[14px] text-[12px]"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <span className="text-red-500 md:text-[14px] text-[12px]">{formik.errors.mobile}</span>
          )}
        </div>
      </div>

      {/* Suburb */}
      <div className="flex flex-col gap-[12px] mt-4">
        <Label>Suburb <span className="text-red-500">*</span> </Label>
        <Input
          name="suburb"
          placeholder="e.g. Collingwood"
          value={formik.values.suburb}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border md:text-[14px] text-[12px]"
        />
        {formik.touched.suburb && formik.errors.suburb && (
          <span className="text-red-500 md:text-[14px] text-[12px]">{formik.errors.suburb}</span>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 md:gap-4 gap-2 pt-2 mt-4">
        <button
          className="rounded-full border-[1px] cursor-pointer border-border md:py-[16px] md:px-[27px] flex items-center justify-center md:text-[16px] text-[12px] font-poppins "
          onClick={handleOnBack}
        >
          {" "}
          <ArrowLeft size={20} className="size-[20px]" /> Back{" "}
        </button>{" "}
        <button

          type="submit"
          className="rounded-full md:py-[16px] py-[10px] md:px-[27px] flex items-center justify-center gap-2 bg-primary md:text-[16px] text-[11px] font-poppins text-white"
        >
          Submit Recommendation
          <ArrowRight size={20} className="size-[20px]" />{" "}
        </button>
      </div>
    </form>
  );
}
