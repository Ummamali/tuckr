import React, { useContext, useEffect } from "react";
import FoodItemGrid from "./FoodItemGrid";
import useRequest from "../../hooks/useRequest";
import { requestFoodItems } from "../../backend/connect";
import { AppContext } from "../context/AppContextProvides";

export default function FoodItems() {
  const appCtx = useContext(AppContext);
  const { loadStatus, sendRequest } = useRequest(requestFoodItems);

  useEffect(() => {
    sendRequest().then((resObj) => {
      appCtx.loadFoodItems(resObj);
    });
  }, []);
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
      {loadStatus === 1 && <p className="text-two text-center">Loading...</p>}
      {loadStatus === 2 && <FoodItemGrid />}
    </div>
  );
}
