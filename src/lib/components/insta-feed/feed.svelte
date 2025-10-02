<script>
	export const { id, caption, media_type, media_url } = props.feed;
</script>

{#if media_type === 'VIDEO'}
	<video width="100%" height="auto" src={media_url} type="video/mp4" controls playsinline> </video>
{:else if media_type === 'CAROUSEL_ALBUM'}
	<img width="100%" height="auto" {id} src={media_url} alt={caption} />
{:else}
	<div class="post">
		<img width="100%" height="auto" {id} src={media_url} alt={caption} />
		<h4 class="caption">{caption}</h4>
	</div>
{/if}

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		padding: 15px;
	}

	.container img {
		width: 100%;
		height: auto;
		display: block;
		transition: all 100ms ease-out;
	}

	.container img:hover {
		transform: scale(1.04);
		filter: brightness(0.5);
	}

	.container img:hover + .caption {
		visibility: visible;
	}

	.caption:hover {
		visibility: visible;
	}

	.caption:hover .container img {
		transform: scale(1.04);
		filter: brightness(0.5);
	}
	.caption {
		visibility: hidden;
		width: 300px;
		margin-top: -310px;
		padding: 15px;
		color: white;
		position: absolute;
		align-content: center;
		justify-content: center;
		font-style: normal;
	}

	.post {
		position: relative;
	}
</style>
