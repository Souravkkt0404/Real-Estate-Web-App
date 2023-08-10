import React from 'react';
import Back from "../common/Back";
import img from "../projects/newproject1.jpg";
import "../Awards/Award.css";
import { Link } from "react-router-dom";
import Awarddata from './Awarddata';
import Awardcard from './Awardcard';

const Award = () => {
  return (
    <div>
      <Back name='' title='Awards' cover={img} />
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Awarddata.map((property, index) => (
          <Awardcard key={index} {...property} />
        ))}
      </div>
    </div>
  );
}

export default Award;
