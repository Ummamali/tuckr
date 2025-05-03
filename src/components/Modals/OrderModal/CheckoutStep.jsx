import React, { useEffect } from "react";
import RefFormGroup from "../../utils/RefFormGroup";
import ValidatedRefFG from "../../utils/ValidatedRefFG";
import useValidator from "../../../hooks/useValidator";
import { animate } from "animejs";

const identityList = {
  firstName: "Invalid First Name...",
  lastName: "Invalid Last Name...",
  emailAddress: "Invalid Email Address...",
  street: "Invalid street Address...",
  postalCode: "Invalid postal code...",
  city: "Invalid city ...",
};

const validatorPredicates = {
  firstName: (value) => ({ isValid: value.length > 0 }),
  lastName: (value) => ({ isValid: value.length > 0 }),
  emailAddress: (value) => ({ isValid: value.length > 0 }),
  street: (value) => ({ isValid: value.length > 0 }),
  postalCode: (value) => ({ isValid: value.length > 0 }),
  city: (value) => ({ isValid: value.length > 0 }),
};

export default function CheckoutStep({ fadeout, afterFadeout }) {
  const { validityStatuses, validate, dispatchValidity } = useValidator(
    identityList,
    validatorPredicates
  );

  useEffect(() => {
    if (fadeout === "CHECKOUT_STEP") {
      animate(".checkout-step", {
        opacity: 0,
        height: 0,
        duration: 250,
        easing: "easeOutQuad",
        onComplete: afterFadeout,
      });
    }
  }, [fadeout]);
  return (
    <div className="checkout-step">
      <div className="mb-4">
        <h2 className="text-2xl text-black/80">Checkout</h2>
        <p className="text-sm text-black/60">
          Enter Your Details to Complete Your Purchase
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ValidatedRefFG
            identity="firstName"
            label="First Name"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter first name here...",
              onBlur: (e) => validate("firstName", e.target.value),
            }}
          />
          <ValidatedRefFG
            identity="lastName"
            label="Last Name"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter last name here...",
              onBlur: (e) => validate("lastName", e.target.value),
            }}
          />
        </div>
        <ValidatedRefFG
          identity="emailAddress"
          label="Email Address"
          validityStatuses={validityStatuses}
          dispatchValidity={dispatchValidity}
          inputProps={{
            placeholder: "Enter last name here...",
            onBlur: (e) => validate("emailAddress", e.target.value),
          }}
        />
        <ValidatedRefFG
          identity="street"
          label="Street"
          validityStatuses={validityStatuses}
          dispatchValidity={dispatchValidity}
          inputProps={{
            placeholder: "Enter street address here...",
            onBlur: (e) => validate("street", e.target.value),
          }}
        />
        <div className="grid grid-cols-2 gap-4">
          <ValidatedRefFG
            identity="postalCode"
            label="Postal Code"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter postal code here...",
              onBlur: (e) => validate("postalCode", e.target.value),
            }}
          />
          <ValidatedRefFG
            identity="city"
            label="City"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter city name here...",
              onBlur: (e) => validate("city", e.target.value),
            }}
          />
        </div>
      </form>
    </div>
  );
}
