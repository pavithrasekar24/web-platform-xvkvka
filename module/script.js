//importing file

//type 1 & type2 -named module
//way 1:  --- export comp1 --- export comp2 -{name}
import { salary, getSalary } from './agent.js';
console.log('  --- export comp1 --- export comp2 ', salary, getSalary());

//way2:  --- export comp1 --- export comp2 -{name as alias name}
import { salary as s, getSalary as g } from './agent.js';
console.log('  --- export comp1 --- export comp2 -alias ', s, g());

//way3: --- export comp1 --- export comp2 - {* as alias name}
import * as a from './agent.js';
console.log('  --- export comp1 --- export comp2 -* ', a.salary, a.getSalary());

//default module
import ad from './admin.js';

console.log('default module', ad);
