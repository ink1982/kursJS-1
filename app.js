//switch
const role = 'admin';

if (role === 'manager') {
	console.log('Менеджер');
} else if (role === 'admin') {
	console.log('Адмін');
} else if (role === 'SEO') {
	console.log('СЕО');
} else {
	console.log('Ми вас не знаємо!');
}

switch (role) {
	case 'manager':
		console.log('Менеджер');
		break;
	case 'admin':
		console.log('Адмін');
		break;
	case 'SEO':
		console.log('СЕО');
		break;
	default:
		console.log('Ми вас не знаємо!');
}

switch (role) {
	case 'manager':
	case 'admin':
		console.log('Не керівник');
		break;
	case 'SEO':
		console.log('Керівник');
		break;
	default:
		console.log('Ми вас не знаємо!');
}

const num = 1;
switch (true) {
	case num > 0:
		console.log('Додатне число');
		break;
	case num < 0:
		console.log("Від'ємне число");
		break;
	default:
		console.log('Нуль');
}
