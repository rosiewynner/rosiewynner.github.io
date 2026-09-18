<script>
	let { data } = $props();
</script>

<div class="page">
	<div class="grid">
		{#each data.posts as post}
			<div class="post-container">
				<img
					class="post"
					src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
					alt={post.caption ?? ''}
				/>

				<div class="overlay">
					<p class="caption">{post.caption ?? ''}</p>
				</div>
			</div>
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

	.post-container {
		position: relative;
		width: 300px;
	}

	.post {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	.overlay {
		position: absolute;
		inset: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 2rem;
		box-sizing: border-box;

		background: rgba(0, 0, 0, 0.5);
		color: white;
		text-align: center;

		opacity: 0;
	}

	.post-container:hover .overlay {
		opacity: 1;
	}

	.caption {
		margin: 0;
	}
</style>
