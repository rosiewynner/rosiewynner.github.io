<script>
	import Post from '$lib/components/post.svelte';
	let { data } = $props();
</script>

<div class="page">
	<h1>Sewing and knitting projects, starting from summer 2024</h1>
	<div class="grid">
		{#each data.posts as post, index}
			<Post {post} loadingLazy={index > 9} />
		{/each}
	</div>
</div>

<style>
	.page {
		text-align: center;
	}

	.grid {
		display: flex;
		padding: 30px;
		flex-wrap: wrap;
		row-gap: 30px;
		column-gap: 30px;
		justify-content: center;
		align-items: center;
	}
</style>
