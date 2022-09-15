import Footer from '@components/Footer';
import Header from '@components/Header';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const SkeletonLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '!bg-[#1C1D1F] !text-white',
          duration: 5000,
        }}
      />
      <div className="z-[1] mb-[538px] md:mb-[550px] lg:mb-[602px] relative bg-white">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default SkeletonLayout;
