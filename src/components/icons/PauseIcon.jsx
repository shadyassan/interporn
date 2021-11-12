const PauseIcon = ({ width = '36', height = '36', color = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#pauseclip)">
        <rect x="6" y="4" width="6" height="28" fill={color} />
        <rect x="21" y="4" width="6" height="28" fill={color} />
      </g>
      <defs>
        <clipPath id="pauseclip">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PauseIcon;
