//external file
//named module

//approach multiple export type1:
// export let salary = '25000';
// export let getSalary = () => {
//   return 'Richard Salary is :' + salary;
// };

//approach multiple export type2:
let salary = '25000';

let getSalary = () => {
  return 'Richard Salary is :' + salary;
};

export { salary, getSalary };
