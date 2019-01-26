import React from 'react';

const CTA = () => (
  <section id="about" className="bg-grey-lightest leading-normal px-8 py-16">
    <div className="max-w-lg mx-auto text-lg">
      <h1 className="font-condensed leading-none mb-6 text-5xl uppercase">
        Does your property have a pink slip?
      </h1>
      <p className="mb-4">
        PinkSlip Property is a Port Macquarie based company that provides
        domestic safety and maintenance services to the Mid North Coast from
        Forster to Coffs Harbour.
      </p>
      <p className="mb-4">
        We specialise in smoke alarms, water efficiency, and safety checks of
        your owner occupier or investment property.
      </p>
      <p className="mb-4">
        PinkSlip Property is a safety net – an umbrella of services – to ensure
        your investment is protected, tenants are safe, and your property is
        compliant with NSW smoke alarm and other legislations governing your
        investment property.
      </p>
      <p className="mb-16">
        PSP is a family run, locally based company employing local members of
        the community. We believe in building a stronger and safer community.
      </p>
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

export default CTA;
