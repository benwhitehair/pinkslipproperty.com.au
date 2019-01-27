import React from 'react';
import Check from '../images/check.svg';

const Pricing = () => (
  <section id="pricing" className="bg-grey-lightest px-4 py-16">
    <div className="cards max-w-2xl mx-auto">
      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-pink p-4">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Smoke Alarms
          </h3>
          <h4 className="text-5xl">
            <div>$99</div>
            <div className="text-lg">per year</div>
          </h4>
        </div>
        <ul className="bg-white list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Alarm replacement and installation</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Ensure correct alarms are in place</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Ensure alarms are properly installed</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Ensure correct location of alarms</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Check alarm expiry date</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>Artificial test procedure</span>
          </li>

          <li className="flex items-start p-2">
            <span className="w-full" className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            <span>
              Limited to two alarms as required per property – thereafter $39
              per unit
            </span>
          </li>
        </ul>
      </div>

      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-indigo p-4">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Water Efficiency
          </h3>
          <h4 className="text-5xl">
            <div>$89</div>
            <div className="text-xl">per year</div>
          </h4>
        </div>
        <ul className="bg-white list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            A PSP licensed plumber
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Check for leaking taps
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Check water meters
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Water flow rate
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Check external fixtures
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Supply and installation of water saving devices
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Water efficiency certificate
          </li>
        </ul>
      </div>

      <div className="border mx-4 shadow text-center text-white">
        <div className="bg-pink p-4">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Basic Safety Check
          </h3>
          <h4 className="text-5xl">
            <div>$69</div>
            <div className="text-xl">per year</div>
          </h4>
        </div>
        <ul className="bg-white list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Check Blind Cords
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Safety Switches
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Check} alt="" />
            </span>
            Compliance with DFT requirements
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
