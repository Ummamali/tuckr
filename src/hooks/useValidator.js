import { useReducer, useMemo } from "react";

// this hook is to be used with FormGroup components to invalidate the inputs

// actions
export const vActions = {
  SET: (payload) => ({ type: "SET", payload }),
  RESET: (payload) => ({ type: "RESET", payload }),
  RESETALL: (payload) => ({ type: "RESETALL", payload }),
};

function validityReducer(state, action) {
  if (action.type === "SET") {
    const stateCp = { ...state };
    const groupObject = stateCp[action.payload.identity];
    stateCp[action.payload.identity] = {
      ...groupObject,
      ...action.payload.new,
    };
    return stateCp;
  } else if (action.type === "RESET") {
    const stateCp = { ...state };
    stateCp[action.payload.identity].vStatus = 0;
    return stateCp;
  } else if (action.type === "RESETALL") {
    const stateCp = { ...state };
    for (const vObject of Object.values(stateCp)) {
      vObject.vStatus = 0;
    }
    return stateCp;
  } else {
    console.warn("Found invalid action for reducer");
    return state;
  }
}
export default function useValidator(validator) {
  /* 
  Inputs:
  >>>>> validator: object ----> {[identity]: predicateFunc}
      Note: object of objects having a property "validate" which should return/resolve an object {*isValid: boolean, msg: String | null}
      Though it is not necessary to return a msg, if msg has a falsy value default error msg provided from identityList will be used
   */

  /*
    Signature:
      const {validityStatus, dispatchValidity, validate} = useValidator(validator);
  
  */

  // Initial value will be calculated only for the first time
  const initialValue = useMemo(() => {
    return Object.fromEntries(
      Object.keys(validator).map((key) => [key, { vStatus: 0, msg: null }])
    );
  }, [validator]);

  const [validityStatuses, dispatchValidity] = useReducer(
    validityReducer,
    initialValue
  );

  // this is the majic function which will validate
  async function validate(identity, value) {
    // The validate async function resolves to a boolean value and also modifies the validationStatus of the field
    dispatchValidity(vActions.SET({ identity: identity, new: { vStatus: 1 } }));

    try {
      await validator[identity].validate(value);
    } catch (err) {
      dispatchValidity(
        vActions.SET({
          identity: identity,
          new: { vStatus: 3, msg: err.message },
        })
      );
      return false;
    }
    dispatchValidity(
      vActions.SET({
        identity: identity,
        new: { vStatus: 2, msg: null },
      })
    );
    return true;
  }

  async function validateAll(currentValues) {
    const validations = Object.entries(currentValues).map(([identity, value]) =>
      validate(identity, value)
    );
    const resolved = await Promise.all(validations);
    return !resolved.includes(false);
  }

  return [validityStatuses, validate, validateAll, dispatchValidity];
}

// =============================================================================
// Some utility functions to be used

export function validateOnBlur(validate) {
  /*
  Returns a blur event handler which will validate on blur:
    -- validate should be the same function as returned by the hook
  */
  return (e) => {
    const target = e.target;
    validate(target.dataset.identity, target.value);
  };
}

export function resetOnFocus(dispatchValidator) {
  /*
  Returns a focus event handler which will reset validate on focus:
    -- dispatchValidator should be the same function as returned by the hook
  */
  return (e) => {
    const identity = e.target.dataset.identity;
    dispatchValidator(vActions.RESET({ identity }));
  };
}
