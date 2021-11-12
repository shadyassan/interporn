const FullScreenExitIcon = ({
  width = '36',
  height = '36',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M27.1672 17.9864L23.8397 14.6695L30.5805 7.92847L28.6546 6.00279L21.8143 12.6505L18.4867 9.33361L18.5006 18.0003L27.1672 17.9864Z"
          fill={color}
        />
        <path
          d="M31 31.963H5V5M5 5.96296H12.7037M30.037 23.2963L30.0472 31"
          stroke={color}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="36" height="36" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FullScreenExitIcon;
