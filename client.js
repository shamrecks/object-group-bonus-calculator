// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



// This function will calculate 1 employee's bonus!
//



function calculateIndividualEmployeeBonus(employees) {  
  let bonuspercent = 0;
  if ( employees.reviewRating <= 2 ) ( bonuspercent += 0 );
  if ( employees.reviewRating == 3 ) ( bonuspercent += 4/100 );
  if ( employees.reviewRating == 4 ) ( bonuspercent += 6/100 );
  if ( employees.reviewRating == 5 ) ( bonuspercent += 10/100 );
  if ( employees.employeeNumber.length == 4 ) ( bonuspercent += 5/100 );
  if ( employees.annualSalary > 65000 ) ( bonuspercent -= 1/100 );
  if ( bonuspercent > 13/100 ) ( bonuspercent = 13/100 );
  if ( bonuspercent < 0 ) (bonuspercent = 0);
  let totalBonus = employees.annualSalary * bonuspercent;
  let totalCompensation = Number(employees.annualSalary) + totalBonus;
   return console.log(( employees.name + " has an annual salary of " + employees.annualSalary + " and has a bonus percentage of: " + bonuspercent +'% ' + "adding up to " + totalCompensation + " in total compensation"));
}
  // return new object with bonus results

  for (let emply of employees) {
 calculateIndividualEmployeeBonus(emply);
  }
