import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Logo from '../images/favicon.png';
import '../css/hover-effect.css';

const handleClick = ev => {
  ev.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-grey-darkest w-full">
      <div className="flex items-center justify-between max-w-2xl mx-auto py-2 px-4 md:px-8 w-full">
        <a
          className="flex items-center leading-none no-underline text-white hover:text-pink-light"
          href="tel:0404222244"
        >
          <svg
            className="fill-current h-4 mr-2 text-pink-light w-4"
            enableBackground="new 0 0 20 20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Phone number</title>
            <path d="m17.256 12.253c-.096-.667-.611-1.187-1.274-1.342-2.577-.604-3.223-2.088-3.332-3.734-.457-.085-1.27-.177-2.65-.177s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734-.663.156-1.178.675-1.274 1.342l-.497 3.442c-.175 1.212.715 2.305 1.953 2.305h11.6c1.237 0 2.128-1.093 1.953-2.305zm-7.256 3.239c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5 2.526 1.12 2.526 2.5-1.132 2.5-2.526 2.5zm9.95-9.492c-.024-1.5-3.842-3.999-9.95-4-6.109.001-9.927 2.5-9.95 4s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876 0-1.024 2.392-1.271 4.655-1.271s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876 2.513.325 2.558-1.627 2.535-3.127z" />
          </svg>
          <span>0404 222 244</span>
        </a>
        <a
          className="flex items-center leading-none no-underline text-white hover:text-pink-light"
          href="mailto:pinkslipproperty@icloud.com"
        >
          <svg
            className="fill-current h-4 mr-2 text-pink-light w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Email address</title>
            <path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z" />
          </svg>
          <span>pinkslipproperty@icloud.com</span>
        </a>
      </div>
    </div>
    <nav className="bg-white font-condensed py-4 md:py-0 shadow-md text-lg">
      <div className="flex flex-wrap items-center justify-between max-w-2xl mx-auto px-4 md:px-8">
        <Link
          to="/"
          className="flex font-bold font-sans items-center no-underline text-grey-darkest text-xl tracking-tight"
        >
          <img className="mr-1 w-12" src={Logo} alt="" />
          {siteTitle}
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-grey-darkest"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center -mr-3 w-full md:w-auto"
        >
          <a
            href="#about"
            className="overline block md:inline-block font-bold mt-4 md:mt-0 no-underline px-4 py-4 md:py-8 uppercase text-grey-darkest"
          >
            About
          </a>

          <a
            href="#services"
            className="overline block md:inline-block font-bold mt-4 md:mt-0 no-underline px-4 py-4 md:py-8 uppercase text-grey-darkest"
          >
            Services
          </a>

          <a
            href="#pricing"
            className="overline block md:inline-block font-bold mt-4 md:mt-0 no-underline px-4 py-4 md:py-8 uppercase text-grey-darkest"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="overline block md:inline-block font-bold mt-4 md:mt-0 no-underline px-4 py-4 md:py-8 uppercase text-grey-darkest"
          >
            Contact
          </a>
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
