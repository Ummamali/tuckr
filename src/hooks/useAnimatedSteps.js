import { useState } from "react";
import useSteps from "./useSteps";

export default function useAnimatedSteps(stepCount, startFrom = 0) {
  const [step, jump] = useSteps(stepCount, startFrom);
  const [exitOrder, setExitOrder] = useState([null, null]);

  function transition(jumpAmount) {
    setExitOrder([step, jumpAmount]);
  }

  return [step, jump, exitOrder, transition];
}
