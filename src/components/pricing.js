import React from 'react';
import Pink from '../images/check-pink.svg';
import Indigo from '../images/check-indigo.svg';

const Pricing = () => (
  <section id="pricing" className="bg-grey-lightest px-4 py-16">
    <div className="cards max-w-2xl mx-auto">
      <div className="bg-white border mx-4 shadow text-center">
        <div className="bg-pink-lightest p-4 text-pink-dark">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Smoke Alarms
          </h3>
          <h4 className="text-5xl">
            <div>$99</div>
            <div className="text-lg">per year</div>
          </h4>
        </div>
        <ul className="list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Alarm replacement and installation</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Ensure correct alarms are in place</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Ensure alarms are properly installed</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Ensure correct location of alarms</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Check alarm expiry date</span>
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>Artificial test procedure</span>
          </li>

          <li className="flex items-start p-2">
            <span className="w-full" className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            <span>
              Limited to two alarms as required per property – thereafter $39
              per unit
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white border mx-4 shadow text-center">
        <div className="bg-indigo-lightest p-4 text-indigo-dark">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Water Efficiency
          </h3>
          <h4 className="text-5xl">
            <div>$89</div>
            <div className="text-xl">per year</div>
          </h4>
        </div>
        <ul className="list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            A PSP licensed plumber
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Check for leaking taps
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Check water meters
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Water flow rate
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Check external fixtures
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Supply and installation of water saving devices
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Indigo} alt="" />
            </span>
            Water efficiency certificate
          </li>
        </ul>
      </div>

      <div className="bg-white border mx-4 shadow text-center">
        <div className="bg-pink-lightest p-4 text-pink-dark">
          <h3 className="font-condensed mb-4 text-4xl uppercase">
            Basic Safety Check
          </h3>
          <h4 className="text-5xl">
            <div>$69</div>
            <div className="text-xl">per year</div>
          </h4>
        </div>
        <ul className="list-reset px-2 py-8 text-grey-darkest text-left">
          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            Check Blind Cords
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            Safety Switches
          </li>

          <li className="flex items-start p-2">
            <span className="flex-no-shrink">
              <img className="h-6 mr-2 w-6" src={Pink} alt="" />
            </span>
            Compliance with DFT requirements
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
