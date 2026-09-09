<script>
	import Ithaca from '$lib/assets/ithaca-polaroid.svg';
	import Cornell from '$lib/assets/cornell-polaroid.svg';
	import Graduation from '$lib/assets/graduation-polaroid.svg';
	import Metz from '$lib/assets/metz-polaroid.svg';
	import Hiking from '$lib/assets/hiking.jpeg';
	import Yellowstone from '$lib/assets/yellowstone.jpg';
	import Glacier from '$lib/assets/glacier.jpg';
	import Note from '$lib/assets/note.png';

	import '$lib/assets/hate_your_writing/Regular.ttf';
</script>

<img src="rain-2.gif" class="rain" />
<img src="office-2.svg" class="office" />


<img class="hiking bulletins" alt="Hiking" src={Hiking} />
<img class="glacier bulletins" alt="Glacier" src={Glacier} />

<style>
	.bulletins {
		position: relative;
		z-index: 3;
	}

	.rain {
		position: fixed;
		z-index: 0;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
	}

	.office {
		position: fixed;
		z-index: 1;
		top: var(--header-height);
		height: calc(100vh - var(--header-height) + 10px);
	}

	.hiking {
		position: fixed;
		top: 260px;
		left: 20%;
		height: 100px;
	}

	.glacier {
		position: fixed;
		top: 260px;
  		left: 500px;		
  		height: 100px;
	}
</style>
