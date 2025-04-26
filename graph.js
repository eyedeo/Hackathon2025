const logo = document.getElementById('logo');
const packs = document.getElementById('packs');

packs.addEventListener('input', () => {
	const number = parseFloat(packs.value);
	console.log(number);
});

logo.addEventListener('click', () => {
	window.location.href = "front.html";
});
