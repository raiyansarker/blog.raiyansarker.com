import Header from '@components/Header';
import { PropsWithChildren } from 'react';

const SkeletonLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default SkeletonLayout;
