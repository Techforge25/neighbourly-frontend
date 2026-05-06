import * as Yup from "yup";

export const RecommendationSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),

  businessName: Yup.string().required("Business name is required"),

  theirNumber: Yup.string()
  .required("Number is required")
  .matches(/^\+?[0-9]{10,15}$/, "Enter a valid phone number")
  .max(15, "Business contact must be less than or equal to 15 characters long"),

 service: Yup.string().required("Please select a service"),

 recommendationReason: Yup.array()
  .min(1, "Select at least one reason")
  .max(3, "Choose up to 3 reasons")
  .of(Yup.string().required()),
});


export const  ContactUsFormSchema = Yup.object({
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
    })
