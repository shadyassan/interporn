import React from 'react';

const PlayBigIcon = ({
  width = '28',
  height = '35',
  className,
  color = 'currentColor',
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 35"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0.211182 0V35L27.7112 17.5L0.211182 0Z" fill={color} />
    </svg>
  );
};

export default PlayBigIcon;
