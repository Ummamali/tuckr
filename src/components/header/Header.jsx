import React, { useContext, useEffect, useRef } from "react";
import { animate, createSpring } from "animejs";
import { AppContext } from "../context/AppContextProvides";

export default function Header() {
  const appCtx = useContext(AppContext);
  const ordersCount = Object.values(appCtx.orders).reduce((a, b) => a + b, 0);
  function bounce() {
    // Created a bounce animation loop
    animate(".cartBtn", {
      scale: [
        { to: 1.2, ease: "inOut(3)", duration: 140 },
        { to: 1, ease: createSpring({ stiffness: 300 }) },
      ],
    });
  }
  useEffect(() => {
    bounce();
  }, [ordersCount]);

  return (
    <header className="sticky top-0 left-0 bg-secondaryDark z-10">
      <div className="max-w-app mx-auto px-appX py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" width={70} />
          <h2 className="font-logo text-3xl text-highlight">Tuckr</h2>
        </div>
        <button
          className={`cartBtn py-2 px-10 border border-highlight rounded-sm text-highlight`}
          onClick={appCtx.openOrderModal}
        >
          Cart ({ordersCount})
        </button>
      </div>
    </header>
  );
}
