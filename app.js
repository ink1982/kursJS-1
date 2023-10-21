//функції в середині функцій

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
	return present * KG_IN_USD;
}

function calculateKm(distance) {
	return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
	const price1 = calculateW(present1);
	console.log(price1);

	const price2 = calculateW(present2);
	console.log(price2);

	const distancePrice = calculateKm(distance);
	console.log(distancePrice);

	return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 10));
