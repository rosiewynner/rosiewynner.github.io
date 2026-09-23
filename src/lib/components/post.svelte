<script>
	export let post;
	export let loadingLazy;
</script>

<div class="post-container">
	<img
		class="post"
		src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
		alt={post.caption ?? ''}
		loading={loadingLazy ? 'lazy' : ''}
	/>

	<div class="overlay">
		<p class="caption">{post.caption ?? ''}</p>
	</div>
</div>

<style>
	.post-container {
		position: relative;
		width: 300px;
		height: 300px;
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
		height: 300px;
		overflow-y: scroll;
		overflow-x: hidden;

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
		padding-top: 2rem;
		margin: 0;
	}
</style>
