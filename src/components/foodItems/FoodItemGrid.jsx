import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import { AppContext } from "../context/AppContextProvides";

export default function FoodItemGrid() {
  const appCtx = useContext(AppContext);
  return (
    <div className="max-w-module mx-auto grid grid-cols-3 gap-5 ">
      {Object.entries(appCtx.foodItems).map(([id, item]) => (
        <ItemCard key={id} id={id} {...item} />
      ))}
    </div>
  );
}
