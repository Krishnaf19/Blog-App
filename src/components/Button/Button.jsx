import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-gradient-to-r from-blue-600 to-blue-700",
    textColor = "text-white",
    className = "cursor-pointer",
    ...props
}) {
    return (
        <button className={`px-6 py-3 rounded-lg font-semibold ${bgColor} ${textColor} ${className} transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95`} {...props}>
            {children}
        </button>
    );
}