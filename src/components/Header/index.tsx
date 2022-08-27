// @ts-ignore
import { UilSearch } from '@iconscout/react-unicons';
import Image from 'next/future/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import ProfileMenu from './Profile';

const Header = () => {
  return (
    <>
      <div className="w-screen top-0 sticky h-16 grid items-center shadow-sm shadow-[rgba(0,0,0,0.1)]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex justify-between items-center">
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
            <div className="space-x-2">
              <button className="group focus:outline-none focus:ring-2 focus:rounded-lg px-2 py-1.5">
                <UilSearch className="aspect-square w-5 text-dark-accent hover:text-secondary group-focus:text-secondary" />
              </button>
              <ProfileMenu>
                <div className="w-6 ring-1 aspect-square rounded-full overflow-hidden">
                  <Image
                    src="https://media.raiyansarker.com/avatar/default.png"
                    alt="Avatar"
                    width={80}
                    height={80}
                  />
                </div>
              </ProfileMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
