<script>
	import Header from './Header.svelte';
	import Century from './Century.svelte';
	import { fetchAllCenturies } from '../apiCalls.js';
	
	let centuries = [];

	const getCenturies = () => {
		return fetchAllCenturies()
			.then(data => {
				centuries = data.records.filter(record => record.name !=='Unidentified century');
				console.log(centuries)
			})
	}
</script>

<Header />
<main>
	{#if !centuries.length}
		<button type="button" on:click={getCenturies}>Enter</button>
	{:else}
		<h3>Choose a Century</h3>
		{#each centuries as century}
			<Century name={century.name}/>
		{/each}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
