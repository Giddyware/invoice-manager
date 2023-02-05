import React from "react";
import { images } from "../../constants";
import { FiPlus } from "react-icons/fi";
import { AiFillCiCircle } from "react-icons/ai";

const icons = {
  "arrow-down": images.arrowDownIcon,
  "arrow-left": images.arrowLeftIcon,
  "arrow-right": images.arrowRightIcon,
  calendar: images.calendarIcon,
  "delete-icon": images.deleteIcon,
  "check-icon": images.checkIcon,
  "moon-icon": images.moonIcon,
  "sun-icon": images.sunIcon,
  "illustration-empty": images.illustrationEmpty,
  "plus-icon": FiPlus,
  "circle-icon": AiFillCiCircle,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <div strokeWidth={strokeWidth} {...delegated}>
      <Component
        strokeWidth={strokeWidth}
        color={color}
        fill={color}
        size={size}
      />
    </div>
  );
};

export default Icon;
