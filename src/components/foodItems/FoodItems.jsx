import React from "react";
import FoodItemGrid from "./FoodItemGrid";

export default function FoodItems() {
  return (
    <div className="max-w-module px-appX py-6 mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-2xl text-white/80">Top Picks Just for You</h2>
          <p className="text-sm text-three">
            The stars of our menu, all in one place
          </p>
        </div>
        <p className="text-sm italic text-two">20 items</p>
      </div>
      <FoodItemGrid />
    </div>
  );
}
