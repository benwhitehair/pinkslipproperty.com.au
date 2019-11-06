import React from 'react';
import Image from '../images/smoke-alarms.png';

const SmokeAlarms = () => (
  <section id="services" className="bg-white">
    <div className="flex flex-wrap leading-normal max-w-2xl md:mt-16 mx-auto py-16">
      <div className="mb-8 md:m-0 px-4 w-full md:w-2/5">
        <h3 className="font-condensed mb-4 text-3xl uppercase">Smoke alarms</h3>
        <p className="mb-4">
          With almost 50 house fires a day in Australia, it is simply not worth
          the risk of ignoring fire safety. PSP perform a full review of all
          smoke detectors in your property. This includes: Changing batteries,
          checking expiry dates and ensuring the correct type, quantity and
          placement of smoke alarms in your property.
        </p>
        <p className="mb-4">
          PSP also conduct an artificial smoke test on all alarms so you know
          that they will actually work in a fire. Full package includes up to 2
          new smoke alarms as required, each with a 5 year warranty and 10 year
          certificate.
        </p>
        <p className="mb-4">
          PSP issues a certificate of compliance on every job.
        </p>
        <p className="mb-4">
          <a
            className=" font-bold no-underline text-pink-dark"
            href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Being_a_landlord/Starting_a_tenancy/Safety_and_security.page"
          >
            Click here for more information on your fire alarm requirements.
          </a>
        </p>
      </div>
      <div className="flex items-center px-4 w-full md:w-3/5">
        <img src={Image} alt="" loading="lazy" />
      </div>
    </div>
  </section>
);

export default SmokeAlarms;
