import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvides";
import AmountController from "./AmountController";

export default function ModalList() {
  const appCtx = useContext(AppContext);
  const foodItems = appCtx.foodItems;
  return (
    <div className="space-y-2">
      {Object.entries(appCtx.orders).map(([foodId, count]) => (
        <div key={foodId} className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-black/80">
              {foodItems[foodId].title}
            </h3>
            <p className="text-black/80">
              {count} <i className="fa-solid fa-xmark text-black/70"></i> $
              {foodItems[foodId].price} =
              <span className="text-highlight brightness-90">
                ${(count * foodItems[foodId].price).toFixed(2)}
              </span>
            </p>
          </div>
          <AmountController
            amount={count}
            onAdd={() => appCtx.placeOrder(foodId, 1)}
            onSubtract={() => appCtx.placeOrder(foodId, -1)}
          />
        </div>
      ))}
    </div>
  );
}
