const VolumeUpIcon = ({
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
        d="M4.5 13.5002V22.5002H10.5L18 30.0002V6.00021L10.5 13.5002H4.5ZM24.75 18.0002C24.75 15.3452 23.22 13.0652 21 11.9552V24.0302C23.22 22.9352 24.75 20.6552 24.75 18.0002ZM21 4.84521V7.93521C25.335 9.22521 28.5 13.2452 28.5 18.0002C28.5 22.7552 25.335 26.7752 21 28.0652V31.1552C27.015 29.7902 31.5 24.4202 31.5 18.0002C31.5 11.5802 27.015 6.21021 21 4.84521Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeUpIcon;
