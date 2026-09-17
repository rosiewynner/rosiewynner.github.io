<script>
	import Carousel from '$lib/components/carousel.svelte';
	import { base } from '$app/paths';

	let carouselOpen = false;

	const photos = [
		{ image: 'volc.avif', caption: 'Mount Doom, New Zealand, March 2026' },
		{ image: 'running.jpg', caption: 'Chicago Half Marathon, April 2024' },
		{ image: 'cats.avif', caption: 'Farosh and Molasses, August 2026' },
		{ image: 'hobbiton.avif', caption: 'Hobbiton, New Zealand, March 2026' }
	];
</script>

<div class="header-container">
	<img src="shelf-new.png" alt="shelf" class="shelf" />

	<div class="header-images">
		<img
			on:click={() => (carouselOpen = true)}
			src="volc.avif"
			class="volc carousel-button"
			alt="nz volcano"
		/>
		<img
			on:click={() => (carouselOpen = true)}
			src="running.jpg"
			class="running carousel-button"
			alt="chicago marathon"
		/>
		<img
			on:click={() => (carouselOpen = true)}
			src="cats.avif"
			class="cats carousel-button"
			alt="cats"
		/>
		<img
			on:click={() => (carouselOpen = true)}
			src="hobbiton.avif"
			class="hobbiton carousel-button"
			alt="hobbiton"
		/>

		<Carousel bind:open={carouselOpen} images={photos} />
	</div>

	<div class="header-links">
		<a class="home rotated" href="{base}/">Home</a>
		<a class="projects rotated" href="{base}/projects">Projects</a>
		<a class="sewing rotated" href="{base}/sewing">Sewing</a>
		<a class="gallery rotated" href="{base}/art">Art</a>
		<a class="icecream" href="{base}/icecream">Ice Cream</a>
	</div>
</div>

<style>
	.header-container {
		width: 100%;
		display: flex;
		justify-content: center;
		top: 20px;
		height: var(--header-height);
		position: fixed;
		z-index: 2;
	}

	.shelf {
		height: var(--header-height);
		width: var(--header-width);

		position: fixed;
	}

	.header-images {
		width: var(--header-width);
		position: fixed;
	}

	.carousel-button:hover {
		filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.5));
		cursor: pointer;
	}

	.volc {
		position: relative;
		height: 111px;
		top: 13px;
		left: 33px;
	}

	.running {
		position: relative;
		height: 104px;
		top: 12px;
		left: 239px;
	}

	.cats {
		position: relative;
		height: 108px;
		top: 11px;
		left: 657px;
	}

	.hobbiton {
		position: relative;
		height: 106px;
		top: 13px;
		left: 697px;
	}

	.header-links {
		width: var(--header-width);
		position: fixed;
	}

	.home {
		position: absolute;
		top: 72px;
		left: 240px;
		z-index: 3;

		color: #27445d;

		&:hover {
			cursor: pointer;
			color: black;
		}
	}

	.projects {
		position: absolute;
		top: 74px;
		left: 244.5px;
		z-index: 3;
	}

	.gallery {
		position: absolute;
		top: 74px;
		left: 292px;
		z-index: 3;
	}

	.sewing {
		position: absolute;
		top: 74px;
		left: 300px;
		z-index: 3;
	}

	.icecream {
		position: absolute;
		top: 72px;
		left: 528px;
		z-index: 3;
	}

	a {
		color: white;

		&:hover {
			cursor: pointer;
			color: #27445d;
		}
	}

	.rotated {
		transform: rotate(-90deg);
	}
</style>
