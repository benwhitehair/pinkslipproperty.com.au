import React from 'react';
import Image from '../images/contact.png';
import Form from './form';
import '../css/background.css';

const Contact = () => (
  <section
    id="contact"
    className="background bg-pink px-4 py-16 text-indigo-darkest"
  >
    <div className="flex flex-wrap max-w-2xl  md:mt-16 mx-auto">
      <div className="flex flex-col flex-wrap items-start leading-normal p-4 md:w-1/2">
        <h2 className="font-condensed mb-4 text-4xl uppercase">Contact</h2>
        <p className="font-bold text-lg">
          <span className="mr-2">Phone: </span>
          <a className="text-white" href="tel:0404222244">
            0404 222 244
          </a>
        </p>
        <p className="font-bold text-lg">
          <span className="mr-2">Email: </span>
          <a className="text-white" href="mailto:pinkslipproperty@icloud.com">
            pinkslipproperty@icloud.com
          </a>
        </p>
        <p className="hidden md:block md:self-end md:mb-16 mt-auto pb-1">
          <img src={Image} alt="" loading="lazy" />
        </p>
      </div>

      <Form />
    </div>
  </section>
);

export default Contact;
