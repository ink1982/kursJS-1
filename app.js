// Знайомство з масивами
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];
console.log(roles);
console.log(roles[0]);

console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles.at(-1));

const userAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(userAge);

const userNames = new Array('Тарас', 'Петро', 'Максим', 'Уляна');
console.log(userNames);

function square(el) {
	return el * el;
}
console.log(square([1, 2, 3]));
