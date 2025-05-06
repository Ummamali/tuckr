import { useState } from "react";

export default function useSteps(stepCount, startFrom = 0) {
  const [step, setStep] = useState(startFrom);

  function jump(amount, absolute = false) {
    if (absolute) {
      setStep(amount);
    } else {
      setStep((curr) => {
        const r = Math.abs(amount) % stepCount;
        return amount > 0
          ? (curr + amount) % stepCount
          : r <= curr
          ? curr - r
          : stepCount - (r - curr);
      });
    }
  }

  return [step, jump];
}
