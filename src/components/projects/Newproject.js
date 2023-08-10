import React, { useState } from 'react';
import Back from "../common/Back";
import img from "./newproject1.jpg";
import {Link} from "react-router-dom";
import "../../App.css";
import Filter from './Filter';
import Propertycard from './Propertycard';
import Nprojectdata from './Nprojectdata';
const Newproject = ({ projects }) => {
 
  return (
    <div>
<div className=''>
      <Back className=" text-5sm" title='New Project' cover={img} />
      <div className="absolute bottom-0 left-32 mt-0 p-9  bg-opacity-50">
      <nav className="flex text-white text-sm">
        <Link to="/Home" className=" text-sm text-white hover:text-blue-500">
          Home
        </Link>
        <span className="mx-2">{'>'}</span>
        <Link to="/Filter" className=" text-sm text-white hover:text-blue-500">
          Project
        </Link>
        <span className="mx-2  text-5sm">{'>'}</span>
        New project
      </nav>
    </div>
    </div>
      <div className="flex justify-center  py-6">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-white shadow rounded-md">

          <Filter/>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:col-span-2 p-5">
          {Nprojectdata.map((property, index) => (
            <Propertycard key={index} {...property} />
          ))}
        </div>
          
           

          </div>

        </div>
      </div>
    




  );
}

export default Newproject;
