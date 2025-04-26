const logo = document.getElementById('logo');
const cig = document.getElementById('cigs');
const pack = document.getElementById('packs');
const qs = document.getElementsByClassName('question');

pack.addEventListener('input', () => {
	const number = parseFloat(pack.value);
	console.log(number);
});
cig.addEventListener('input', () => {
	const number = parseFloat(cig.value);
	console.log(number);
});

document.getElementById('logo').addEventListener('click', function() {
	window.location.href = 'front.html';
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

