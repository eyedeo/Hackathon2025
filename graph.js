const logo = document.getElementById('logo');
const packs = document.getElementById('packs');
const qs = document.getElementsByClassName('questions');

packs.addEventListener('input', () => {
	const number = parseFloat(packs.value);
	console.log(number);
});

logo.addEventListener('click', () => {
	window.location.href = "";
});

const toggle = document.getElementById('mode-toggle');
const label = document.getElementById('mode-label');

toggle.addEventListener('change', () => {
	label.textContent = toggle.checked ? 'Vape Mode' : 'Cig Mode';
	if (toggle.checked) {
		document.body.classList.add('vape-mode');
		logo.src='resources/nonico.png';
		qs[0].textContent = 'How many vape pens do you go through per year?';
		qs[1].textContent = 'How much does a usual vape pen cost?';

	} else {
		document.body.classList.remove('vape-mode');
		logo.src='resources/nblogo.png';
		qs[0].textContent = 'How many cigarettes do you smoke a day?';
		qs[1].textContent = 'How much does a pack of cigarettes cost?';
	}
});

