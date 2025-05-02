import React from "react";

export default function ItemCard({ id, imgSrc, title, price, description }) {
  return (
    <div className="bg-primaryDark shadow rounded overflow-hidden">
      <div className="relative w-full h-[240px]">
        <img
          src={imgSrc}
          alt={`Food ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-5 px-3 text-center">
        <h3 className="text-one mb-1 text-lg">{title}</h3>
        <p className="bg-secondaryDark w-max px-8 py-2 mx-auto rounded-sm mb-3 text-accent">
          ${price}
        </p>
        <p className="text-three text-sm mb-3">{description}</p>
        <button className="py-1.5 px-8 bg-highlight rounded-sm">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
