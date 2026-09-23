<script>
	export let images = [];

	export let open = false;

	let current = 0;

	function next() {
		current = (current + 1) % images.length;
	}

	function previous() {
		current = (current - 1 + images.length) % images.length;
	}

	function close() {
		open = false;
	}

	function handleKeydown(event) {
		if (!open) return;

		if (event.key === 'Escape') close();
		if (event.key === 'ArrowRight') next();
		if (event.key === 'ArrowLeft') previous();
	}

	// The cards behind the active image.
	function getCard(index, curr) {
		const offset = (index - curr + images.length) % images.length;

		if (offset === 0) return 'card active';
		if (offset === 1) return 'card next';
		return 'card previous';
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<div class="overlay" role="presentation" on:click={close}>
		<div
			class="carousel"
			role="dialog"
			aria-modal="true"
			aria-label="Image carousel"
			on:click|stopPropagation
		>
			<!-- Image stack -->
			<div class="cards">
				{#each images as { image, caption }, index}
					<div class={getCard(index, current)}>
						<img src={image} alt={`Carousel image ${index + 1}`} draggable="false" loading="lazy" />
						<p>{caption}</p>
					</div>
				{/each}
			</div>

			<!-- Controls -->
			<button class="control previous-button" aria-label="Previous image" on:click={previous}>
				‹
			</button>

			<button class="control next-button" aria-label="Next image" on:click={next}> › </button>

			<!-- Counter -->
			<div class="counter">
				{current + 1} / {images.length}
			</div>

			<button class="close" aria-label="Close carousel" on:click={close}> × </button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 9999;

		display: flex;
		align-items: center;
		justify-content: center;

		/* Black background with 50% opacity */
		background: rgba(0, 0, 0, 0.5);

		backdrop-filter: blur(2px);

		animation: fadeIn 180ms ease-out;
	}

	.carousel {
		position: relative;
		z-index: 9999;

		width: min(90vw, 700px);
		height: min(80vh, 650px);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	/*
   * IMAGE STACK
   */
	.cards {
		position: relative;

		width: min(65vw, 400px);
		height: min(70vh, 500px);

		perspective: 1000px;
		color: black;
	}

	.card {
		position: absolute;
		inset: 0;

		padding: 12px;
		padding-bottom: 45px;

		background: #fafafa;

		border-radius: 4px;

		box-shadow:
			0 25px 50px rgba(0, 0, 0, 0.3),
			0 8px 15px rgba(0, 0, 0, 0.15);

		transition:
			transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
			opacity 350ms ease,
			filter 350ms ease;

		transform-origin: center bottom;

		user-select: none;
	}

	.card img {
		display: block;

		width: 100%;
		height: 100%;

		object-fit: cover;

		border-radius: 2px;

		pointer-events: none;
	}

	/* Front image */
	.card.active {
		z-index: 3;

		opacity: 1;

		transform: translateY(0) rotate(-2deg) scale(1);

		filter: none;
	}

	/* Card behind on the right */
	.card.next {
		z-index: 2;

		opacity: 0.9;

		transform: translateX(45px) translateY(10px) rotate(7deg) scale(0.96);

		filter: brightness(0.9);
	}

	/* Card behind on the left */
	.card.previous {
		z-index: 1;

		opacity: 0.8;

		transform: translateX(-45px) translateY(15px) rotate(-9deg) scale(0.93);

		filter: brightness(0.82);
	}

	/*
   * CONTROLS
   */
	.control {
		position: absolute;

		top: 50%;

		width: 52px;
		height: 52px;

		display: flex;
		align-items: center;
		justify-content: center;

		border: none;
		border-radius: 50%;

		color: #111;
		background: var(--color-green-light);
		font-size: 38px;
		line-height: 1;

		cursor: pointer;

		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);

		transform: translateY(-50%);

		transition:
			transform 150ms ease,
			background 150ms ease;
	}

	.control:hover {
		background: var(--color-green-medium);
	}

	.control:active {
		transform: translateY(-50%) scale(0.92);
	}

	.previous-button {
		left: 0;
	}

	.next-button {
		right: 0;
	}

	/*
   * CLOSE BUTTON
   */
	.close {
		position: absolute;

		top: 10px;
		right: 10px;

		width: 42px;
		height: 42px;

		border: none;
		border-radius: 50%;

		background: var(--color-green-light);

		color: #111;

		font-size: 30px;
		line-height: 1;

		cursor: pointer;

		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	}

	.close:hover {
		background: var(--color-green-medium);
	}

	/*
   * COUNTER
   */
	.counter {
		position: absolute;

		bottom: 5px;
		left: 50%;

		transform: translateX(-50%);

		padding: 6px 12px;

		color: white;
		background: rgba(0, 0, 0, 0.45);

		border-radius: 999px;

		font-family: sans-serif;
		font-size: 13px;

		backdrop-filter: blur(5px);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	/*
   * MOBILE
   */
	@media (max-width: 600px) {
		.carousel {
			width: 100vw;
			height: 85vh;
		}

		.cards {
			width: 65vw;
			height: 60vh;
		}

		.control {
			width: 44px;
			height: 44px;

			font-size: 32px;
		}

		.previous-button {
			left: 8px;
		}

		.next-button {
			right: 8px;
		}

		.hand {
			transform: translateX(-50%) scale(0.8) rotate(-4deg);

			transform-origin: center bottom;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card,
		.overlay,
		.control {
			transition: none;
			animation: none;
		}
	}
</style>
