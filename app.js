// деструктуризація
const userData = ['Антон', 18, 'Львів'];

function getData() {
	return ['Антон', 18, 'Львів'];
}

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

const [userName, age, city] = getData();

console.log(userName, age, city);
