import React from 'react';

import { FiSend, FiPhoneCall } from 'react-icons/fi';


const Propertycard = ({ image, project, city, price }) => {
  return (
    <div>
    <div className="bg-white rounded-lg shadow-md p-0">
    <img className="h-80" src={image} alt={image} />
    <h1 className="text-1xl font-bold text-center">{project}</h1>
    <p className="text-1xl font-semibold text-center">{city}</p>
    <hr />
    <div className="flex justify-center items-center">
      <p className="mb-2 ml-2">{price}</p>
      <div className="flex items-center">
        <FiSend className="mr-2" />
        <FiPhoneCall className="mr-2" />
      </div>
    </div>
  </div>
      
    </div>
  );
}

export default Propertycard;
