
import React, { useState } from 'react';
import "../../App.css";
const Filter = ({projects}) => {
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
  
    const handleFilter = () => {
      const filteredData = projects.filter(project => {
        // Apply the filtering logic based on the selected criteria
        const matchesLocation = location === '' || project.location === location;
        const matchesArea = area === '' || project.area === area;
        const matchesProjectType = projectType === '' || project.type === projectType;
        const matchesProjectStatus = projectStatus === '' || project.status === projectStatus;
  
        return matchesLocation && matchesArea && matchesProjectType && matchesProjectStatus;
      });
  
      setFilteredProjects(filteredData);
    };
  
  return (
    <div>
      
    <div className="md:col-span-1 p-8 bg-gray-100 sticky top-20">

    <select
      id="location"
      className="mt-1 block w-full py-5 px-4  border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      style={{ padding: "15px" }}
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    >
      <option value="">All Locations</option>
      <option value="location1">Bengaluru</option>
    </select>
    <div>
      <select
        id="area"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ padding: "15px" }}
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">All Areas</option>

        <option value="area1">JP nagar</option>
        <option value="area2">Kanakpura Road</option>
        <option value="area1">Bannerghatta main Road</option>
        <option value="area1">BG Road Begur Koppa Road</option>
        <option value="area1">Electronic City</option>
        <option value="area1">Sarjapur Road</option>
        <option value="area1">Whitefield</option>
        <option value="area1">Gunjur</option>

      </select>
    </div>
    <div>

      <select
        id="projectType"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ padding: "15px" }}
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
      >
        <option value="">All Project Types</option>

        <option value="type1">	Elita Promenade</option>
        <option value="type2">	Brigade Millennium</option>
        <option value="type2">	Brigade Gardenia</option>
        <option value="type2">	L&T South City</option>


      </select>
    </div>
    <div>

      <select
        id="projectStatus"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ padding: "15px" }}
        value={projectStatus}
        onChange={(e) => setProjectStatus(e.target.value)}
      >
        <option value="">All Project Status</option>

        <option value="status1">Complete</option>
        <option value="status2">Ongoing</option>

      </select>
    </div>

    <div className="mt-4">
      <button
        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleFilter}
      >
        Apply Filter
      </button>
    </div>
  </div>
    </div>
  );
}

export default Filter;
