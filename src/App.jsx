import React from "react";
import Header from "./components/header/Header";
import FoodItemGrid from "./components/foodItems/FoodItemGrid";

export default function App() {
  return (
    <main className="min-h-screen bg-secondaryDark">
      <Header />
      <FoodItemGrid />
    </main>
  );
}
