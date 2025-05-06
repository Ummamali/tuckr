import React, { useContext, useState } from "react";
import Modal from "../../utils/Modal";
import { AppContext } from "../../context/AppContextProvides";
import ModalList from "./ModalList";
import ItemStep from "./ItemStep";
import CheckoutStep from "./CheckoutStep";
import useSteps from "../../../hooks/useSteps";
import SummaryStep from "./SummaryStep";
import useAnimatedSteps from "../../../hooks/useAnimatedSteps";

export default function OrderModal() {
  const [fadeout, setFadeout] = useState(null);
  const [step, jump, exitOrder, transition] = useAnimatedSteps(3);
  const appCtx = useContext(AppContext);
  const total = Object.entries(appCtx.orders)
    .map(([id, count]) => appCtx.foodItems[id].price * count)
    .reduce((a, b) => a + b, 0);

  return (
    <Modal close={appCtx.closeOrderModal}>
      {step === 0 ? (
        <ItemStep
          startExit={exitOrder[0] === 0}
          afterExit={() => jump(exitOrder[1])}
        />
      ) : step === 1 ? (
        <CheckoutStep
          startExit={exitOrder[0] === 1}
          afterExit={() => jump(exitOrder[1])}
          afterSubmission={() => transition(1)}
        />
      ) : (
        <SummaryStep />
      )}
      {step !== 2 ? (
        <div className="mt-4 border-t border-gray-400/60 py-3 flex justify-between items-end">
          <div className="flex items-center space-x-2">
            <img src="/shield.png" alt="Shield-X" width={30} />
            <p className="text-black/70 max-w-40 text-xs">
              Payment secured with encryption using Shield-X
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-right text-black/80">
              ${total.toFixed(2)}
            </h3>
            <div className="text-sm text-right text-black/75 mb-3">
              {appCtx.additionalCharges.map(([title, value]) => (
                <p key={title}>
                  {title}: {value}
                </p>
              ))}
            </div>
            <div className="flex space-x-3 justify-end">
              <button onClick={appCtx.closeOrderModal}>Close</button>
              <button
                className={`py-2 px-8 rounded ${
                  step === 0
                    ? "bg-highlight text-white/80"
                    : "border border-highlight text-highlight"
                }`}
                onClick={() => (step === 0 ? transition(1) : transition(-1))}
                disabled={Object.keys(appCtx.orders).length === 0}
              >
                {step === 0 ? "Go to Checkout" : "Go Back"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
