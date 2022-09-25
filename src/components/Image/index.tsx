import NextImage from 'next/future/image';
import { ImageProps, ImageLoaderProps } from 'next/future/image';

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  const url = `https://images.raiyansarker.com/?url=${src}&w=${width}&maxage=1d${
    typeof quality === 'number' ? `&q=${quality}` : ''
  }`;
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
