import React from 'react';
import Check from '../images/check-pink.svg';
import '../css/beach.css';

const Hero = () => (
  <section className="beach bg-scroll md:bg-fixed bg-no-repeat bg-top bg-cover flex flex-col font-condensed h-full justify-center py-8 md:py-32 text-center w-full">
    <div className="font-bold leading-normal max-w-md mb-8 md:mb-16 mx-auto px-4 uppercase text-white text-3xl md:text-4xl w-full">
      <p>Property pink slips just $199</p>
      <p>
        Your complete safety net package to ensure your investment is protected
      </p>
    </div>
    <div className="bg-white flex flex-wrap font-bold items-center justify-center leading-loose mx-auto px-4 py-3 text-center text-sm md:text-xl uppercase">
      <div>
        <span className="mr-2 text-pink-dark">24/7</span>
        <span className="mr-2">emergency number</span>
        <span className="mr-4 md:mr-16">
          <a className="no-underline text-pink-dark" href="tel:0404222244">
            0404&nbsp;222&nbsp;244
          </a>
        </span>
      </div>
      <div className="normal-case">
        <a className="no-underline text-grey-darkest" href="#contact">
          <div className="flex items-center leading-none">
            <span className="mr-2">Make an appointment</span>
            <span className="h-6 w-6">
              <img src={Check} alt="" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
