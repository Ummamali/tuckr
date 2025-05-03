export const identityList = {
  firstName: "Invalid First Name...",
  lastName: "Invalid Last Name...",
  emailAddress: "Invalid Email Address...",
  street: "Invalid street Address...",
  postalCode: "Invalid postal code...",
  city: "Invalid city ...",
};

export const validatorPredicates = {
  firstName: (value) => ({ isValid: value.length > 0 }),
  lastName: (value) => ({ isValid: value.length > 0 }),
  emailAddress: (value) => ({ isValid: value.length > 0 }),
  street: (value) => ({ isValid: value.length > 0 }),
  postalCode: (value) => ({ isValid: value.length > 0 }),
  city: (value) => ({ isValid: value.length > 0 }),
};
