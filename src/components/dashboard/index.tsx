import React, { memo, useState } from 'react';
import Link from 'next/link'

import  EmployeeList  from '../employeelist';
import  ChartExperience  from '../chart-experience';
import   ChartSalary  from '../chart-salary';
import  ChartAge  from '../chart-age';



  const Dashboard: React.FC = () => {
    const [showEmployeeList, setShowEmployeeList]= useState(true);
    const [showAverageSalary, setShowAverageSalary]= useState(false);
    const [showAverageIndustry, setShowAverageIndustry]= useState(false);
    const [showAverageSalaryPerExp, setShowAverageSalaryPerExp]= useState(false);
  
    const handleEmployeeList=(val: any)=>{
      if(val==='employeeList'){
        setShowEmployeeList(!showEmployeeList);
        setShowAverageSalary(false);
        setShowAverageIndustry(false);
        setShowAverageSalaryPerExp(false);
        
      }else if(val==='showAverageSalary'){
        setShowEmployeeList(false);
        setShowAverageSalary(!showAverageSalary);
        setShowAverageIndustry(false);
        setShowAverageSalaryPerExp(false);
      }
      else if(val==='showAverageIndustry'){
        setShowEmployeeList(false);
        setShowAverageSalary(false);
        setShowAverageIndustry(!showAverageIndustry);
        setShowAverageSalaryPerExp(false);
      }
      else if(val==='showAverageSalaryPerExp'){
        setShowEmployeeList(false);
        setShowAverageSalary(false);
        setShowAverageIndustry(false);
        setShowAverageSalaryPerExp(!showAverageSalaryPerExp);
      }
    };
  
  return (
  <div>
  
   <button  className="btn btn-primary" onClick={()=>handleEmployeeList('employeeList')}>{`${showEmployeeList ? 'Hide' : 'Show'} employee detail list`}</button>
   <button  className="btn btn-primary" onClick={()=>handleEmployeeList('showAverageSalary')}>{`${showAverageSalary ? 'Hide' : 'Show'} average salary per industry`}</button>
   <button  className="btn btn-primary" onClick={()=>handleEmployeeList('showAverageIndustry')}>{`${showAverageIndustry ? 'Hide' : 'Show'} average age Per industry `}</button>
   <button  className="btn btn-primary" onClick={()=>handleEmployeeList('showAverageSalaryPerExp')}>{`${showAverageSalaryPerExp ? 'Hide' : 'Show'} average salary per years of experience`}</button>
    
    <div>
    {showEmployeeList && ( <EmployeeList /> )}
      {showAverageSalary && (<ChartSalary /> )}
      {showAverageIndustry  && (<ChartAge />) }
      {showAverageSalaryPerExp && (<ChartExperience />)}
      
    </div>
    </div>
  )
};

export default memo(Dashboard);