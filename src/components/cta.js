import React from 'react';

const CTA = () => (
  <section id="about" className="bg-grey-lightest leading-normal px-8 py-16">
    <div className="max-w-lg mx-auto md:mt-16 text-lg">
      <h1 className="font-condensed leading-none mb-6 text-5xl uppercase">
        Does your property have a pink slip?
      </h1>
      <p className="mb-4">
        Pinkslip Property is a Port Macquarie based company that provides
        domestic safety and maintenance services to the Mid North Coast from
        Forster to Coffs Harbour.
      </p>
      <p className="mb-4">
        We specialise in smoke alarms, water efficiency, and safety checks of
        your owner occupier or investment property.
      </p>
      <p className="mb-4">
        Pinkslip Property is a safety net – an umbrella of services – to ensure
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
          className="bg-indigo-darker font-bold font-condensed inline-block px-16 py-6 no-underline shadow text-white"
          href="#services"
        >
          <div className="flex items-center leading-none">
            <span className="mr-2">More info</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current h-6 w-6"
              >
                <path
                  className="fill-current text-pink-light"
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
                />
                <path
                  className="fill-current text-pink-darker"
                  d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
