import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const NavLink = ({ children }, props) => (
  <Link
    to={props.link}
    className="block md:inline-block font-semibold mt-4 md:mt-0 ml-6 no-underline uppercase text-grey-darkest"
  >
    {children}
  </Link>
);

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-grey-darkest w-full">
      <div className="flex items-center justify-between max-w-xl mx-auto py-2 px-4 md:px-8 w-full">
        <a className="no-underline text-white" href="tel:0404222244">
          0404 222 244
        </a>
        <a
          className="no-underline text-white"
          href="mailto:pinkslipproperty@icloud.com"
        >
          pinkslipproperty@icloud.com
        </a>
      </div>
    </div>
    <nav className="shadow-md sticky pin-t">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link
          to="/"
          className="flex font-bold items-center no-underline text-grey-darkest text-xl tracking-tight"
        >
          {siteTitle}
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-grey-darkest"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-sm">
            <NavLink link="/about">About</NavLink>
            <NavLink link="/services">Services</NavLink>
            <NavLink link="/pricing">Pricing</NavLink>
            <NavLink link="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
