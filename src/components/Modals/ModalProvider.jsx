import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvides";
import OrderModal from "./OrderModal/OrderModal";

export default function ModalProvider({ children }) {
  const appCtx = useContext(AppContext);
  return (
    <>
      {appCtx.orderModalOpen && <OrderModal />} {children}
    </>
  );
}
