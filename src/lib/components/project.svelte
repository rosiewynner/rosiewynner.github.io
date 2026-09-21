<script>
	import Carousel from '$lib/components/carousel.svelte';

	let carouselOpen = false;

	export let project;

	let { coverphoto, title, description, photos } = project;
</script>

<Carousel bind:open={carouselOpen} images={photos} />

<button class="project" on:click={(carouselOpen = true)}>
	<div class="description">
		<h1 class="title">{title}</h1>
		<p>
			{description}
		</p>
	</div>
	<img class="coverphoto" src={coverphoto} />
</button>

<style>
	.project {
		display: flex;
		flex-direction: row;
		width: 600px;
		height: 400px;
		color: black;
		border-radius: 2rem;
		border: none;
		background-color: var(--accent-color-2);

		&:hover {
			filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.5));
			cursor: pointer;
			background-color: var(--color-green-light);
		}
	}

	.title {
		margin: 0;
	}

	.description {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-right: 0;
	}

	.coverphoto {
		padding: 2rem;
	}
</style>
