import React from 'react';

const Footer = () => (
  <footer className="p-4">
    <div className="flex flex-wrap font-bold items-center leading-normal justify-between max-w-2xl mx-auto text-center w-full">
      <p className="m-0 text-right md:text-left">
        <span className="mr-1">Website by</span>
        <a
          className="no-underline text-pink-dark"
          href="https://lukebennett.com.au"
        >
          Luke Bennett
        </a>
      </p>
      <p className="hidden md:block m-0">
        <div>Pinkslip Property © 2019</div>
        <div>All rights reserved</div>
      </p>
      <p className="hidden md:block m-0">ABN: 45 114 128 951</p>
    </div>

    <a
      href="#top"
      className="bg-pink-lighter hidden md:flex fixed font-bold h-16 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg text-white text-5xl w-16"
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
