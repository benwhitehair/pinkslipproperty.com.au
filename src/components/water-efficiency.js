import React from 'react';
import Image from '../images/water-efficiency.png';

const WaterEfficiency = () => (
  <section className="bg-grey-lightest">
    <div className="flex flex-wrap leading-normal max-w-2xl mx-auto py-16">
      <div className="flex items-center mb-8 md:m-0 px-4 w-full md:w-3/5">
        <img src={Image} alt="" loading="lazy" />
      </div>
      <div className="px-4 w-full md:w-2/5">
        <h3 className="font-condensed mb-4 text-3xl uppercase">
          Water efficiency
        </h3>
        <p className="mb-4">
          Reducing our water usage is good for everyone. PSP will ensure that
          your property is individually metered and meets the required water
          efficiency standards by checking all taps, toilets, and showerheads
          for leaks and appropriate flow rates. PSP will also install and supply
          any aerators, regulators or seals that require replacing or upgrading.
        </p>
        <p className="mb-4">
          <a
            className="font-bold no-underline text-pink-dark"
            href="http://www.fairtrading.nsw.gov.au/ftw/Tenants_and_home_owners/Being_a_landlord/During_a_tenancy/Passing_on_water_charges.page"
          >
            Click here for more information on your responsibilities.
          </a>
        </p>
        <p className="mb-4">
          PSP issues a certificate of compliance on every job.
        </p>
      </div>
    </div>
  </section>
);

export default WaterEfficiency;
