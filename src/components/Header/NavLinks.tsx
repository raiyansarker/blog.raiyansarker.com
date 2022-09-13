import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center space-x-5 text-sm">
        <NavLink href="/" link="Home" />
        <NavLink href="/categories" link="Categories" />
        <NavLink href="/newsletter" link="Newsletter" />
        <NavLink href="/contact" link="Contact" />
      </div>
    </>
  );
};

export default NavLinks;
