<script>
	import { onMount, onDestroy } from 'svelte';
	import { Title, Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

	const centerTextPlugin = {
		id: 'centerText',

		beforeDraw(chart, args, options) {
			const { ctx, chartArea } = chart;

			if (!chartArea) return;

			const total = options.total ?? 0;

			const x = (chartArea.left + chartArea.right) / 2;
			const y = (chartArea.top + chartArea.bottom) / 2;

			ctx.save();

			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			// Number
			ctx.font = 'bold 32px sans-serif';
			ctx.fillStyle = '#27445d';

			ctx.fillText(total, x, y - 8);

			// Label
			ctx.font = '14px sans-serif';
			ctx.fillStyle = '#666';

			ctx.fillText('recipes', x, y + 22);

			ctx.restore();
		}
	};

	Chart.register(Title, PieController, ArcElement, Tooltip, Legend);

	export let desserts = [];

	let stephPieCanvas;
	let roPieCanvas;

	let stephaniePieChart;
	let rosiePieChart;

	function buildCategoryCounts() {
		const rosieCategories = {};
		const stephanieCategories = {};

		desserts.forEach((row) => {
			if (row.rosie === 'Yes') {
				rosieCategories[row.category] = (rosieCategories[row.category] || 0) + 1;
			}

			if (row.stephanie === 'Yes') {
				stephanieCategories[row.category] = (stephanieCategories[row.category] || 0) + 1;
			}
		});

		return {
			rosieCategories,
			stephanieCategories
		};
	}

	let colors = ['#512D38', '#F4A259', '#ED6A5A', '#87BAAB', '#B27092', '#1C77C3', '#3B6064'];

	function createPieChart(canvas, categories, label, color, title) {
		const labels = Object.keys(categories);
		const data = Object.values(categories);

		const total = data.reduce((sum, value) => sum + Number(value), 0);

		return new Chart(canvas, {
			type: 'doughnut',
			plugins: [centerTextPlugin],
			data: {
				labels,

				datasets: [
					{
						label,
						data,

						backgroundColor: colors,

						borderColor: '#ffffff',
						borderWidth: 2
					}
				]
			},

			options: {
				cutout: '65%',

				responsive: true,

				maintainAspectRatio: false,

				plugins: {
					legend: {
						position: 'right'
					},

					centerText: {
						total
					},

					title: {
						display: true,
						text: title
					},

					tooltip: {
						callbacks: {
							label: (context) => {
								const total = context.dataset.data.reduce((sum, value) => sum + value, 0);

								const value = context.raw;

								const percentage = ((value / total) * 100).toFixed(1);

								return `${context.label}: ${value} (${percentage}%)`;
							}
						}
					}
				}
			}
		});
	}

	function buildCharts() {
		/*
		 * Destroy existing charts first.
		 *
		 * This is important because Svelte may call
		 * this function multiple times when `desserts`
		 * changes.
		 */
		stephaniePieChart?.destroy();
		rosiePieChart?.destroy();

		if (!desserts || desserts.length === 0) {
			return;
		}

		const { rosieCategories, stephanieCategories } = buildCategoryCounts();

		stephaniePieChart = createPieChart(
			stephPieCanvas,
			stephanieCategories,
			'Stephanie',
			'#512D38',
			'Stephanie Recipes by Category'
		);

		rosiePieChart = createPieChart(
			roPieCanvas,
			rosieCategories,
			'Rosie',
			'#B27092',
			'Rosie Recipes by Category'
		);
	}

	onMount(() => {
		buildCharts();
	});

	onDestroy(() => {
		stephaniePieChart?.destroy();
		rosiePieChart?.destroy();
	});

	$: if (desserts && stephPieCanvas && roPieCanvas) {
		buildCharts();
	}
</script>

<div class="charts">
	<div class="chart-container">
		<canvas bind:this={stephPieCanvas}></canvas>
	</div>

	<div class="chart-container">
		<canvas bind:this={roPieCanvas}></canvas>
	</div>
</div>

<style>
	.charts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

		width: 100%;
	}

	.chart-container {
		position: relative;

		width: 100%;

		background-color: #f5f5f5;
		padding: 1rem;
		box-sizing: border-box;
	}

	@media (max-width: 800px) {
		.charts {
			grid-template-columns: 1fr;
		}
	}
</style>
