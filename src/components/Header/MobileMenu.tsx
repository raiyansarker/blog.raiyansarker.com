// @ts-ignore
import { UilGithub, UilFacebook } from '@iconscout/react-unicons';
// @ts-ignore
import useKeypress from 'react-use-keypress';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const container = {
  animate: {
    transition: {
      staggerChildren: 2,
    },
  },
};

const reveal = {
  initial: {
    y: '-100vh',
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};
export default function MobileNav({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [loaded, setLoaded] = useState(false);
  const MobileMenuRef = useRef<HTMLButtonElement>(null);
  useKeypress('Escape', () => {
    setMenuOpen(false);
  });

  useEffect(() => {
    if (loaded) {
      MobileMenuRef.current?.focus();
    }
  }, [loaded]);

  return (
    <>
      <motion.div
        key="mobile_nav"
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setLoaded(true)}
      >
        <motion.div
          className="z-[100] fixed inset-0 bg-blue-900"
          variants={reveal}
        >
          <motion.div
            className="z-[100] fixed inset-0 bg-[#E13733]"
            variants={reveal}
          >
            <div className="relative">
              <motion.button
                ref={MobileMenuRef}
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: 1,
                  rotate: 360 * 2,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.5,
                  },
                }}
                className="absolute right-5 top-5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary-light focus:rounded-full hover:ring-2 hover:ring-primary-light hover:rounded-full p-1.5"
                onClick={() => setMenuOpen((state: boolean) => !state)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 text-white w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
              <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <Link href="/">
                    <a className="text-white text-3xl lg:text-5xl font-bold underline__hover__link">
                      Home
                    </a>
                  </Link>
                  <Link href="/categories">
                    <a className="text-white text-3xl lg:text-5xl font-bold underline__hover__link">
                      Categories
                    </a>
                  </Link>
                  <Link href="/newsletter">
                    <a className="text-white text-3xl lg:text-5xl font-bold underline__hover__link">
                      Newsletter
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-white text-3xl lg:text-5xl font-bold underline__hover__link">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
              {loaded && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-20 left-10"
                  >
                    <div className="flex flex-row items-center justify-between space-x-2.5">
                      <Link href="https://github.com/raiyan_sarker_">
                        <a className="hover:ring-1 hover:ring-primary-light focus:ring-1 focus:ring-primary-light outline-none rounded-full">
                          <UilGithub className="h-[1.85rem] w-[1.85rem] text-white" />
                        </a>
                      </Link>
                      <Link href="https://github.com/raiyan_sarker_">
                        <a className="hover:ring-1 p-0.5 hover:ring-white focus:ring-1 focus:ring-white outline-none rounded-full">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            className="text-white h-[1.6rem] w-[1.6rem]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                              stroke="none"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
function useKeyPress(arg0: string) {
  throw new Error('Function not implemented.');
}
