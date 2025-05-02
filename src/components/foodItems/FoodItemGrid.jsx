import React from "react";
import ItemCard from "./ItemCard";

const dummyFoodItems = {
  itemOne: {
    title: "Burger",
    price: 8.98,
    description: "Juicy grilled beef burger with cheese and lettuce.",
    imgSrc: "/food.jpg",
  },
  itemTwo: {
    title: "Margherita Pizza",
    price: 10.5,
    description: "Classic Italian pizza with fresh mozzarella and basil.",
    imgSrc: "/food.jpg",
  },
  itemThree: {
    title: "Chicken Biryani",
    price: 12.75,
    description: "Spiced basmati rice with tender chicken and herbs.",
    imgSrc: "/food.jpg",
  },
  itemFour: {
    title: "Caesar Salad",
    price: 7.25,
    description: "Romaine lettuce with Caesar dressing and croutons.",
    imgSrc: "/food.jpg",
  },
  itemFive: {
    title: "Tacos",
    price: 9.0,
    description: "Three tacos with your choice of beef or chicken.",
    imgSrc: "/food.jpg",
  },
  itemSix: {
    title: "Sushi Platter",
    price: 14.99,
    description: "Assorted sushi rolls served with soy sauce and wasabi.",
    imgSrc: "/food.jpg",
  },
  itemSeven: {
    title: "Pad Thai",
    price: 11.5,
    description: "Thai rice noodles stir-fried with veggies and peanuts.",
    imgSrc: "/food.jpg",
  },
  itemEight: {
    title: "Pasta Alfredo",
    price: 10.75,
    description: "Creamy Alfredo sauce over fettuccine pasta.",
    imgSrc: "/food.jpg",
  },
  itemNine: {
    title: "Grilled Salmon",
    price: 16.25,
    description: "Salmon fillet grilled to perfection with lemon butter.",
    imgSrc: "/food.jpg",
  },
  itemTen: {
    title: "Chocolate Cake",
    price: 6.0,
    description: "Rich, moist chocolate cake with a fudge frosting.",
    imgSrc: "/food.jpg",
  },
};

export default function FoodItemGrid() {
  return (
    <div className="max-w-module mx-auto grid grid-cols-3 gap-5 ">
      {Object.entries(dummyFoodItems).map(([id, item]) => (
        <ItemCard key={id} id={id} {...item} />
      ))}
    </div>
  );
}
