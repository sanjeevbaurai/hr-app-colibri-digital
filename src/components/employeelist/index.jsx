import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getEmployeeDetails } from '../../utils/get-employees-data';
import Table from '../table';

const styles = {
  contentSection: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: 8
  },
  headerSection: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: 8
  }
}

const EmployeeList= ({ classes }) => {
 
  const [employees, setEmployees] = useState([]);
  const [getFilteredEmployees, setFilteredEmployees] = useState([]);
  const [dobFilter, setDobFilter] = useState('all');
  const [indusryFilter, setIndusryFilter] = useState('all');
  const [showEmployeeList, setShowEmployeeList]= useState(false);
  const [ btnText, setBtnText ] = useState('Show Employee list');

  useEffect(() => {
    getEmployeeDetails().then(data => {
     const sortData = data.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
     setEmployees(sortData);
     setFilteredEmployees(data);
    });
  }, []);

  useEffect(() => {
    let filteredEmployees = filterDataByDoB(employees);
    filteredEmployees = filterDataByIndustry(filteredEmployees);
    setFilteredEmployees(filteredEmployees);
  }, [dobFilter, indusryFilter]);

  const filterDataByIndustry = data => {
    if (indusryFilter !== 'all') {
      return data.filter(row => row.industry.includes(indusryFilter));
    }
    return data;
  }

  const filterDataByDoB = data => {
    if (dobFilter !== 'all') {
      return data.filter(row => row.date_of_birth.includes(dobFilter));
    }
    return data;
  }

  const headerOptions = [
    {
      id: "first_name",
      name:"First Name"
    },
    {
      id: "last_name",
      name:"Last Name"
    },
    {
      id: "email",
      name:"Email"
    },
    {
      id: "date_of_birth",
      name:"Date of birth"
      //filterOptions: () => renderDropdown(dobFilter, e => setDobFilter(e.target.value), renderDoBOptions())
    },
    {
      id: "salary",
      name:"Salary"
    },
    {
      id: "industry",
      name:"Industry"
      //filterOptions: () => renderDropdown(indusryFilter, e => setIndusryFilter(e.target.value), renderIndustryOptions())
    },
    {
        id: "years_of_experience",
        name:"Years of experience"
    }, 
    ];

  // const renderDoBOptions = () => ['all'];
  

  // const renderIndustryOptions = () => {
  //   return employees.reduce((acc, val) => {
  //   console.log(val)
  //     const industry = val.industry;
  //     return Array.from(new Set([...acc, ...industry]));
  //   }, ['all'])
  // };

  const renderDropdown = (currentVal, changeFunc, options) => {
    return (
      <select value={currentVal} onChange={changeFunc}>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    )
  };


  const generateRow = row => {
    return (
      <tr key={row.id}>
        {headerOptions.map(field => (
          <td className={classes.contentSection}>
            {row[field.id]}
          </td>
        ))}
      </tr>
    )
  };

  const header = (
    <tr>
      {headerOptions.map(header => (
        <th className={classes.headerSection}>
          {header.name}
          {header.filterOptions && (
            <div>
              {header.filterOptions()}
            </div>
          )}
        </th>
      ))}
    </tr>
  );

const handleEmployeeList=()=>{
    setShowEmployeeList(!showEmployeeList);
};
  return (
    <div className="employeeList">
      <Table
        renderRow={row => generateRow(row)}
        entries={getFilteredEmployees}
        header={header}
        placeholder="Search by name, email, industry"
        textfilterOptions={['name', 'email', 'industry']}
        pageLimit={15}
      />
      </div>
  )
}

export default withStyles(styles)(EmployeeList);