import React, { memo, useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import { getEmployeeDetails } from '../../utils/get-employees-data';
 
 import { getAverageAgePerIndustry } from '../../utils/utils';



const ChartAge: React.FC = () => {
  const modifiedData= [];
  const [getAverageAgeList, setAverageAgeList] = useState([]);
  useEffect(() => {
    getEmployeeDetails().then(data => {
      const modifiedAgeList= getAverageAgePerIndustry(data);
      setAverageAgeList(modifiedAgeList)
    });
  }, []);
    const data = {
        labels: getAverageAgeList.map(({industry})=>( industry  ? industry  : 'N/A')),
        datasets: [
          {
            label: 'Average age per industry',
            data: getAverageAgeList.map(({age})=>( age !==NaN ? age  : 0)),
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
      // console.log(data.labels)
    return (
    <div className="chart">
    <Bar
    	data={data}
    	width={100}
    	height={500}
    	options={{ maintainAspectRatio: false }}
    />
    </div>
    );
}
export default memo(ChartAge);