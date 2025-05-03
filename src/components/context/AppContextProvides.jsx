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
  additionalCharges: [],
});

export default function AppContextProvides({ children }) {
  const [foodItems, setFoodItems] = useState({});
  const [orders, setOrders] = useState({});
  const [orderModalOpen, openOrderModal, closeOrderModal] = useModal();

  const additionalCharges = [
    ["Shipping", "Free"],
    ["Estimated Tax", "$0.00"],
    ["Est. Delivery", "3-4 hours"],
  ];

  function loadFoodItems(newItems) {
    setFoodItems((prev) => ({ ...prev, ...newItems }));
  }

  function placeOrder(orderId, amount = 1) {
    setOrders((prev) => {
      const cp = { ...prev };
      const newAmount =
        cp[orderId] !== undefined ? cp[orderId] + amount : amount;

      if (newAmount <= 0) {
        delete cp[orderId];
      } else {
        cp[orderId] = newAmount;
      }
      return cp;
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
        additionalCharges,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
