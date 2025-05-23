import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvides";

export default function ItemCard({ id, imgSrc, title, price, description }) {
  const appCtx = useContext(AppContext);
  return (
    <div className="bg-primaryDark shadow rounded overflow-hidden">
      <div className="relative w-full h-[240px]">
        <img
          src={imgSrc}
          alt={`Food ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-8 px-5 text-center">
        <h3 className="text-one mb-3 text-xl">{title}</h3>
        <p className="bg-highlight/10 w-max px-8 py-2 mx-auto rounded-sm mb-3 text-highlight">
          ${price.toFixed(2)}
        </p>
        <p className="text-three text-sm mb-3">{description}</p>
        <button
          className="py-1.5 px-8 bg-highlight rounded-sm"
          onClick={() => appCtx.placeOrder(id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
