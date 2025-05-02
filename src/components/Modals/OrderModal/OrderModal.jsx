import React, { useContext } from "react";
import Modal from "../../utils/Modal";
import { AppContext } from "../../context/AppContextProvides";

export default function OrderModal() {
  const appCtx = useContext(AppContext);
  return <Modal close={appCtx.closeOrderModal}>Order Modal</Modal>;
}
