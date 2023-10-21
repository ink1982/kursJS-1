//умови в середині функцій
function canAccessWebsite(age) {
	if (age < 18) {
		return false;
	}
	return true;
}
console.log(canAccessWebsite(18));

const canAccessWebsite2 = age => (age < 18 ? 'Ні' : 'Так');
console.log(canAccessWebsite2(18));
