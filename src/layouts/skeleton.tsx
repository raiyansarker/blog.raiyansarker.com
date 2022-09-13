import Footer from '@components/Footer';
import Header from '@components/Header';
import { PropsWithChildren } from 'react';

const SkeletonLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="z-[1] mb-[538px] lg:mb-[583px] relative bg-white">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default SkeletonLayout;
