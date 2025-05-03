import React from "react";
import RefFormGroup from "./RefFormGroup";
import { vActions } from "../../hooks/useValidator";

// This specialized version of RefFG component is to be used with useValidator Hook

/*
  Sample Use case for this Componet:
      <ValidatedRefFG
        ref={nameRef}
        identity="studentName"
        label="Name"
        validityStatuses={validityStatuses}
        dispatchValidity={dispatchValidity}
        inputProps={{
          placeholder: "Enter student name here...",
          onBlur: (e) => validate("studentName", e.target.value),
        }}
      />
*/
export default function ValidatedRefFG({
  ref,
  identity,
  validityStatuses,
  inputProps,
  dispatchValidity,
  ...otherProps
}) {
  const isInvalid = validityStatuses[identity].vStatus === 3;
  const isSurelyValid = validityStatuses[identity].vStatus === 2;
  return (
    <div
      className={`validated-ref-fg ${
        isInvalid ? "invalid" : isSurelyValid ? "valid" : ""
      }`}
    >
      <RefFormGroup
        ref={ref}
        identity={identity}
        errorShown={validityStatuses[identity].vStatus === 3}
        errorMessage={validityStatuses[identity].msg}
        inputProps={{
          onFocus: () => dispatchValidity(vActions.RESET({ identity })),
          "data-identity": identity,
          ...inputProps,
        }}
        {...otherProps}
      />
      <p className="err-msg">{validityStatuses[identity].msg}</p>
    </div>
  );
}
