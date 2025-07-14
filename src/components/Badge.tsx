import React from "react";

interface BadgeProps {
  type: "status" | "priority";
  value: string;
}

const getColor = (type: string, value: string) => {
  if (type === "status") {
    switch (value) {
      case "In-process":
        return "bg-yellow-100 text-yellow-800";
      case "Need to start":
        return "bg-blue-100 text-blue-800";
      case "Complete":
        return "bg-green-100 text-green-800";
      case "Blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  } else {
    switch (value) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }
};

const Badge: React.FC<BadgeProps> = ({ type, value }) => {
  const color = getColor(type, value);

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>
      {value}
    </span>
  );
};

export default Badge;
