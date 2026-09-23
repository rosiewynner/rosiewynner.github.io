<script>
	import Project from '$lib/components/project.svelte';
	let projects = [
		{
			title: `'Stained Glass' Door`,
			description:
				'Decorated front door glass using stained glass paint to resemble other stained glass windows in our apartment.',
			coverphoto: 'stainedglass/outside.avif',
			photos: [
				{ image: 'stainedglass/design.JPG', caption: 'design made with Adoble Illustrator' },
				{ image: 'stainedglass/painting.avif', caption: 'painting late at night' },
				{
					image: 'stainedglass/closeup.avif',
					caption: 'black lines made with dried piped paint'
				},
				{ image: 'stainedglass/inspo.JPG', caption: 'reference photo' },
				{ image: 'stainedglass/inside.avif', caption: '' }
			]
		},
		{
			title: 'Puzzle Boxes',
			description: `My partner and I have an annual tradition of creating "escape room boxes" for our friends
            for the holidays. Stemming from our shared love of escape rooms, Zelda dungeons, and Puzzled Pint, our goal is a 
			themed experience that contains a series of non-linear puzzles that build together
			to a final cumulative puzzle.`,
			coverphoto: 'puzzlebox/puzzlebox2023.avif',
			photos: [
				{ image: 'puzzlebox/puzzlebox2023.avif', caption: 'Puzzlebox 2023' },
				{ image: 'puzzlebox/puzzlebox2024.avif', caption: 'Puzzlebox 2024' }
			]
		},
		{
			title: 'Custom Controllers',
			description: `Descorated custom game controllers. Used Spray paint for the base, acrylic for details, 
			and clear coat for durability and shine. Inspiration for the gamecube controller was Zelda Windwaker, 
			and inspiration for the Zbox controller was Calvin and Hobbes.`,
			coverphoto: 'controllers/controllers.jpg',
			photos: [
				{ image: 'controllers/taping.jpg', caption: 'Taping off to spray paint' },
				{ image: 'controllers/spray.jpg', caption: 'Red and blue gradient and stars' },
				{ image: 'controllers/back.jpg', caption: 'Controller back' },
				{ image: 'controllers/calvinandhobbes.jpg', caption: `'Going for the Gusto' inspiration` },
				{ image: 'controllers/gamecube.jpg', caption: 'Windwaker controller' },
				{ image: 'controllers/windwaker.webp', caption: 'Windwaker inspiration' },
				{ image: 'controllers/controllers.jpg', caption: 'Controllers' }
			]
		}
	];
</script>

<div class="contents">
	<div class="title">
		<h1>My projects</h1>
		<h3>(Click a project for more)</h3>
	</div>
	<div class="projects">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</div>

<style>
	.contents {
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	.title {
		display: flex;
		color: white;
		flex-direction: row;
		padding-bottom: 2rem;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.projects {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
