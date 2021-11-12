import React from 'react';

const RightArrowIcon = ({
  width = 19,
  height = 30,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.320312 3.18L12.1403 15L0.320312 26.82L3.50031 30L18.5003 15L3.50031 0L0.320312 3.18Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowIcon;
