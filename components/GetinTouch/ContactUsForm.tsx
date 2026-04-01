"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoShieldCheck } from "react-icons/go";
import { api } from "@/src/service/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name can contain alphabets only")
        .min(3, "Name must be at least 3 characters")
        .max(40, "Name cannot exceed 40 characters")
        .required("Full name is required"),

      email: Yup.string()
        .trim()
        .lowercase()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message cannot exceed 2000 characters")
        .required("Message is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        const res: any = await api.post("getInTouch/send-feedback", {
          fullName: values.name,
          email: values.email,
          message: values.message,
        });
        setIsLoading(false);
        toast.success(res.data?.data);
        resetForm();
        console.log(res?.data?.data, "Response From Get In Touch Form");
      } catch (error: any) {
        console.log(error.response.data.message);
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="bg-[#f7f7f7] py-16 px-4">
      {/* Heading */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="md:text-[42px] text-[28px]  font-bold text-[#010101] font-manrope">
          We&apos;d love to <span className="text-primary">hear from you</span>
        </h2>
        <p className="text-[#262729] mt-3 text-[18px] md:w-[710px] mx-auto">
          Whether you have a question about how Neighbourly works, want to
          recommend a service, or would like to see us in your suburb, reach out
          below.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-md shadow-[#000000]/20 p-6 sm:p-8 max-w-[1074px] mx-auto"
      >
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
              <label className="text-[14px] text-[#202939]">
                Email Address
              </label>
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
          disabled={!formik.values.message || !formik.values.email || !formik.values.name }
            type="submit"
            className="mt-6 w-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-primary hover:bg-heading text-white py-3 rounded-full font-medium transition-all duration-300"
          >
            {isLoading ? "Loading..." : "Submit →"}
          </button>

          {/* Footer note */}
          <div className="flex items-start justify-center md:gap-4 gap-4 md:mt-10 mt-6 md:text-[16px] text-[14px] text-[#697586] font-manrope">
            <span>
              <GoShieldCheck size={24} />
            </span>
            <p className="flex flex-col gap-2">
              <span>
                Your details are safe with us. We only use this information to
                respond to your enquiry.
              </span>
              <span>
                We’re starting on the Northern Beaches and would love to hear
                from residents, local businesses and community groups.
              </span>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUsForm;
