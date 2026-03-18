"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoShieldCheck } from "react-icons/go";

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="bg-[#f7f7f7] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="md:text-[42px] text-[28px]  font-bold text-[#010101] font-manrope">
          We&apos;d love to{" "}
          <span className="text-[#F3B39D]">hear from you</span>
        </h2>
        <p className="text-[#262729] mt-3 text-[18px] md:w-[710px] mx-auto">
          Whether you have a question about how Neighbourly works or want to see
          us in your suburb, reach out below.
        </p>
      </div>

      {/* Form Card */}
      <div className="md:w-[1074px] mx-auto bg-white rounded-2xl shadow-md shadow-[#000000]/20 p-6 sm:p-8">
        <form onSubmit={formik.handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="text-[14px] text-[#202939]">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="e.g. John"
                className="mt-1 w-full shadow shadow-[#000000]/20 text-[#697586] text-[16px] rounded-lg px-3 py-3 outline-none "
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-[14px] text-[#202939]">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="hello@example.com"
                className="mt-1 w-full shadow shadow-[#000000]/20 text-[#697586] text-[16px] rounded-lg px-3 py-3 outline-none "
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="text-[14px] text-[#202939]">Message</label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              rows={5}
              placeholder="How can we help?"
              className="mt-1 w-full shadow shadow-[#000000]/20 text-[#697586] text-[16px] rounded-lg px-3 py-3 outline-none "
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full cursor-pointer bg-[#F3B39D] hover:bg-[#e59c86] text-white py-3 rounded-full font-medium transition-all duration-300"
          >
            Submit →
          </button>

          {/* Footer note */}
          <p className="flex items-center justify-center md:gap-4 gap-4 md:mt-10 mt-6 md:text-[16px] text-[14px] text-[#697586] font-manrope">
            <span>
              <GoShieldCheck size={24} />
            </span>
            <span>
              {" "}
              Your details are safe with us. We only use this information to
              respond to your inquiry.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
