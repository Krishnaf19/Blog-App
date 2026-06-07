import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    autoComplete,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-2 pl-1 font-semibold text-gray-700 text-sm"
        >
          {label}
        </label>
      )}

      <input
        ref={ref}
        id={id}
        type={type}
        autoComplete={autoComplete}
        className={`px-4 py-3 rounded-lg text-gray-900 outline-none focus:bg-transparent focus:ring-2 focus:ring-blue-200 duration-200 border-2 border-white/30 glass-input hover:border-white/40 w-full transition-all ${className}`}
        {...props}
      />

    </div>
  );
});

export default Input;
