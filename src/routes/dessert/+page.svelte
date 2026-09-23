<script>
	import Matrix from '$lib/components/matrix.svelte';
	import BarChart from '$lib/components/barchart.svelte';
	import PieChart from '$lib/components/piechart.svelte';
	import Carousel from '$lib/components/carousel.svelte';

	export let data;

	let carouselOpen = false;

	const photos = [
		{ image: 'desserts/BloodOrangeCake.jpg', caption: 'Blood Orange & Olive Oil Cake' },
		{ image: 'desserts/BriocheTwists.jpg', caption: 'Brioche Twists' },
		{ image: 'desserts/croquembouche.jpg', caption: 'Croquembouche' },
		{ image: 'desserts/chocolatecake.jpg', caption: 'Classic Birthday Cake' },
		{ image: 'desserts/kouign-amann.jpg', caption: 'Kouign-Amann' },
		{ image: 'desserts/TarteTropezienne.jpg', caption: 'Tarte Tropezienne' },
		{ image: 'desserts/seedymaplebreakfastmuffin.jpg', caption: 'Seedy Maple Breakfast Muffins' }
	];
</script>

<div class="page">
	<Matrix desserts={data.desserts} />
	<h1>Stephanie and Rosie</h1>
	<div class="charts">
		<BarChart desserts={data.desserts} />
		<PieChart desserts={data.desserts} />
	</div>
	<h1>Dessert Photos</h1>
	<div class="pics">
		<img
			class="dessertpic"
			src="desserts/BloodOrangeCake.jpg"
			alt="Blood Orange & Olive Oil Upside Down Cake"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/BriocheTwists.jpg"
			alt="Brioche Twists"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/croquembouche.jpg"
			alt="Croquembouche"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/chocolatecake.jpg"
			alt="Classic Birthday Cake"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/kouign-amann.jpg"
			alt="Kouign-Amann"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/TarteTropezienne.jpg"
			alt="Tarte Tropezienne"
			on:click={() => (carouselOpen = true)}
		/>
		<img
			class="dessertpic"
			src="desserts/seedymaplebreakfastmuffin.jpg"
			alt="Seedy Maple Breakfast Muffins"
			on:click={() => (carouselOpen = true)}
		/>
	</div>

	<Carousel bind:open={carouselOpen} images={photos} />
</div>

<style>
	.page {
		color: white;
	}

	.charts {
		width: 1200px;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.pics {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
		width: 1200px;
		justify-content: center;
		padding-bottom: 2rem;
	}

	.dessertpic {
		width: 200px;
		height: 200px;
		object-fit: cover;
		cursor: pointer;

		&:hover {
			filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.5));
		}
	}
</style>
