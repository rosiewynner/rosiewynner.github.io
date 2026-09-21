<script>
	import Project from '$lib/components/project.svelte';
	let projects = [
		{
			title: 'Stained Glass Door',
			description:
				'Decorated front door glass using stained glass paint to resemble other stained glass windows in our apartment.',
			coverphoto: 'stainedglass/outside.JPG',
			photos: [
				{ image: 'stainedglass/design.JPG', caption: 'design made with Adoble Illustrator' },
				{ image: 'stainedglass/painting.JPG', caption: 'painting late at night' },
				{
					image: 'stainedglass/closeup.JPG',
					caption: 'black lines made with dried piped paint'
				},
				{ image: 'stainedglass/inspo.JPG', caption: 'reference photo' },
				{ image: 'stainedglass/outside.JPG', caption: '' }
			]
		},
		{
			title: 'Puzzle Boxes',
			description: `My partner and I have an annual tradition of creating "escape room boxes" for our friends
            for the holidays. Stemming from our shared love of escape rooms, Zelda dungeons, and Puzzled Pint, our goal is a 
			themed experience that contains a series of non-linear puzzles that build together
			to a final cumulative puzzle.`,
			coverphoto: 'puzzlebox/puzzlebox2023.JPG',
			photos: [
				{ image: 'puzzlebox/puzzlebox2023.JPG', caption: 'Puzzlebox 2023' },
				{ image: 'puzzlebox/puzzlebox2024.JPG', caption: 'Puzzlebox 2024' }
			]
		}
	];
</script>

<div class="contents">
	<div class="title">
		<h2>My projects</h2>
		<h3>Click a project for more</h3>
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
	}

	.title {
		display: flex;
		color: white;
		flex-direction: column;
		padding-bottom: 2rem;
	}

	.projects {
		display: flex;
		gap: 2rem;
	}
</style>
