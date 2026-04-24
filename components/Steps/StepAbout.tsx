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
  setHeaderTitle,
}: {
  onNext: () => void;
  onBack: () => void;
  setHeaderTitle: (title: string) => void;
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
  .required("Number is required")
  .matches(/^\+?[0-9]{10,15}$/, "Enter a valid phone number")
  .max(15, "Business contact must be less than or equal to 15 characters long"),

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
    <form onSubmit={formik.handleSubmit} className="w-full rounded-2xl space-y-[20px]">
      <div className="">
        {/* First Name */}
        <div className="pb-[2rem]">
          <p className="text-secondary font-medium text-[1rem]">
            A few quick details so we know you’re a real person, not a random.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <Label>
            <span className="font-manrope font-medium  text-[14px]  ">
              First Name{" "}
            </span>
            <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            name="firstName"
            placeholder="e.g. olivia"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border rounded-[12px] text-[16px]"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-500 md:text-[14px] text-[12px]">
              {formik.errors.firstName}
            </span>
          )}
        </div>
      </div>

        {/* Mobile */}
        <div className="flex flex-col gap-[12px]">
          <Label>
            <span className="font-manrope font-medium  text-[14px]  ">
              Mobile Number
            </span>
            <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            name="mobile"
            placeholder="e.g. 012385868664"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border rounded-[12px] text-[16px]"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <span className="text-red-500 md:text-[14px] text-[12px]">
              {formik.errors.mobile}
            </span>
          )}
        </div>

      {/* Suburb */}
      <div className="flex flex-col gap-[12px]">
        <Label>
          <span className="font-manrope font-medium  text-[14px]  ">
            Suburb
          </span>
          <span className="text-red-500">*</span>{" "}
        </Label>
        <Input
          name="suburb"
          placeholder="e.g. Collingwood"
          value={formik.values.suburb}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border rounded-[12px] text-[16px]"
        />
        {formik.touched.suburb && formik.errors.suburb && (
          <span className="text-red-500 md:text-[14px] text-[12px]">
            {formik.errors.suburb}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="">
        <button
          disabled={!formik.isValid}
          type="submit"
          className=" disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed rounded-full w-full flex items-center justify-center gap-2 py-2 md:py-[16px] px-4 md:px-[27px] text-[11px] md:text-[16px] font-poppins bg-primary text-white"
        >
          Continue
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
}

//  <button
//           className="rounded-full border-[1px] border-border w-full flex items-center justify-center py-2 md:py-[16px] px-4 md:px-[27px] text-[12px] md:text-[16px] font-poppins cursor-pointer"
//           onClick={handleOnBack}
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back
//         </button>
