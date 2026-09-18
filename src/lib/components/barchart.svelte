<script>
	import { onMount } from 'svelte';

	import {
		Chart,
		LinearScale,
		CategoryScale,
		PointElement,
		Tooltip,
		Legend,
		BarController,
		BarElement
	} from 'chart.js';

	Chart.register(
		LinearScale,
		PointElement,
		Tooltip,
		Legend,
		BarController,
		BarElement,
		CategoryScale
	);

	let barCanvas;
	let barChart;

	export let desserts;

	function buildCharts() {
		let roCategories = {};
		let stephanieCategories = {};

		desserts.forEach((row) => {
			if (row.rosie === 'Yes') {
				roCategories[row.category] = roCategories[row.category]
					? roCategories[row.category] + 1
					: 1;
			}
			if (row.stephanie === 'Yes') {
				stephanieCategories[row.category] = stephanieCategories[row.category]
					? stephanieCategories[row.category] + 1
					: 1;
			}
		});

		const barData = {
			datasets: [
				{
					label: 'Rosie',
					data: roCategories,
					backgroundColor: '#B27092'
				},
				{
					label: 'Stephanie',
					data: stephanieCategories,
					backgroundColor: '#512D38'
				}
			]
		};

		barChart = new Chart(barCanvas, {
			type: 'bar',
			data: barData,
			options: {
				maintainAspectRatio: false
			}
		});
	}

	onMount(buildCharts);

	$: if (desserts) buildCharts();
</script>

<div class="chart-container">
	<canvas bind:this={barCanvas}></canvas>
</div>

<style>
	canvas {
		background-color: #f5f5f5;
		width: 1200px;
		height: 350px;
	}
</style>
