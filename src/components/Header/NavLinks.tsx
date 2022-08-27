import Link from 'next/link';
import { useRouter } from 'next/router';
import cs from 'classnames';

const NavLinks = () => {
  const router = useRouter();

  const activeRoute = (path: string): boolean => {
    return router.asPath === path;
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center space-x-5 text-sm">
        <Link href="/">
          <a
            className={cs('navlink hover:text-primary-normal', {
              'text-primary-normal': activeRoute('/'),
              'text-secondary': !activeRoute('/'),
            })}
          >
            Home
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={cs('navlink hover:text-primary-normal', {
              'text-primary-normal': activeRoute('/contact'),
              'text-secondary': !activeRoute('/contact'),
            })}
          >
            Contact
          </a>
        </Link>
        <Link href="/newsletter">
          <a className="bg-[#111] px-2.5 navlink__flash py-1">Newsletter</a>
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
