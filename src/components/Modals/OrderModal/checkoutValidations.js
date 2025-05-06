import { string, number } from "yup";

export const validator = {
  firstName: string().required("First name cannot be empty...."),
  lastName: string().required("Last name cannot be empty...."),
  emailAddress: string()
    .email("Invalid email address provided...")
    .required("Email address cannot be empty...."),
  street: string().required("Street address cannot be empty"),
  postalCode: number().typeError("Invalid Postal Code provided..."),
  city: string().required("City name cannot be empty"),
};
