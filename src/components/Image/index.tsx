import NextImage from 'next/image';
import { ImageProps, ImageLoaderProps } from 'next/image';

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  const url = `https://i2.wp.com/${
    src.replace(/^https?:\/\//, '').split(/[?#]/)[0]
  }?w=${width}${typeof quality === 'number' ? `&q=${quality}` : ''}`;
  return url;
};

const Image = (props: ImageProps) => {
  return (
    <>
      <NextImage {...props} loader={imageLoader} />
    </>
  );
};

export default Image;
