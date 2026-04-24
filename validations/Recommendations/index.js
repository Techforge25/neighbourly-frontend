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
