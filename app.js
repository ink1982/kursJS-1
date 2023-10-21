// Пошук елемента в масиві
const roles = ['user', 'admin', 'manager'];

const elIndex1 = roles.indexOf('admin');
console.log(elIndex1);

const elIndex2 = roles.indexOf('superUser');
console.log(elIndex2);

if (roles.indexOf('admin') >= 0) {
	console.log('Доступ надано');
}

console.log(roles.includes('admin'));
console.log(roles.includes('superadmin'));

if (roles.includes('admin')) {
	console.log('Доступ надано');
}
