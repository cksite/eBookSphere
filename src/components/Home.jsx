import React from 'react';
import { Link } from 'react-router-dom';
import departmentsData from '../data/departments.json';
import Button from './Button';
import Joingroup from './alert/Joingroup';
import Ads from './alert/AdAlert';

const Home = () => {
  return (
    <div className="pt-16 bg-red-100"> {/* Add padding-top to create space for the navbar */}

      {/* alert */}

      <Joingroup/>
      <Ads/>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Object.keys(departmentsData).map((dept) => (
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-100" key={dept}>
            <img className="w-full h-24 object-cover" src={`/assets/branch/${dept}.jpg`}  alt={`${dept} department`} />
            <div className="px-6 py-4">
              <h5 className="font-bold text-xl mb-2">{dept}</h5>
              <p className="text-gray-700 text-base">
                Explorei the {dept} department and access the semester organizers.
              </p>
            </div>
            <div className="px-6 py-4">
              <Link to={`/department/${dept}`}>
              <Button name={`Go to ${dept}`}></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
