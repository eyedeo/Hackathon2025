const logo = document.getElementById('logo');

const question1 = document.getElementById('question1'); // cigarettes per day or vape pens per year
const question2 = document.getElementById('question2'); // price per pack or vape pen

const qs = document.getElementsByClassName('question');
const button = document.getElementById('button');
const toggle = document.getElementById('mode-toggle');
const label = document.getElementById('mode-label');

const ctx = document.getElementById('graph').getContext('2d');


const myChart = new Chart(ctx, {
	type: 'line',
	data: {
		datasets: [{
			label: 'Lung Health',
			borderWidth: 1
		},
		{
			label: 'Cost',
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: '',
				font: {
					size: 24,
					color: '#e8e8e8'
				}
			},
		},
		scales: {
			x: {
				type: 'linear',
				min: 0,
				max: 10,
				title: {
					display: true,
					text: "Months",
					font: {
						size: 24,
					},
					color: '#e8e8e8'

				},
				ticks: {
					stepSize: 1,
					color: '#e8e8e8',
				}
			},
			y: {
				min: 0,
				max: 1000,
				color: '#e8e8e8',
				title: {
					display: true,
					text: "Lung Health",
					font: {
						size: 24,
					},

					color: '#e8e8e8'
				},
				ticks: {
					color: '#e8e8e8',
					stepSize: 50

				}
			}
		}
	}
});

// Update graph when user presses the graph button
button.addEventListener('click', () => {
	if (question1.value === '' || question2.value === '') {
	}
	else {
		let cigsPerday = question1.value;
		let price = question2.value;

		let cigsPerMonth = cigsPerday * 30;
		let packs = cigsPerMonth / 20;
		let cumulativePrice = packs * price;

		for (let i = 0; i <= 10; i++) {
			myChart.data.datasets[1].data.push({ x: i, y: cumulativePrice });

			cigsPerMonth += cigsPerday * 30;
			packs += cigsPerMonth % 20;
			cumulativePrice += packs * price;
			myChart.update();
		}

	}
});

// Vape mode toggle
toggle.addEventListener('change', () => {
	label.textContent = toggle.checked ? 'Vape Mode' : 'Cig Mode';

	if (toggle.checked) {
		document.body.classList.add('vape-mode');
		logo.src = 'resources/nonico.png';

		qs[0].textContent = 'How many vape pens do you go through per year?';
		qs[1].textContent = 'How much does a vape pen cost?';

	}
	else {
		document.body.classList.remove('vape-mode');
		logo.src = 'resources/nblogo.png';

		qs[0].textContent = 'How many cigarettes do you smoke a day?';
		qs[1].textContent = 'How much does a pack of cigarettes cost?';
	}
});

