import React from "react";

export default function RefFormGroup({ ref, identity, label, inputProps }) {
  return (
    <div className="ref-form-group">
      <label htmlFor={identity}>{label}</label>
      <input id={identity} name={identity} ref={ref} {...inputProps} />
    </div>
  );
}
