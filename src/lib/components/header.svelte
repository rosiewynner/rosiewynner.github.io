<script>
	// import InstaIcon from '$lib/assets/instagram-icon.jpeg';
	// import KickStartIcon from '$lib/assets/kickstarter-icon.png';
	// import LinkedInIcon from '$lib/assets/linkedin-icon.png';
	import { base } from '$app/paths';
</script>

<div class="header-container">
	<img src="shelf-new.png" alt="shelf" class="shelf" />

	<div class="header-images">
		<img src="volc.avif" class="volc" alt="nz volcano" />

		<img src="running.jpg" class="running" alt="chicago marathon" />
		<img src="cats.avif" class="cats" alt="cats" />
		<img src="hobbiton.avif" class="hobbiton" alt="hobbiton" />

		<!-- <a href='https://www.linkedin.com/in/rosalieross/'> 
			<img src={LinkedInIcon} alt='linkedin' class="logo"/>
		</a>   
		<a href='https://www.kickstarter.com/projects/1444231543/dont-let-ice-creams-be-dreams/description'>
			<img src={KickStartIcon} alt='kickstarter'class="logo"/>
		</a>
		<a href='https://www.instagram.com/icecreamdreamsca/'> 
			<img src={InstaIcon} alt='instagram' class="logo"/>
		</a>
		<a href="/icecream">Ice Cream Development</a> -->
	</div>

	<div class="header-links">
		<a class="home rotated" href="{base}/">Home</a>
		<a class="sewing rotated" href="{base}/sewing">Sewing</a>
		<a class="gallery rotated" href="{base}/art">Art</a>
	</div>
</div>

<style>
	.header-container {
		width: 100%;
		display: flex;
		justify-content: center;
		top: 20px;
		height: var(--header-height);
		position: fixed;
		z-index: 2;
	}

	.shelf {
		height: var(--header-height);
		width: var(--header-width);

		position: fixed;
	}

	.header-images {
		height: 100%;
		width: var(--header-width);
		position: fixed;
	}

	.volc {
		position: relative;
		height: 111px;
		top: 13px;
		left: 33px;
	}

	.running {
		position: relative;
		height: 104px;
		top: 12px;
		left: 239px;
	}

	.cats {
		position: relative;
		height: 108px;
		top: 11px;
		left: 657px;
	}

	.hobbiton {
		position: relative;
		height: 106px;
		top: 13px;
		left: 697px;
	}

	.header-links {
		height: 100%;
		width: var(--header-width);
		position: fixed;
	}

	.home {
		position: absolute;
		top: 72px;
		left: 240px;
		z-index: 3;

		color: #27445d;

		&:hover {
			cursor: pointer;
			color: black;
		}
	}

	.gallery {
		position: absolute;
		top: 74px;
		left: 268.5px;
		z-index: 3;
	}

	.sewing {
		position: absolute;
		top: 74px;
		left: 277px;
		z-index: 3;
	}

	a {
		color: white;

		&:hover {
			cursor: pointer;
			color: #27445d;
		}
	}

	.rotated {
		transform: rotate(-90deg);
	}
</style>
