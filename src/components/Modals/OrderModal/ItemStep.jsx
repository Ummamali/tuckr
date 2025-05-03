import React, { useEffect } from "react";
import ModalList from "./ModalList";
import { animate } from "animejs";

export default function ItemStep({ fadeout, afterFadeout }) {
  useEffect(() => {
    animate(".items-step", {
      opacity: 1,
      duration: 250,
      easing: "easeOutQuad",
    });
  }, []);

  useEffect(() => {
    if (fadeout) {
      animate(".items-step", {
        opacity: 0,
        height: 0,
        duration: 250,
        easing: "easeOutQuad",
        onComplete: afterFadeout,
      });
    }
  }, [fadeout]);
  return (
    <div className="items-step opacity-0 ">
      <div className="mb-4">
        <h2 className="text-2xl text-black/80">Your Cart</h2>
        <p className="text-sm text-black/60">
          Don’t Miss Out — Complete Your Order Now
        </p>
      </div>
      <ModalList />
    </div>
  );
}
