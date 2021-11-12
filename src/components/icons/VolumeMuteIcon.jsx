const VolumeMuteIcon = ({
  width = '36',
  height = '36',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 13.5V22.5H10.5L18 30V6L10.5 13.5H4.5Z" fill={color} />
      <path
        d="M31.8 14.2L30.4286 13L26.4857 17.1143L22.3714 13L21 14.2L25.1143 18.3143L21 22.4286L22.3714 23.6286L26.4857 19.5143L30.4286 23.6286L31.8 22.4286L27.6857 18.3143L31.8 14.2Z"
        fill={color}
      />
    </svg>
  );
};

export default VolumeMuteIcon;
