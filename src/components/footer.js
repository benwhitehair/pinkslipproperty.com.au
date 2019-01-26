import React from 'react';

const Footer = () => (
  <footer>
    <div className="flex font-bold items-center justify-between leading-normal max-w-2xl mx-auto p-4 md:p-8 w-full">
      <p className="flex flex-wrap">
        <span>Pink Slip Property © 2019</span> <span>All Rights Reserved</span>
      </p>
      <p className="flex flex-wrap">
        <span className="mr-1">Website by</span>
        <span>
          <a
            className="no-underline text-pink-dark"
            href="https://lukebennett.com.au"
          >
            Luke Bennett
          </a>
        </span>
      </p>
    </div>

    <a
      className="bg-pink-dark hidden md:flex fixed font-bold h-16 items-end justify-center leading-none mb-16 mr-16 no-underline pin-b pin-r rounded-full shadow-lg text-white text-5xl w-16"
      href="#nav"
    >
      ^
    </a>
  </footer>
);

export default Footer;
