import React from 'react';

const Awardcard = ({Image,Name,Date}) => {
  return (
    <div>
    <div className="bg-white rounded-lg shadow-md p-0">
    <img className="h-80" src={Image} alt={Image} />
    <h1 className="text-1xl font-bold text-center">{Name}</h1>
    <p className="text-1xl font-semibold text-center">{Date}</p>
    </div>
    </div>
  );
}

export default Awardcard;
