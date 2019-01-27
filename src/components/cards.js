import React from 'react';
import Fire from '../images/card-fire.png';
import Water from '../images/card-water.png';
import Safety from '../images/card-safety.png';

const Cards = () => (
  <div className="cards py-16 text-center w-full">
    <div className=" mb-16 px-4">
      <img className="mb-2 w-32" src={Fire} alt="" />
      <h2 className="font-condensed mb-2 uppercase">Smoke alarms</h2>
      <p>Keep your smoke alarms certified and up to date</p>
    </div>
    <div className=" mb-16 px-4">
      <img className="mb-2 w-32" src={Water} alt="" />
      <h2 className="font-condensed mb-2 uppercase">Water efficiency</h2>
      <p>Ensure your property is metered and compliant</p>
    </div>
    <div className=" mb-16 px-4">
      <img className="mb-2 w-32" src={Safety} alt="" />
      <h2 className="font-condensed mb-2 uppercase">Basic safety check</h2>
      <p>Making safe blind cords and safety switches</p>
    </div>
  </div>
);

export default Cards;
