import React, { memo, useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import { getEmployeeDetails } from '../../utils/get-employees-data';
 
 import {  getAverageSalaryPerIndustry } from '../../utils/utils';



const ChartSalary: React.FC = () => {
  const [getAverageSalaryList, setAverageSalaryLists] = useState([]);
  const [showEmployeeList, setShowEmployeeList]= useState(false);
  useEffect(() => {
    getEmployeeDetails().then(data => {
      const modifiedSalaryList= getAverageSalaryPerIndustry(data);
      const sortData = modifiedSalaryList.sort((a, b) => (a.industry > b.industry) ? 1 : -1)
      setAverageSalaryLists(sortData);
    });
  }, []);
    const data = {
        labels: getAverageSalaryList.map(({industry})=>( industry !=='n/a' ? industry  : 'N/A')),//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Average Salary per Industry',
            data: getAverageSalaryList.map(({salary})=>( salary !==NaN ? salary  : 0.0)),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      const handleEmployeeList=()=>{
        setShowEmployeeList(!showEmployeeList);
    };
      // console.log(data.labels)
    return (
    <div className="chart">
     {/* <button  className="btn btn-primary" onClick={handleEmployeeList} >Show Employee List</button> */}
    <Bar
    	data={data}
    	width={100}
    	height={500}
    	options={{ maintainAspectRatio: false }}
    />
    </div>
    );
}
export default memo(ChartSalary);