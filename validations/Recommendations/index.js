import * as Yup from "yup";

export const RecommendationSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  businessName: Yup.string().required("Business name is required"),
  theirNumber: Yup.string()
    .required("Number is required")
    .matches(
      /^(\+61|0)4\d{8}$/,
      "Contact number must be an Australian mobile number (e.g., 0412345678 or +61412345678)",
    ),
  service: Yup.string().required("Please select a service"),
  recommendationReason: Yup.array()
    .min(1, "Select at least one reason")
    .of(Yup.string().required()),
});
