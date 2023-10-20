//тернарні оператори
const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 200000;

// let message;
// if (budget > bmwX3Price) {
// 	message = 'BMW';
// } else {
// 	message = 'Велосипед';
// }

// let message = budget > bmwX3Price ? 'BMW' :

let message =
	budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купити ${message}`);
