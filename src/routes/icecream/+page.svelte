<script>
	import Post from '$lib/components/post.svelte';
	let { data } = $props();

	console.log({ data });
</script>

<div class="page">
	<div class="grid">
		{#each data.posts as post}
			<Post {post} />
		{/each}
	</div>
</div>

<style>
	.page {
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
