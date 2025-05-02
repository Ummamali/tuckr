import React, { useEffect } from "react";
import Header from "./components/header/Header";
import FoodItemGrid from "./components/foodItems/FoodItemGrid";
import FoodItems from "./components/foodItems/FoodItems";
import useRequest from "./hooks/useRequest";
import { requestFoodItems } from "./backend/connect";

export default function App() {
  return (
    <main className="min-h-screen bg-secondaryDark font-app">
      <Header />
      <FoodItems />
    </main>
  );
}
