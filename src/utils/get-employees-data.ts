import {
    ASSET_PATH,
  } from '../constants';
  
  export interface IEmployeeProps {
    employeeID: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    industry: string;
    salary: number;
    years_of_experience: number;
  }
  
export const getEmployeeDetails=()=> {
    return fetch(
      `${ASSET_PATH}/api/mock-data.json`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error('Error fetching employee list ');
      })
      .then((resp) => {
        return resp;
      });
  };