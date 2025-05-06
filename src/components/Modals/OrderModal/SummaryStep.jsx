import React, { useContext, useEffect } from "react";
import { animateFadeIn } from "../../../utilities/animations";
import { AppContext } from "../../context/AppContextProvides";

export default function SummaryStep() {
  const appCtx = useContext(AppContext);
  useEffect(() => animateFadeIn(".summary-step"), []);
  return (
    <div className="summary-step opacity-0 text-center">
      <p>
        <i className="fa-solid fa-check text-2xl text-green-700"></i>
      </p>
      <h2 className="text-2xl text-black/80 mb-3">Thank you for your order!</h2>
      <p className="text-black/70 leading-5 mb-5 max-w-lg mx-auto">
        Your order has been placed successfully. We will contact you shortly via
        email with the next steps and updates. If you have any questions in the
        meantime, feel free to reach out.
      </p>
      <button
        className="py-2 px-8 border border-gray-400/70 rounded-sm"
        onClick={appCtx.closeOrderModal}
      >
        Close
      </button>
    </div>
  );
}
