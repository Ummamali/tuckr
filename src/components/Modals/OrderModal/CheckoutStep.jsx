import React, { useActionState, useContext, useEffect } from "react";
import { animate } from "animejs";
import ValidatedRefFG from "../../utils/ValidatedRefFG";
import useValidator from "../../../hooks/useValidator";
import { validator } from "./checkoutValidations";
import { requestCreateOrder } from "../../../backend/connect";
import { AppContext } from "../../context/AppContextProvides";
import { animateFadeIn } from "../../../utilities/animations";

export default function CheckoutStep({
  startExit,
  afterExit,
  afterSubmission,
}) {
  const appCtx = useContext(AppContext);
  const [validityStatuses, validate, validateAll, dispatchValidity] =
    useValidator(validator);

  useEffect(() => {
    animateFadeIn(".checkout-step");
  }, []);

  useEffect(() => {
    if (startExit) {
      animate(".checkout-step", {
        opacity: 0,
        duration: 250,
        easing: "easeOutQuad",
        onComplete: afterExit,
      });
    }
  }, [startExit]);

  async function formAction(prevState, formData) {
    const formValues = Object.fromEntries(formData.entries());
    const items = appCtx.orders;
    const proceed = await validateAll(formValues);
    if (proceed) {
      const res = await requestCreateOrder({ ...formValues, items });
      if (res.ok) {
        afterSubmission();
        return {};
      }
    } else {
      return formValues;
    }
  }

  const [formState, action, formPending] = useActionState(formAction, {});
  return (
    <div className="checkout-step opacity-0">
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
        <button
          className="py-2 px-14 bg-highlight text-white/90 block ml-auto rounded shadow-sm"
          disabled={formPending}
        >
          {formPending ? "Ordering..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
