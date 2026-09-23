<div class="page">
	<div class="art-container">
		<img alt="rope" class="rope" src="gallery/ropeart.webp" />
		<img alt="avocado" class="avocado shadow" src="gallery/avocados.jpg" />
		<img alt="moon" class="moon shadow" src="gallery/moon.avif" />
		<img alt="fish" class="fish shadow" src="gallery/fish.avif" />
		<img alt="painting" class="painting shadow" src="gallery/painting2019.avif" />
	</div>
</div>

<style>
	.art-container {
		display: flex;
		padding: 30px;
		flex-wrap: wrap;
		row-gap: 30px;
		column-gap: 30px;
		justify-content: center;
		align-items: center;
	}
	.avocado {
		height: 300px;
	}

	.moon {
		height: 300px;
	}

	.fish {
		height: 300px;
	}

	.painting {
		height: 300px;
	}

	.rope {
		height: 500px;
		filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
	}

	.shadow {
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	}
</style>
