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

<img src="rain-2.gif" class="office" />
<img src="office-2.svg" class="office" />

<img class="ithaca bulletins" alt="ithaca" src={Ithaca} />
<img class="yellowstone bulletins" alt="yellowstone" src={Yellowstone} />
<img class="graduation bulletins" alt="graduation" src={Graduation} />
<img class="hiking bulletins" alt="Hiking" src={Hiking} />
<img class="glacier bulletins" alt="Glacier" src={Glacier} />

<style>
	.bulletins {
		position: relative;
		z-index: 3;
	}

	.office {
		position: fixed;
		z-index: 1;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
	}

	.ithaca {
		top: 400px;
		left: 640px;
		height: 150px;
	}

	.yellowstone {
		top: 260px;
		left: 640px;
		height: 100px;
	}

	.hiking {
		top: 260px;
		left: 20%;
		height: 100px;
	}

	.graduation {
		top: 400px;
		left: 900px;
		height: 150px;
	}

	.glacier {
		top: 260px;
		left: 1050px;
		height: 100px;
	}
</style>
