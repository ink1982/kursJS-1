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

const payRateUSD = 80
const projectHours = 40
const availableHours = (11 - 2) * 5

console.log('Чи зможу я працювати? ' + (availableHours > projectHours))
console.log('Вартість робіт: ' + projectHours * payRateUSD + '$')
