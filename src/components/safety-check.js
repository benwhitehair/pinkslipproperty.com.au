import React from 'react';
import Image from '../images/safety-check.jpg';

const SafetyCheck = () => (
  <section className="bg-grey-lightest">
    <div className="flex flex-wrap leading-normal max-w-2xl mx-auto py-16">
      <div className="flex items-center mb-8 md:m-0 px-4 w-full md:w-3/5">
        <img src={Image} alt="" />
      </div>
      <div className="px-4 w-full md:w-2/5">
        <h3 className="font-condensed mb-4 text-3xl uppercase">
          Basic safety check
        </h3>
        <p className="mb-4">
          Our Basic Safety Check can be added to any of our services – we take a
          little more of our time to check some key safety factors of your
          asset.
        </p>
        <p className="mb-4">
          Our aim is to ensure the safety of your tenants and their families. We
          check blind cords and electrical safety switches for safety in
          reference to NSW legislation and general safety issues. Any concerns
          or compliance issues will be recorded and communicated with the owners
          and/or managing agents.
        </p>
        <p className="mb-4">
          If required, our technicians will provide a costing to carry out any
          works necessary.
        </p>
        <p className="mb-4">
          PSP issues a certificate of compliance on every job.
        </p>
        <p className="mb-4">
          <a
            className="font-bold no-underline text-pink-dark"
            href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Being_a_landlord/Starting_a_tenancy/Safety_and_security.page"
          >
            Click here for more information on basic household safety.
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default SafetyCheck;
