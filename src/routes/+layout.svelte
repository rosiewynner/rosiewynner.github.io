<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
	let headerCollapsed = $state(false);
</script>

<div class:header-collapsed={headerCollapsed} class="layout">
	<Header bind:collapsed={headerCollapsed} />
	<div class="page">
		{@render children?.()}
	</div>
	<Footer />
</div>

<style>
	.layout {
		position: fixed;

		width: 100%;
		height: 100%;

		background-color: var(--room-background);

		z-index: 0;
		left: 0;
	}

	.page {
		position: fixed;

		top: calc(20px + var(--header-height));

		height: calc(100vh - var(--header-height));

		width: 100%;
		overflow-y: scroll;

		display: flex;
		justify-content: center;

		/*
		 * This is the important part.
		 */
		transition:
			top 0.4s ease,
			height 0.4s ease;
	}

	/*
	 * When the drawer is closed, the page expands
	 * upward into the space previously occupied by
	 * the header.
	 */
	.header-collapsed .page {
		top: 20px;

		height: calc(100vh - 20px);
	}
</style>
