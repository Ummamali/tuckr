import React from "react";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-app mx-auto px-appX py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" width={70} />
          <h2 className="font-logo text-3xl text-highlight">Tuckr</h2>
        </div>
        <button className="py-2 px-10 border border-highlight rounded-sm text-highlight">
          Cart (5)
        </button>
      </div>
    </header>
  );
}
