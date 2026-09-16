<script>
	import InstaIcon from '$lib/assets/instagram-icon.jpeg';
	import KickStartIcon from '$lib/assets/kickstarter-icon.png';
	import LinkedInIcon from '$lib/assets/linkedin-icon.png';
	import { base } from '$app/paths';
</script>

<div class="header">
	<img src="shelf.png" alt="shelf" class="shelf" />

	<a class="home rotated" href="{base}/">Home</a>
	<img src="volc.avif" class="volc" alt="nz volcano"  />
	<img src="running.jpg" class="running" alt="chicago marathon"  />
	<img src="cats.avif" class="cats" alt="cats"  />
	<img src="hobbiton.avif" class="hobbiton" alt="hobbiton"  />

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
	<a class="sewing rotated" href="{base}/sewing">Sewing</a>
	<a class="gallery rotated" href="{base}/art">Art</a>
</div>


<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		top: 0;
		height: var(--header-height);
		position: fixed;
		z-index: 2;
	}

	.shelf {
		height: var(--header-height);
		display: flex;
		align-items: center;

	}

	.volc {
		position: fixed;
  		height: 88px;
		top: 36px;
		left: 154px;
	}

	.running {
		position: fixed;
		height: 91px;
		top: 30px;
		left: 518px;
	}

	.cats {
		position: fixed;
  		height: 94px;
		top: 29px;
		left: 1035px;
	}

	.hobbiton {
		position: fixed;
  		height: 87px;
		top: 37px;
		left: 1202px;
	}

	.home {
		position: absolute;
		top: 72px;
  		left: 338px;  		
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
  		left: 366.5px;
		z-index: 3;
	}

	.sewing {
		position: absolute;
		top: 74px;
  		left: 375px;
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
