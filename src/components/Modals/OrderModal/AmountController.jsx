import React from "react";

export default function AmountController({ amount, onAdd, onSubtract }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        className="w-8 h-8 text-center rounded bg-primaryDark text-white/80 shadown-sm"
        onClick={onAdd}
      >
        +
      </button>
      <p className="w-8 h-8 border border-gray-400 rounded-sm text-center font-medium flex items-center justify-center">
        {amount}
      </p>
      <button
        className="w-8 h-8 text-center rounded bg-primaryDark text-white/80 shadown-sm"
        onClick={onSubtract}
      >
        -
      </button>
    </div>
  );
}
