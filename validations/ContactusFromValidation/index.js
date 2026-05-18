import * as Yup from "yup";
export const ContactUsFormSchema = Yup.object({
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
});