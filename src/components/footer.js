import React from 'react';

const Footer = () => (
  <footer className="p-4">
    <div className="flex flex-wrap font-bold leading-normal justify-between max-w-2xl mx-auto md:p-8 text-center w-full">
      <p className="hidden md:block m-0">Pinkslip Property © 2019</p>
      <p className="m-0 text-right md:text-left">
        <span className="mr-1">Website by</span>
        <a
          className="no-underline text-pink-dark"
          href="https://lukebennett.com.au"
        >
          Luke Bennett
        </a>
      </p>
      <p className="hidden md:block m-0">All rights reserved</p>
    </div>

    <a
      href="#top"
      className="bg-pink-lighter border hidden md:flex fixed font-bold h-16 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg text-white text-5xl w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-current text-pink-darker h-full w-full"
      >
        <path
          className="secondary"
          fill-rule="evenodd"
          d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
        />
      </svg>
    </a>
  </footer>
);

export default Footer;
