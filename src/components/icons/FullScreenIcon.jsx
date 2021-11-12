const FullScreenIcon = ({
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
        d="M22.5 4.5L25.95 7.95L21.615 12.255L23.745 14.385L28.05 10.05L31.5 13.5V4.5H22.5ZM4.5 13.5L7.95 10.05L12.255 14.385L14.385 12.255L10.05 7.95L13.5 4.5H4.5V13.5ZM13.5 31.5L10.05 28.05L14.385 23.745L12.255 21.615L7.95 25.95L4.5 22.5V31.5H13.5ZM31.5 22.5L28.05 25.95L23.745 21.615L21.615 23.745L25.95 28.05L22.5 31.5H31.5V22.5Z"
        fill={color}
      />
    </svg>
  );
};

export default FullScreenIcon;
