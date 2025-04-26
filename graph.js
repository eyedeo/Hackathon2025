// Logo, toggle, and questions
const logo = document.getElementById('logo');
const question1 = document.getElementById('question1'); // cigarettes per day or vape pens per year
const question2 = document.getElementById('question2'); // how long smoking or vaping
const question3 = document.getElementById('question3'); // price per pack or vape pen
const qs = document.getElementsByClassName('question');

const toggle = document.getElementById('mode-toggle');
const label = document.getElementById('mode-label');

// Chart.js setup
const ctx = document.getElementById('graph').getContext('2d');
let num = 0;

const myChart = new Chart(ctx, {
	type: 'line',
	data: {
		datasets: [{
			label: 'Simple Dataset',
			borderWidth: 1
		}]
	},
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: '',
				font: {
					size: 24
				}
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Months",
					font: {
						size: 24
					}
				},
				ticks: {
					maxTicksLimit: 5
				}
			},
			y: {
				title: {
					display: true,
					text: "Lung Health",
					font: {
						size: 24
					}
				},
				ticks: {
					maxTicksLimit: 5
				}
			}
		}
	}
});

// Update graph when user enters number of cigarettes
question1.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		num = question1.value;
		console.log(num);
		myChart.options.plugins.title.text = `At ${num} cigarettes per day`;

		myChart.data.datasets[0].data.push({ x: 1, y: Number(num) });
		myChart.update();
	}
});

// Vape mode toggle
toggle.addEventListener('change', () => {
	label.textContent = toggle.checked ? 'Vape Mode' : 'Cig Mode';
	
	if (toggle.checked) {
		document.body.classList.add('vape-mode');
		logo.src = 'resources/nonico.png';

		qs[0].textContent = 'How many vape pens do you go through per year?';
		qs[1].textContent = 'How long have you been vaping?';
		qs[2].textContent = 'How much does a vape pen cost?';

	} else {
		document.body.classList.remove('vape-mode');
		logo.src = 'resources/nblogo.png';

		qs[0].textContent = 'How many cigarettes do you smoke a day?';
		qs[1].textContent = 'How long have you been smoking?';
		qs[2].textContent = 'How much does a pack of cigarettes cost?';
	}
});

