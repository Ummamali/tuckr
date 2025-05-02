import React, { createContext, useState } from "react";
import { useModal } from "../../hooks/useModal";

export const AppContext = createContext({
  foodItems: {},
  loadFoodItems: () => null,
  orderModalOpen: null,
  openOrderModal: () => null,
  closeOrderModal: () => null,
});

export default function AppContextProvides({ children }) {
  const [foodItems, setFoodItems] = useState({});
  const [orderModalOpen, openOrderModal, closeOrderModal] = useModal();

  function loadFoodItems(newItems) {
    setFoodItems((prev) => ({ ...prev, ...newItems }));
  }
  return (
    <AppContext.Provider
      value={{
        foodItems,
        loadFoodItems,
        orderModalOpen,
        openOrderModal,
        closeOrderModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
