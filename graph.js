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
			}
		},
		scales: {
			x: {
				ticks: {
					maxTicksLimit: 5
				}
			},
			y: {
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
		console.log(num);
		myChart.options.plugins.title.text = `At ${num} cigarettes per day`;

		myChart.data.datasets[0].data.push({ x: 1, y: Number(num) });

		myChart.update();


	}
});
