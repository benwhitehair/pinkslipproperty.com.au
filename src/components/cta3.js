import React from 'react';
import '../css/background.css';

const CTA3 = () => (
  <section className="background bg-pink px-4 py-16 text-center text-white">
    <div className="flex flex-wrap items-center justify-around leading-none max-w-2xl mx-auto">
      <h2 className="font-condensed mb-4 md:mb-0 md:px-4 text-4xl uppercase">
        Call us to find out more about pink slips
      </h2>

      <div className="flex items-center justify-center">
        <a
          className="bg-indigo-darker font-bold font-condensed inline-block px-16 py-6 no-underline text-white"
          href="#services"
        >
          More info
        </a>
      </div>
    </div>
  </section>
);

export default CTA3;
