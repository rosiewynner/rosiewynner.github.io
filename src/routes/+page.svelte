<script>
	import Carousel from '$lib/components/carousel.svelte';
	let carouselOpen = false;

	const photos = [
		{ image: 'home/pnw1.jpg', caption: 'Mount Storm King, July 2025' },
		{ image: 'home/pnw2.jpg', caption: 'Olympic National Park, July 2025' }
	];
</script>

<img src="background/rain.gif" class="rain" alt="rain" />
<img src="background/office.svg" class="office" alt="office" />
<div class="page-content">
	<div class="bulletin-board">
		<h1 class="bubbleletters">About me</h1>

		<p class="bio">
			Hello!
			<br /> My name is Rosie and I a software engineer based in Seattle, WA.
			<br />
			<br /> This is my place to document all my projects.
		</p>
		<button class="button-wrapper" on:click={() => (carouselOpen = true)}>
			<img src="home/washington.png" class="washington" alt="washington state" />
		</button>

		<Carousel bind:open={carouselOpen} images={photos} />
	</div>
</div>

<style>
	.page-content {
		position: fixed;
		z-index: 2;
		top: var(--header-height);
		height: calc(100vh - var(--header-height) + 10px);
		width: auto;
		aspect-ratio: 16 / 9;
	}

	.bulletin-board {
		position: absolute;
		top: 2.5%;
		left: 2.5%;
		right: 45.5%;
		bottom: 42%;

		display: flex;
		column-gap: 10px;
		justify-content: center;
	}

	.bubbleletters {
		padding-top: 0.5%;
		font-family: Atop;
		position: fixed;
		color: var(--color-green-medium);
		font-size: clamp(4px, 3vh, 24px);
		text-shadow:
			-1px -1px 0 var(--accent-color),
			1px -1px 0 var(--accent-color),
			-1px 1px 0 var(--accent-color),
			1px 1px 0 var(--accent-color);
	}

	.bio {
		text-align: center;
		padding-top: 6%;
		width: 50%;
	}

	.washington {
		padding-top: 6%;
		height: 150px;
		filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.5));

		&:hover {
			filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.5));
		}
	}

	.button-wrapper {
		background: none;
		border: none;
		cursor: pointer;
	}

	.rain {
		position: fixed;
		z-index: 0;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
	}

	.office {
		position: fixed;
		z-index: 1;
		top: calc(var(--header-height) - 4px);
		height: calc(100vh - var(--header-height) + 10px);
	}

	.content {
		height: calc(100vh - var(--header-height));
	}
</style>
