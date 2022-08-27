import Link from 'next/link';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <>
      <div className="w-screen h-16 grid items-center">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-dark-accent text-xl">
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
            <div>Hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
