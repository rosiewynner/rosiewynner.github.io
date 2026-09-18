<script>
	import { onMount } from 'svelte';
	import {
		Chart,
		ScatterController,
		LinearScale,
		PointElement,
		Tooltip,
		Legend,
		BarController,
		BarElement
	} from 'chart.js';

	Chart.register(
		ScatterController,
		LinearScale,
		PointElement,
		Tooltip,
		Legend,
		BarController,
		BarElement
	);

	export let desserts;

	let recipes = [];

	const attributes = {
		activeTime: {
			label: 'Active Time',
			type: 'number',
			parse: parseTime
		},

		totalTime: {
			label: 'Total Time',
			type: 'number',
			parse: parseTime
		},

		difficulty: {
			label: 'Difficulty',
			type: 'ordinal',

			values: {
				1: 'Easy',
				2: 'Medium',
				3: 'Hard'
			},

			parse: (value) => Number(value)
		},

		season: {
			label: 'Season',
			type: 'category',

			values: {
				1: 'Spring',
				2: 'Summer',
				3: 'Fall',
				4: 'Winter',
				5: 'All'
			},

			parse: (value) => {
				if (!value) return null;

				const normalized = value.toLowerCase();

				if (normalized.includes('spring')) return 1;
				if (normalized.includes('summer')) return 2;
				if (normalized.includes('fall')) return 3;
				if (normalized.includes('winter')) return 4;
				if (normalized.includes('all')) return 5;

				return null;
			}
		},

		servings: {
			label: 'Servings',
			type: 'number',
			parse: parseServings
		},

		flourCups: {
			label: 'Flour (cups)',
			type: 'number',
			parse: parseFraction
		},

		eggsWhole: {
			label: 'Whole Eggs',
			type: 'number',
			parse: Number
		},

		eggYolks: {
			label: 'Egg Yolks',
			type: 'number',
			parse: Number
		},

		eggWhites: {
			label: 'Egg Whites',
			type: 'number',
			parse: Number
		},

		containsNuts: {
			label: 'Contains Nuts',
			type: 'boolean',
			values: {
				0: 'No',
				1: 'Yes'
			},
			parse: parseBoolean
		},

		onlyPantry: {
			label: 'Pantry Only',
			type: 'boolean',
			values: {
				0: 'No',
				1: 'Yes'
			},
			parse: parseBoolean
		},

		isYeasted: {
			label: 'Is Yeasted',
			type: 'boolean',
			values: {
				0: 'No',
				1: 'Yes'
			},
			parse: parseBoolean
		},

		stephanie: {
			label: 'Stephanie Made',
			type: 'boolean',
			values: {
				0: 'No',
				1: 'Yes'
			},
			parse: parseBoolean
		},

		rosie: {
			label: 'Rosie Made',
			type: 'boolean',
			values: {
				0: 'No',
				1: 'Yes'
			},
			parse: parseBoolean
		},

		category: {
			label: 'Category',
			type: 'category',

			// These will be generated dynamically.
			values: {},

			parse: (value) => value
		}
	};

	let xAttribute = 'activeTime';
	let yAttribute = 'totalTime';

	let canvas;
	let chart;

	function parseTime(value) {
		if (!value) return null;

		const text = String(value).toLowerCase();

		let minutes = 0;

		const hours = text.match(/(\d+(?:\.\d+)?)\s*hour/);

		const mins = text.match(/(\d+(?:\.\d+)?)\s*minute/);

		if (hours) {
			minutes += Number(hours[1]) * 60;
		}

		if (mins) {
			minutes += Number(mins[1]);
		}

		return minutes > 0 ? minutes : null;
	}

	function parseFraction(value) {
		if (value === null || value === undefined || value === '') {
			return null;
		}

		const text = String(value).trim();

		if (text.includes(' ')) {
			const parts = text.split(/\s+/);

			if (parts.length === 2) {
				const whole = Number(parts[0]);
				const fraction = parseFraction(parts[1]);

				if (!Number.isNaN(whole) && fraction !== null) {
					return whole + fraction;
				}
			}
		}

		if (text.includes('/')) {
			const [numerator, denominator] = text.split('/').map(Number);

			if (Number.isFinite(numerator) && Number.isFinite(denominator) && denominator !== 0) {
				return numerator / denominator;
			}

			return null;
		}

		const number = Number(text);

		return Number.isFinite(number) ? number : null;
	}

	function parseServings(value) {
		if (!value) return null;

		const match = String(value).match(/\d+(?:\.\d+)?/);

		if (!match) return null;

		const firstNumber = Number(match[0]);

		const range = String(value).match(/(\d+(?:\.\d+)?)\s*(?:to|-)\s*(\d+(?:\.\d+)?)/);

		if (range) {
			const min = Number(range[1]);
			const max = Number(range[2]);

			return (min + max) / 2;
		}

		return firstNumber;
	}

	function parseBoolean(value) {
		if (!value) return null;

		const normalized = String(value).trim().toLowerCase();

		if (normalized === 'yes') return 1;
		if (normalized === 'no') return 0;

		return null;
	}

	function loadRecipes() {
		recipes = desserts;

		buildCategoryValues();

		updateChart();
	}

	function buildCategoryValues() {
		const categoryAttributes = ['category'];

		for (const key of categoryAttributes) {
			const uniqueValues = [...new Set(recipes.map((recipe) => recipe[key]).filter(Boolean))];

			attributes[key].values = {};

			uniqueValues.forEach((value, index) => {
				attributes[key].values[index + 1] = value;
			});

			/*
			 * Override the parser now that we know
			 * the actual category values.
			 */
			attributes[key].parse = (value) => {
				if (!value) return null;

				const index = uniqueValues.indexOf(value);

				return index >= 0 ? index + 1 : null;
			};
		}
	}

	function getNumericValue(recipe, key) {
		const attribute = attributes[key];

		if (!attribute) return null;

		const value = recipe[key];

		if (value === undefined || value === null || value === '') {
			return null;
		}

		const parsed = attribute.parse(value);

		return Number.isFinite(parsed) ? parsed : null;
	}

	function displayValue(recipe, key) {
		const attribute = attributes[key];

		if (!attribute) {
			return recipe[key];
		}

		return recipe[key];
	}

	function updateChart() {
		if (!chart) return;

		const xConfig = attributes[xAttribute];
		const yConfig = attributes[yAttribute];

		const data = recipes
			.map((recipe) => {
				const x = getNumericValue(recipe, xAttribute);
				const y = getNumericValue(recipe, yAttribute);

				if (x === null || y === null) {
					return null;
				}

				return {
					x,
					y,
					recipe
				};
			})
			.filter(Boolean);

		chart.data.datasets[0].data = data;

		chart.options.scales.x.title.text = xConfig.label;
		chart.options.scales.y.title.text = yConfig.label;

		/*
		 * Configure category/ordinal axis labels.
		 */
		chart.options.scales.x.ticks.callback = (value) => {
			if (xConfig.values?.[value] !== undefined) {
				return xConfig.values[value];
			}

			return value;
		};

		chart.options.scales.y.ticks.callback = (value) => {
			if (yConfig.values?.[value] !== undefined) {
				return yConfig.values[value];
			}

			return value;
		};

		chart.update();
	}

	function createChart() {
		chart = new Chart(canvas, {
			type: 'scatter',
			data: {
				datasets: [
					{
						label: 'Recipes',

						data: [],

						backgroundColor: 'rgba(59, 130, 246, 0.65)',

						borderColor: 'rgba(59, 130, 246, 1)',

						pointRadius: 6,

						pointHoverRadius: 9
					}
				]
			},

			options: {
				responsive: true,

				maintainAspectRatio: false,

				scales: {
					x: {
						type: 'linear',

						title: {
							display: true,
							text: ''
						}
					},

					y: {
						type: 'linear',

						title: {
							display: true,
							text: ''
						}
					}
				},

				plugins: {
					legend: {
						display: false
					},

					tooltip: {
						callbacks: {
							label: (context) => {
								const recipe = context.raw.recipe;

								const x = displayValue(recipe, xAttribute);
								const y = displayValue(recipe, yAttribute);

								return [
									recipe.recipeName,
									`${attributes[xAttribute].label}: ${x}`,
									`${attributes[yAttribute].label}: ${y}`
								];
							}
						}
					}
				}
			}
		});
	}

	onMount(() => {
		createChart();

		loadRecipes();

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

<div class="recipe-explorer">
	<div class="matrix-header">
		<div>
			<h1>Ultimate Dessert Person Matrix</h1>
			<p>
				One of my favorite things about Claire Saffitz's "Dessert Person" is the 'Recipe Matrix' at
				the beginning of the cookbook, that plots each recipe by difficulty and total time. It led
				me and data interested friend, Stephanie, to want the ability to plot the recipes by more
				attributes, such as 'active time', and whether or not we ourselves had made them. (leverages
				chartjs)
			</p>
		</div>
		<div class="controls">
			<div class="control">
				<label for="x-axis"> X axis </label>

				<select id="x-axis" bind:value={xAttribute} on:change={updateChart}>
					{#each Object.entries(attributes) as [key, attribute]}
						<option value={key}>
							{attribute.label}
						</option>
					{/each}
				</select>
			</div>

			<div class="control">
				<label for="y-axis"> Y axis </label>

				<select id="y-axis" bind:value={yAttribute} on:change={updateChart}>
					{#each Object.entries(attributes) as [key, attribute]}
						<option value={key}>
							{attribute.label}
						</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<div class="chart-wrapper">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style>
	.recipe-explorer {
		width: 1200px;
	}

	.matrix-header {
		display: flex;
		justify-content: space-between;
	}

	canvas {
		background-color: #f5f5f5;
		height: 800px;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.control {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		font-size: 0.85rem;
		font-weight: 600;
	}

	select {
		min-width: 220px;
		padding: 0.6rem 0.75rem;

		border: 1px solid #ccc;
		border-radius: 6px;

		background: white;

		font-size: 1rem;
	}

	.chart-wrapper {
		position: relative;

		width: 100%;
		height: 600px;
	}
</style>
