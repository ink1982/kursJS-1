/*
№16.
Ваша погодинна ставка 80$ і ви готові працювати
не більше 5 год. на день в тиждень (крім вихідних).
До вас звертається замовник і пропонує замовлення на 40 год. роботи.
Зараз понеділок.
Ви повинні поїхати через 11 днів.
Виведіть у консоль:
	- Boolean змінну, чи встигнете ви взятися за роботу;
	- Скільки ви за неї попросите.
*/

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Чи зможу я працювати? ' + (availableHours > projectHours));
console.log('Вартість робіт: ' + projectHours * payRateUSD + '$');

/*
Василь поклав 12 000$ на вклад 7% річних з капіталізацією 1 раз в місяць.
Вивести в консоль, чи зможе він придбати будинок за 13 500$ через 2 роки
після того як зніме вій влад. І залишок після покупки.

Підсумок = Сума * (1 + Ставка вв місяць не в %)^ строк в місяцях
*/

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
	console.log(
		`Ми наскладали: ${res}. Можемо купити. Залишок ${res - houseCost}`
	);
} else {
	console.log('Ми наскладали: ${res}. Купити не зможемо (((');
}

/*
	Користувач бажає придбати гру у магазині.
	Він зможе це зробити, якщо:
	- його баланс більше 1000 (balance), або число бонусів (bonusBalance) більше 100;
	- його не заблоковано (isBanned);
	- гра не куплена (isExist);
	- гар продається (isSelling);
	Напишіть умову для придбання і виводу у консоль.
*/

const balance = 100;
const bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
	(balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;

console.log(`Можу купити гру: ${canBuy ? 'Так' : 'Ні'}`);

// переписати звичайну функцію у стрілкову
const toPower = (num, power) => num ** power;
console.log(toPower(2, 3));

/*
	Користувач:
	- Вік;
	- Наявність роботи;
	- Гроші;
	Потрібно перевірити, чи зможе він купити новий MacBook за 2000$?
	Він може брати не тільки свої гроші, а й взяти кредит.
	Йому дадуть 500$, за умови, шо йому більше 24-х років і він має роботу,
	100$ - якщо йому просто більше 24-х років і 0$ в інших випадках.

	Напишіть функцію, яка приймає дані користувача і товару і повертає true або false
*/

function computeCredit(age, hasJob = false) {
	switch (true) {
		case age > 24 && hasJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}
}

function canBuy1(productPrice, age, money, hasJob = false) {
	const creditMoney = computeCredit(age, hasJob);
	return productPrice <= money + creditMoney;
}
console.log(canBuy1(2000, 25, 1500, true));

/*
Даний список завдань:
	const tasks = ['Завдання 1']
	Створити функції:
	- добавити завдання вкінець;
	- видалення завдання по назві;
	- перенесення завдання на початок списку по назві.
Завжди мутуємо вихідний масив.
*/

const tasks = ['Завдання 1'];

function Add(task) {
	tasks.push(task);
}

function Remove(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		return;
	}
	return tasks.splice(index, 1);
}

function Prioritize(task) {
	const result = Remove(task);
	if (!result) {
		return;
	}
	tasks.unshift(result[0]);
}

Add('Завдання 2');
Add('Завдання 3');
console.log(tasks);

Remove('Завдання 3');
console.log(tasks);

Prioritize('Завдання 4');
console.log(tasks);

/*
	Дано випадковий url: 'https://purpleschool.ru/cource/javascript'
	Потрібно створити функцію, яка виводить в консоль:
	- Протокол (https);
	- Доменне ім'\я (purpleschool.ru);
	- Шлях в середині сайту (/course/javascript)
*/

const url = 'https://purpleschool.ru/cource/javascript';
function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		if (!host.includes('.')) {
			return;
		}
		console.log(protocol, _, host, path);
		console.log(`Протокол: ${protocol.split(':')[0]}`);
		console.log(`Доменне ім'\я: ${host}`);
		console.log(`Шлях в середині сайту: /${path.join('/')}`);
	}
}
getUrlParts(url);

/* 
	Задача вивести в консоль рядок "Я люблю JS !" з масиву,
	проходячи циклом у зворотному порядку, не використовуючи метод reverse.
	const arr = ['!', 'JS', 'люблю', 'Я']
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];
// for (let i = arr.length; i >= 0; i--) {
// 	console.log(arr[i]);
// }

for (let i = arr.length - 1; i >= 0; i--) {
	resultArray.push(arr[i]);
}
console.log(resultArray.join(' '));

/*
	Вивантажені операції користувача
	const operations = [1000, -700, 300, -500, 10000];
	а також початковий баланс в 100$
	Необхідно створити функції розрахунку:
	- підсумкового балансу,
	- наявності від'ємного балансу (якщо після чергової операції баланс < 0, то видавати false),
	- розрахунок середнього прибутку і видатку
*/
const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	for (const element of arrayOfOperations) {
		balance += element;
	}
	return balance;
}
console.log(getBalance(operations, startingBalance));

function checkOperations(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	let isOk = true;
	for (const element of arrayOfOperations) {
		balance += element;
		if (balance < 0) {
			isOk = false;
			break;
		}
	}
	return isOk;
}
console.log(checkOperations(operations, startingBalance));

function averageOperations(arrayOfOperations) {
	let positiveCount = 0;
	let positiveSum = 0;
	let negativeCount = 0;
	let negativeSum = 0;

	for (const element of arrayOfOperations) {
		if (element > 0) {
			positiveCount++;
			positiveSum += element;
		}
		if (element < 0) {
			negativeCount++;
			negativeSum += element;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(averageOperations(operations));
