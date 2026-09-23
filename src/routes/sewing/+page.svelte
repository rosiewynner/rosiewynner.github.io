<script>
	import Post from '$lib/components/post.svelte';
	let { data } = $props();
</script>

<div class="page">
	<div class="grid">
		{#each data.posts as post, index}
			<Post {post} loadingLazy={index > 10} />
		{/each}
	</div>
</div>

<style>
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
