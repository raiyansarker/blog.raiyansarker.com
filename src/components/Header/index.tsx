// @ts-ignore
import { UilSearch } from '@iconscout/react-unicons';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import ProfileMenu from './Profile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      document.body.style.overflowX = 'hidden';
    }
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
      <div className="w-screen z-50 backdrop-blur bg-white/60 top-0 sticky h-16 grid items-center shadow-sm shadow-[rgba(0,0,0,0.1)]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="hidden md:flex justify-between items-center">
            <h1 className="font-semibold text-dark-primary text-xl">
              <Link href="/">
                <a>
                  Raiyan Sarker
                  <span className="text-[0.6rem] font-light absolute -translate-y-2 translate-x-1 text-blueGray-500">
                    blog
                  </span>
                </a>
              </Link>
            </h1>
            <NavLinks />
            <div className="space-x-2 flex flex-row justify-center items-center">
              <button className="group focus:outline-none focus:ring-2 focus:rounded-lg px-1.5 py-1">
                <UilSearch className="aspect-square w-5 text-dark-accent hover:text-secondary group-focus:text-secondary" />
              </button>
              <ProfileMenu />
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex flex-row justify-between items-center">
              <button className="group focus:outline-none focus:ring-2 focus:rounded-lg px-1.5 py-1">
                <UilSearch className="aspect-square w-5 text-dark-accent hover:text-secondary group-focus:text-secondary" />
              </button>
              <h1 className="font-semibold text-dark-primary text-lg">
                <Link href="/">
                  <a>
                    Raiyan Sarker
                    <span className="text-[0.6rem] font-light absolute -translate-y-2 translate-x-1 text-blueGray-500">
                      blog
                    </span>
                  </a>
                </Link>
              </h1>
              <div className="flex flex-row justify-center items-center space-x-2.5">
                <ProfileMenu />
                <button
                  onClick={() => setMenuOpen((state: boolean) => !state)}
                  ref={menuButton}
                  className="group focus:outline-none focus:ring-2 focus:rounded-lg px-1.5 py-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="aspect-square w-6 text-dark-accent hover:text-secondary group-focus:text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
