import * as Yup from "yup";

const namePattern = /^[a-zA-Z\s'-.]+$/;
const businessPattern = /^[a-zA-Z0-9\s'&.,\-()/]+$/;

export const RecommendationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Their First Name is required")
    .matches(
      namePattern,
      "Their First Name can only contain letters, spaces, apostrophes, and hyphens",
    )
    .min(2, "Their First Name must be at least 2 characters")
    .max(100, "Their First Name cannot exceed 100 characters"),

  businessName: Yup.string()
    .required("Business Name is required")
    .matches(
      businessPattern,
      "Business Name can only contain letters, numbers, spaces, and common punctuation",
    )
    .min(2, "Business Name must be at least 2 characters")
    .max(200, "Business Name cannot exceed 200 characters"),

  theirNumber: Yup.string()
    .required("Number is required")
    .matches(/^\+?[0-9]{10,15}$/, "Enter a valid phone number")
    .max(
      15,
      "Business contact must be less than or equal to 15 characters long",
    ),

  service: Yup.string().required("Please select a service"),

  recommendationReason: Yup.array()
    .min(1, "Select at least one reason")
    .max(3, "Choose up to 3 reasons")
    .of(Yup.string().required()),
});

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


