const cigs = document.getElementById("question1");
let num = 0;

const ctx = document.getElementById('graph').getContext('2d');

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

cigs.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		num = cigs.value;

		myChart.options.plugins.title.text = `At ${num} cigarettes per day`;

		myChart.update();


	}
});
