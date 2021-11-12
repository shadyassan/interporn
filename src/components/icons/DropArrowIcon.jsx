const DropArrowIcon = ({
  width = '13',
  height = '9',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.12094 0.652344L6.71094 5.81609L11.3009 0.652344L12.7109 2.24984L6.71094 8.99984L0.710938 2.24984L2.12094 0.652344Z"
        fill={color}
      />
    </svg>
  );
};

export default DropArrowIcon;
