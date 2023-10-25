// Перетворення з рядка в масив і навпаки
// split, join

const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/');
console.log(res);

console.log(roles.join('-'));
