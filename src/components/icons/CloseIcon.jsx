const CloseIcon = ({ width = 15, height = 15, color = 'currentColor' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5 1.535L13.09 0.125L7.5 5.715L1.91 0.125L0.5 1.535L6.09 7.125L0.5 12.715L1.91 14.125L7.5 8.535L13.09 14.125L14.5 12.715L8.91 7.125L14.5 1.535Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;
