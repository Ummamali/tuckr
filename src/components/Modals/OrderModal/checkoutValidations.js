import { makeValidatorPredicates } from "../../../utilities/utilFuncs";
import { string, number } from "yup";

export const identityList = {
  firstName: "Invalid First Name...",
  lastName: "Invalid Last Name...",
  emailAddress: "Invalid Email Address...",
  street: "Invalid street Address...",
  postalCode: "Invalid postal code...",
  city: "Invalid city ...",
};

// export const validatorPredicates = {
//   firstName: (value) => ({ isValid: value.length > 0 }),
//   lastName: (value) => ({ isValid: value.length > 0 }),
//   emailAddress: (value) => ({ isValid: value.length > 0 }),
//   street: (value) => ({ isValid: value.length > 0 }),
//   postalCode: (value) => ({ isValid: value.length > 0 }),
//   city: (value) => ({ isValid: value.length > 0 }),
// };

export const validatorPredicates = {
  firstName: string().required("First name cannot be empty...."),
  lastName: string().required("Last name cannot be empty...."),
  emailAddress: string()
    .email("Invalid email address provided...")
    .required("Email address cannot be empty...."),
  street: string().required("Street address cannot be empty"),
  postalCode: number().typeError("Invalid Postal Code provided..."),
  city: string().required("City name cannot be empty"),
};
