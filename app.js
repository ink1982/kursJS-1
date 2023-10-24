// Slice, splice, concat, reverse
const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);
console.log(roles);
console.log(res);

const res1 = roles.slice(2, 3);
console.log(res);

const res2 = roles.slice(-2);
console.log(res);

const res3 = roles.slice(1, -1);
console.log(res3);
// ===================================

// const res4 = roles.splice(2, 1);
// console.log(res4);

// const res5 = roles.splice(-1);
// console.log(res5);

// ==================================

const res6 = roles.reverse();
console.log(roles);

const newRoles = ['sysadmin', 'developer'];
const res7 = roles.concat(newRoles);
console.log(res7);
