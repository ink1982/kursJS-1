// Управління елементами масиву
const users = ['Аня', 'Віка', 'Катя'];
console.log(users);

users[2] = 'Христина';
console.log(users);

const arrLength = users.push('Максим');
console.log(users);
console.log(arrLength);

users.unshift('Тарас');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);
