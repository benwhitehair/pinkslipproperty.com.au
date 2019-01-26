import React from 'react';

const Pricing = () => (
  <section className="bg-grey-lightest px-4 py-16">
    <div className="cards max-w-2xl mx-auto">
      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-pink py-4">
          <h3 className="font-condensed text-4xl uppercase">Smoke Alarms</h3>
          <h4 className="py-4 text-5xl">
            <span>$99</span>
            <span className="text-xl">per year</span>
          </h4>
        </div>
        <ul className="bg-white py-8 text-grey-darkest text-left">
          <li className="p-2">Alarm replacement and installation</li>
          <li className="p-2">Ensure correct alarms are in place</li>
          <li className="p-2">Ensure alarms are properly installed</li>
          <li className="p-2">Ensure correct location of alarms</li>
          <li className="p-2">Check alarm expiry date</li>
          <li className="p-2">Artificial test procedure</li>
          <li className="p-2">
            Limited to two alarms as required per property – thereafter $39 per
            unit
          </li>
        </ul>
      </div>

      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-indigo py-4">
          <h3 className="font-condensed text-4xl uppercase">
            Water Efficiency
          </h3>
          <h4 className="py-4 text-5xl">
            <span>$89</span>
            <span className="text-xl">per year</span>
          </h4>
        </div>
        <ul className="bg-white py-8 text-grey-darkest text-left">
          <li className="p-2">A PSP licensed plumber</li>
          <li className="p-2">Check for leaking taps</li>
          <li className="p-2">Check water meters</li>
          <li className="p-2">Water flow rate</li>
          <li className="p-2">Check external fixtures</li>
          <li className="p-2">
            Supply and installation of water saving devices
          </li>
          <li className="p-2">Water efficiency certificate</li>
        </ul>
      </div>

      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-pink py-4">
          <h3 className="font-condensed text-4xl uppercase">
            Basic Safety Check
          </h3>
          <h4 className="py-4 text-5xl">
            <span>$69</span>
            <span className="text-xl">per year</span>
          </h4>
        </div>
        <ul className="bg-white py-8 text-grey-darkest text-left">
          <li className="p-2">Check Blind Cords</li>
          <li className="p-2">Safety Switches</li>
          <li className="p-2">Compliance with DFT requirements</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
