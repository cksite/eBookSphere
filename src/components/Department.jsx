import React from 'react';
import { useParams } from 'react-router-dom';
import departmentsData from '../data/departments.json';
import Button from './Button';
import Uploadorganiser from './alert/Uploadorganiser';

const Department = () => {
  const { deptName } = useParams();
  const department = departmentsData[deptName];

  if (!department) {
    return <h2 className="text-xl font-bold text-red-600">Department not found</h2>;
  }

  return (
    <div className="bg-red-300 min-h-screen">
      <div className="text-center pt-16">
        <h1 className="text-3xl font-bold mb-6">{deptName} Department</h1>
        {/* alert */}

        <Uploadorganiser/>


        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(department.semesters).map((sem) => {
            const semesterLink = department.semesters[sem];

            return (
              <div
                className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-64 shadow-md hover:shadow-lg transition-shadow duration-200"
                key={sem}
              >
                <img
                  // src={`../public/assets/${deptName}/${deptName}${sem}.jpg`}
                  src={`/assets/${deptName}/${deptName}.jpg`}
                  alt={`${deptName} Semester ${sem} Organizer`}
                  className="mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">Semester {sem}</h2>

                {/* Check if semester link is valid before rendering the button */}
                {semesterLink && semesterLink.length > 0 ? (
                  <a href={semesterLink} target="_blank" rel="noopener noreferrer">
                    {/* <Button name={`Pay For Sem ${sem}`} /> */}
                    <Button name={`Click Here`} />
                  </a>
                ) : (
                  <span className="text-gray-500 mb-2">Organizer Not Available</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Department;
