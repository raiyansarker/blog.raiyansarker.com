import Link from 'next/link';
import cs from 'classnames';
import { useRouter } from 'next/router';

const NavLink = ({ href, link }: { href: string; link: string }) => {
  const router = useRouter();

  const activeRoute = (path: string): boolean => {
    return router.asPath === path;
  };
  return (
    <>
      <Link href={href}>
        <a
          className={cs({
            'text-primary-normal': activeRoute(href),
            'text-dark-accent hover:text-black focus:text-black':
              !activeRoute(href),
          })}
        >
          {link}
        </a>
      </Link>
    </>
  );
};

export default NavLink;
