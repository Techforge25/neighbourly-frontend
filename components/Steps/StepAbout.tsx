import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface StepAboutData {
  firstName: string;
  mobile: string;
  street: string;
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
    street: "",
    suburb: "",
  };

  const formik = useFormik<StepAboutData>({
    initialValues: savedData,

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),

      mobile: Yup.string()
        .matches(/^[0-9+]+$/, "Invalid phone number")
        .required("Mobile number is required"),

      street: Yup.string().required("Street is required"),

      suburb: Yup.string().required("Suburb is required"),
    }),

    onSubmit: (values) => {
      // ✅ Save data
      if (formik.isValid) {
        localStorage.setItem(
        "stepAboutData",
        JSON.stringify({ ...values, step: 2 }));
      }

      // ✅ Save step number
      localStorage.setItem("currentStep", "1");

      onNext();
    },
  });

  // ✅ Auto save on change (optional but powerful)
  useEffect(() => {
    localStorage.setItem(
      "stepAboutData",
      JSON.stringify({ ...formik.values, step: 2 }));
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit} className="w-full rounded-2xl">
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col gap-[12px]">
          <Label>First Name *</Label>
          <Input
            name="firstName"
            placeholder="e.g. olivia"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-500 text-sm">
              {formik.errors.firstName}
            </span>
          )}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-[12px]">
          <Label>Mobile Number *</Label>
          <Input
            name="mobile"
            placeholder="e.g. 012385868664"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <span className="text-red-500 text-sm">{formik.errors.mobile}</span>
          )}
        </div>

        {/* Street */}
        <div className="flex flex-col gap-[12px]">
          <Label>Street Name *</Label>
          <Input
            name="street"
            placeholder="e.g. Smith St"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street && (
            <span className="text-red-500 text-sm">{formik.errors.street}</span>
          )}
        </div>

        {/* Suburb */}
        <div className="flex flex-col gap-[12px]">
          <Label>Suburb *</Label>
          <Input
            name="suburb"
            placeholder="e.g. Collingwood"
            value={formik.values.suburb}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.suburb && formik.errors.suburb && (
            <span className="text-red-500 text-sm">{formik.errors.suburb}</span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 pt-2 mt-4">
        <button
          className="rounded-full border-[1px] border-[#E4E4E4] py-[16px] px-[27px] flex items-center justify-center text-[16px] font-poppins "
          onClick={onBack}
        >
          {" "}
          <ArrowLeft size={24} /> Back{" "}
        </button>{" "}
        <button
          className="rounded-full py-[16px] px-[27px] flex items-center justify-center gap-2 bg-primary text-[16px] font-poppins text-white"
          onClick={onNext}
        >
          {" "}
          Submit Recommendation <ArrowRight size={24} />{" "}
        </button>
      </div>
    </form>
  );
}
