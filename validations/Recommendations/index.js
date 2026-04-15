import * as Yup from "yup";

export const RecommendationSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  businessName: Yup.string().required("Business name is required"),
  theirNumber: Yup.string()
    .required("Number is required")
    .matches(
  /^[+]?[0-9]{10,15}$/,
  "Enter a valid phone number"
),
  service: Yup.string().required("Please select a service"),
  recommendationReason: Yup.array()
    .min(1, "Select at least one reason")
    .of(Yup.string().required()),
});
