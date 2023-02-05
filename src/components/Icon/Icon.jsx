import React from "react";
import { images } from "../../constants";
import { FiPlus } from "react-icons/fi";
import { AiFillCiCircle } from "react-icons/ai";

// import styled from 'styled-components/macro';
// import {
//   Search,
//   Menu,
//   ShoppingBag,
//   ChevronDown,
// } from 'react-feather';

const icons = {
  "arrow-down": images.arrowDownIcon,
  "arrow-left": images.arrowLeftIcon,
  "arrow-right": images.arrowRightIcon,
  calendar: images.calendarIcon,
  "delete-icon": images.deleteIcon,
  "check-icon": images.checkIcon,
  "moon-icon": images.moonIcon,
  // "plus-icon": images.plusIcon,
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
      {/* <svg className=''> */}
      <Component
        strokeWidth={strokeWidth}
        color={color}
        fill={color}
        size={size}
      />
      {/* </svg> */}
    </div>
  );
};

// const Wrapper = styled.div`
//   & > svg {
//     display: block;
//     stroke-width: ${(p) => p.strokeWidth}px;
//   }
// `;

export default Icon;
