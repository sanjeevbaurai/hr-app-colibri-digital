/* @ts-ignore */


// Function to get Average Age Per Industry
export function getAverageSalaryPerIndustry(data) {
  const modifiedData =[];
  data.map(acc => {
   if(acc.industry && acc.industry !=='n/a'){
       const obj ={
         'industry': acc.industry,
         'salary':acc.salary,
        }
       modifiedData.push(obj);
     }
 });

  const averagesData = [...modifiedData
    // get list of salary/values
    .reduce((map, { industry, salary }) => map.set(industry, [...(map.get(industry) || []), salary]), new Map) ]
    // get list of salary/average
    .map(([industry, salary]) => ({ industry, salary: salary.reduce((sum, val) => sum + val, 0) / salary.length }));
  
  return averagesData;
}

export function getAverageAgePerIndustry(data) {
  const modifiedData =[];
  data.map(acc => {
   if(acc.industry && acc.industry !=='n/a'){
       const obj ={
         'industry': acc.industry,
         'age':getAge(acc.date_of_birth),
        }
       modifiedData.push(obj);
     }
 });
  const averagesData = [...modifiedData
    // get list of age/values
    .reduce((map, { industry, age }) => map.set(industry, [...(map.get(industry) || []), age]), new Map) ]
    // get list of age/average
    .map(([industry, age]) => ({ industry, age: age.reduce((sum, val) => sum + val, 0) / age.length }));
  return averagesData;
}



function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export function getAverageSalaryPerYearExp(data) {
  const modifiedData =[];
  data.map(acc => {
   if(acc.years_of_experience){
       const obj ={
         'years_of_experience': acc.years_of_experience,
         'salary':acc.salary,
        }
       modifiedData.push(obj);
     }
 });

  const averagesData = [...modifiedData
    // get list of salary/values
    .reduce((map, { years_of_experience, salary }) => map.set(years_of_experience, [...(map.get(years_of_experience) || []), salary]), new Map) ]
    // get list of salary/average
    .map(([years_of_experience, salary]) => ({ years_of_experience, salary: salary.reduce((sum, val) => sum + val, 0) / salary.length }));
  return averagesData;
}