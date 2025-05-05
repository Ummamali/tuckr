import { number } from "yup";

export function predicateFromYup(yupValidator) {
  return (value) => {
    try {
      yupValidator.validateSync(value);
    } catch (err) {
      return { isValid: false, msg: err.message };
    }
    return { isValid: true };
  };
}

export function makeValidatorPredicates(yupPerdicates) {
  const vp = {};
  for (const [identity, v] of yupPerdicates) {
    vp[identity] = predicateFromYup(v);
  }
  return vp;
}
