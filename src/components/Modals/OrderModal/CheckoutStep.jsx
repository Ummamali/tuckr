import React, { useActionState, useEffect } from "react";
import { animate } from "animejs";
import RefFormGroup from "../../utils/RefFormGroup";
import ValidatedRefFG from "../../utils/ValidatedRefFG";
import useValidator, { syncValidateAll } from "../../../hooks/useValidator";
import { identityList, validatorPredicates } from "./checkoutValidations";

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

  function formAction(prevState, formData) {
    const formValues = Object.fromEntries(formData.entries());
    if (syncValidateAll(formValues, validate)) {
      console.log("submitted");
      return {};
    } else {
      return formValues;
    }
  }

  const [formState, action] = useActionState(formAction, {});
  return (
    <div className="checkout-step">
      <div className="mb-4">
        <h2 className="text-2xl text-black/80">Checkout</h2>
        <p className="text-sm text-black/60">
          Enter Your Details to Complete Your Purchase
        </p>
      </div>
      <form className="space-y-4" action={action}>
        <div className="grid grid-cols-2 gap-4">
          <ValidatedRefFG
            identity="firstName"
            label="First Name"
            validityStatuses={validityStatuses}
            dispatchValidity={dispatchValidity}
            inputProps={{
              placeholder: "Enter first name here...",
              onBlur: (e) => validate("firstName", e.target.value),
              defaultValue: formState.firstName,
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
              defaultValue: formState.lastName,
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
            defaultValue: formState.emailAddress,
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
            defaultValue: formState.street,
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
              defaultValue: formState.postalCode,
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
              defaultValue: formState.city,
            }}
          />
        </div>
        <button className="py-2 px-14 bg-highlight text-white/90 block ml-auto rounded shadow-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
