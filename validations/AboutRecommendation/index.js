import * as Yup from "yup";
export const RecommendationAboutValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),

  mobile: Yup.string()
    .required("Number is required")
    .matches(/^\+?[0-9]{10,15}$/, "Enter a valid phone number")
    .max(
      15,
      "Business contact must be less than or equal to 15 characters long",
    ),

  suburb: Yup.string().required("Suburb is required"),
});