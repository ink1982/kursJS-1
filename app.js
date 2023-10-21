// Оператори з іншими типами

console.log('Василь' || 'Олег');
console.log(false || 'Олег');
console.log('Василь' || false);
console.log(false || false);

console.log('Василь' && 'Олег');
console.log(false && 'Олег');
console.log('Василь' && false);
console.log(false && false);

let Igor;
const userName = 'Igor' || 'Петро';
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);
