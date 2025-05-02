import React, { createContext, useState } from "react";
import { useModal } from "../../hooks/useModal";

export const AppContext = createContext({
  foodItems: {},
  loadFoodItems: () => null,
  orderModalOpen: null,
  openOrderModal: () => null,
  closeOrderModal: () => null,
  orders: {},
  placeOrder: () => null,
});

export default function AppContextProvides({ children }) {
  const [foodItems, setFoodItems] = useState({});
  const [orders, setOrders] = useState({});
  const [orderModalOpen, openOrderModal, closeOrderModal] = useModal();

  function loadFoodItems(newItems) {
    setFoodItems((prev) => ({ ...prev, ...newItems }));
  }

  function placeOrder(orderId) {
    setOrders((prev) => {
      const cp = { ...prev };
      cp[orderId] = cp[orderId] !== undefined ? cp[orderId] + 1 : 1;
    });
  }
  return (
    <AppContext.Provider
      value={{
        foodItems,
        loadFoodItems,
        orderModalOpen,
        openOrderModal,
        closeOrderModal,
        orders,
        placeOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
