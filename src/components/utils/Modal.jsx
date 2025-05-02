import React from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  close,
  closeOnBackdropClick = true,
}) {
  return createPortal(
    <div className="fixed w-screen h-screen z-10 top-0 left-0">
      <div
        className="absolute w-full h-full top-0 left-0 bg-black/90 cursor-pointer"
        onClick={closeOnBackdropClick ? close : undefined}
      ></div>
      <div className="relative max-w-2xl bg-white mt-6 mx-auto px-10 py-8 rounded-sm">
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
