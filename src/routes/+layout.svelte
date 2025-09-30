<script>
import Header from '$lib/components/header.svelte'
import Footer from '$lib/components/footer.svelte'

	let { children } = $props();
</script>

<div class="layout">
<Header />
{@render children?.()}
<Footer/>
</div>



<style>
	.layout {
		    background-color: #02422E;

	}
</style>