<script>
	import Post from '$lib/components/post.svelte';
	let { data } = $props();

	console.log({ data });
</script>

<div class="page">
	<h1>Summer of 2020, 'stuck at home,' I learned to make ice cream</h1>
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
