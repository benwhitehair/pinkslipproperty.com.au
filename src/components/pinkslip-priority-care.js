import React from 'react';
import Image from '../images/priority-care.png';

const PSPCare = () => (
  <section className="bg-white">
    <div className="flex flex-wrap leading-normal max-w-2xl mx-auto py-16">
      <div className="px-4 w-full md:w-2/5">
        <h3 className="font-condensed mb-4 text-3xl uppercase">
          Pinkslip priority care
        </h3>
        <p className="mb-4">
          PinkSlip Property service your property as if it were our own – we
          invest our knowledge into your property.
        </p>
        <p className="mb-4">
          We log the location of all the key service fixtures on your property
          so in case of an emergency we can quickly and efficiently respond to
          any trade issues you may have. Consequently there is no time wasted
          looking for electrical boxes and water meters – we get straight to
          work.
        </p>
      </div>
      <div className="flex items-center px-4 w-full md:w-3/5">
        <img src={Image} alt="" />
      </div>
    </div>
  </section>
);

export default PSPCare;
