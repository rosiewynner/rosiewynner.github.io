<script>
	import InstaIcon from '$lib/assets/instagram-icon.jpeg';
	import KickStartIcon from '$lib/assets/kickstarter-icon.png';
	import LinkedInIcon from '$lib/assets/linkedin-icon.png';
</script>

<div class="header">
	<img src="shelf.png" alt="shelf" class="shelf" />

	<a class="home" href="/">Rosie Ross</a>
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
	<a class="gallery rotated" href="/gallery">Gallery</a>
</div>

<style>
	.shelf {
		top: 0;
		height: 300px;
		position: fixed;
		z-index: 2;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.home {
		position: fixed;
		top: 125px;
		left: 480px;
		z-index: 3;
	}

	.gallery {
		position: fixed;
		top: 125px;
		left: 700px;
		z-index: 3;
	}

	a {
		color: white;

		&:hover {
			cursor: pointer;
			color: aliceblue;
		}
	}

	.rotated {
		transform: rotate(-90deg);
	}
</style>
