const PlayIcon = ({ width = '36', height = '36', color = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#playclip)">
        <path d="M7 4V32L29 18L7 4Z" fill={color} />
      </g>
      <defs>
        <clipPath id="playclip">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayIcon;
