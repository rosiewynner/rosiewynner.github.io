<script>
	import InstaIcon from '$lib/assets/instagram-icon.jpeg';
	import KickStartIcon from '$lib/assets/kickstarter-icon.png';
	import LinkedInIcon from '$lib/assets/linkedin-icon.png';
	import { base } from '$app/paths';
</script>

<div class="header">
	<img src="shelf.png" alt="shelf" class="shelf" />

	<a class="home" href="{base}/">Home</a>
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
	<!-- <a class="sewing rotated" href="/sewing">Sewing</a> -->
	<a class="gallery rotated" href="/art">Art</a>
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



	.home {
		position: absolute;
		top: 72px;
  		left: 176.5px;	
  		z-index: 3;
	}

	.sewing {
		position: absolute;
		top: 74px;
		left: 358px;
		z-index: 3;
	}

	.gallery {
		position: absolute;
		top: 74px;
  		left: 348px;		
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
