import React from 'react';

const Hero = () => (
  <section className="bg-pink font-condensed py-8 md:py-32 w-full">
    <div className="font-bold leading-normal max-w-md mb-8 md:mb-16 mx-auto px-4 uppercase text-white text-3xl md:text-4xl w-full">
      <p>Property pink slips just $199</p>
      <p>
        Your complete safety net package to ensure your investment is protected
      </p>
    </div>
    <div>
      <p className="bg-white font-bold inline-flex leading-loose px-4 py-3 text-sm md:text-xl uppercase">
        <span>
          <span className="mr-2 text-pink">24/7</span>
          <span className="mr-2">emergency number</span>
          <span>
            <a className="no-underline text-pink" href="tel:0404222244">
              0404&nbsp;222&nbsp;244
            </a>
          </span>
        </span>
        <span className="ml-12">
          <span className="normal-case">Make an appointment</span>
        </span>
      </p>
    </div>
  </section>
);

export default Hero;
