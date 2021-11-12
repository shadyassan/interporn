import Image from 'next/image';
import { blurDataURL } from 'utils';

const ImageWrapper = ({ src, width, height, divider = false, ...rest }) => {
  if (!src) return null;
  return (
    <div className="site-img">
      <Image
        src={src}
        placeholder="blur"
        blurDataURL={blurDataURL(width, height)}
        objectFit="cover"
        quality={100}
        width={width}
        height={height}
        {...rest}
      />
      {divider && <div className="divide-line"></div>}
    </div>
  );
};

export default ImageWrapper;
