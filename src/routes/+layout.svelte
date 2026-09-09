<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<div class="layout">
	<Header />
	<div class="page">
		{@render children?.()}
	</div>
	<Footer />
</div>

<style>
	.page {
		position: fixed;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.layout {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: var(--room-background);
		z-index: 0;
		left: 0;
	}
</style>
