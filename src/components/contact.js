import React from 'react';
import Image from '../images/contact.png';
import Form from './form';

const Contact = () => (
  <section id="contact" className="background bg-pink px-4 py-16 text-white">
    <div className="flex flex-wrap max-w-2xl mx-auto">
      <div className="flex flex-col flex-wrap items-start leading-normal p-4 md:w-1/2">
        <h2 className="font-condensed mb-4 text-4xl uppercase">Contact</h2>
        <p className="font-bold">
          <span className="mr-2">Phone: </span>
          <a className="text-white" href="tel:0404222244">
            0404 222 244
          </a>
        </p>
        <p className="flex font-bold">
          <span className="mr-2">Email: </span>
          <a className="text-white" href="mailto:pinkslipproperty@icloud.com">
            pinkslipproperty@icloud.com
          </a>
        </p>
        <p className="hidden md:block md:self-end md:mb-16 mt-auto pb-1">
          <img src={Image} alt="" />
        </p>
      </div>

      <Form />
    </div>
  </section>
);

export default Contact;
