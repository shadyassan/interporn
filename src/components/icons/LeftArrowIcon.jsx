import React from 'react';

const LeftArrowIcon = ({ width = 19, height = 30, color = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.005 2.8049L15.35 0.149902L0.5 14.9999L15.35 29.8499L18.005 27.1949L5.81 14.9999L18.005 2.8049Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
