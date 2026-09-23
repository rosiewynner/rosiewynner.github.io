<script>
	import Carousel from '$lib/components/carousel.svelte';
	import { base } from '$app/paths';

	let { collapsed = $bindable(false) } = $props();
	let carouselOpen = $state(false);

	const openCarousel = () => {
		carouselOpen = true;
	};

	const photos = [
		{ image: 'home/volc.avif', caption: 'Mount Doom, New Zealand, March 2026' },
		{ image: 'home/running.jpg', caption: 'Chicago Half Marathon, April 2024' },
		{ image: 'home/cats.avif', caption: 'Farosh and Molasses, August 2026' },
		{ image: 'home/hobbiton.avif', caption: 'Hobbiton, New Zealand, March 2026' }
	];
</script>

<div class:collapsed class="header-container">
	<img src="background/shelf.png" alt="shelf" class="shelf" />

	<div class="header-images">
		<img
			on:click={openCarousel}
			src="home/volc.avif"
			class="volc carousel-button"
			alt="nz volcano"
		/>
		<img
			on:click={openCarousel}
			src="home/running.jpg"
			class="running carousel-button"
			alt="chicago marathon"
		/>
		<img on:click={openCarousel} src="home/cats.avif" class="cats carousel-button" alt="cats" />
		<img
			on:click={openCarousel}
			src="home/hobbiton.avif"
			class="hobbiton carousel-button"
			alt="hobbiton"
		/>
	</div>

	<div class="header-links">
		<a class="home rotated" href="{base}/">Home</a>
		<a class="projects rotated" href="{base}/projects">Projects</a>
		<a class="sewing rotated" href="{base}/sewing">Sewing</a>
		<a class="baking rotated" href="{base}/dessert">Baking</a>
		<a class="icecream" href="{base}/icecream">Ice Cream</a>
		<a class="art" href="{base}/art">Gallery</a>
	</div>
</div>

<Carousel bind:open={carouselOpen} images={photos} />

<!-- Drawer handle -->

<button
	class:collapsed
	class="drawer-handle"
	on:click={() => (collapsed = !collapsed)}
	aria-label={collapsed ? 'Open header' : 'Close header'}
>
	<span>{collapsed ? '↓' : '↑'}</span>
</button>

<style>
	.header-container {
		width: 100%;
		display: flex;
		justify-content: center;

		top: 20px;
		height: var(--header-height);

		position: fixed;

		transition: transform 0.4s ease;
	}

	/*
	 * Slide the entire shelf upward.
	 *
	 * Keep 30px visible so the drawer handle
	 * has somewhere to live.
	 */
	.header-container.collapsed {
		transform: translateY(calc(-1 * var(--header-height) + 30px));
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

	.baking {
		position: absolute;
		top: 74px;
		left: 278px;
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

	.art {
		position: absolute;
		top: 89px;
		left: 536px;
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

	/*
	 * Drawer handle
	 */

	.drawer-handle {
		position: fixed;

		top: 0;
		left: 50%;

		transform: translateX(-50%);

		width: 80px;
		height: 24px;

		z-index: 10;

		border: none;

		border-radius: 0 0 12px 12px;

		background: #27445d;

		color: white;

		cursor: pointer;

		transition:
			background 0.2s ease,
			height 0.2s ease;
	}

	.drawer-handle:hover {
		height: 30px;
		background: #1d3448;
	}

	.drawer-handle span {
		font-size: 14px;
	}
</style>
