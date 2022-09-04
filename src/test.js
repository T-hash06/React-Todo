const numero1 = 7;
const numero2 = 60;

let i = 1;

while (true) {
	let temp = numero1 * i;

	if (temp === numero2) {
		console.log(`${numero1} es multiplo de ${numero2}`);
		break;
	}

	if (temp > numero2) {
		console.log(`${numero1} no es multiplo de ${numero2}`);
		break;
	}

	i++;
}
