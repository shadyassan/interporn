const VolumeDownIcon = ({
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
      <path
        d="M4.5 13.5V22.5H10.5L18 30V6L10.5 13.5H4.5ZM24.75 18C24.75 15.345 23.22 13.065 21 11.955V24.03C23.22 22.935 24.75 20.655 24.75 18Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeDownIcon;
