import React, { useContext, useState } from "react";
import Modal from "../../utils/Modal";
import { AppContext } from "../../context/AppContextProvides";
import ModalList from "./ModalList";
import ItemStep from "./ItemStep";
import CheckoutStep from "./CheckoutStep";

const MODAL_STEPS = ["ITEMS", "CHECKOUT"];

export default function OrderModal() {
  const [itemsFadeout, setItemsFadeout] = useState(false);
  const [step, setStep] = useState(0);
  const appCtx = useContext(AppContext);
  const total = Object.entries(appCtx.orders)
    .map(([id, count]) => appCtx.foodItems[id].price * count)
    .reduce((a, b) => a + b, 0);
  return (
    <Modal close={appCtx.closeOrderModal}>
      {step === 0 ? (
        <ItemStep
          fadeout={itemsFadeout}
          afterFadeout={() => setStep((prev) => prev + 1)}
        />
      ) : step === 1 ? (
        <CheckoutStep />
      ) : null}
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
              className="py-2 px-8 bg-highlight rounded text-white/80"
              onClick={() => setItemsFadeout(true)}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
