<script>
	import Header from './Header.svelte';
	import Century from './Century.svelte';
	import Image from './Image.svelte';
	import { fetchAllCenturies, fetchImagesFromCentury } from '../apiCalls.js';

	let centuries = [];
	let currentCentury;
	let images = [];

	const getCenturies = () => {
		return fetchAllCenturies()
			.then(data => {
				centuries = data.records.filter(record => {
					if (record.name !=='Unidentified century' && record.name !=='(not assigned)') {
						return record
					}
				});
			})
	}

	const changeCentury = century => { 
		currentCentury = century;
		return fetchImagesFromCentury(currentCentury)
			.then(data => {
				images =  data.records.map(record => record);
				console.log(images);
				return images
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
			<Century 
			name={century.name}
			on:changecentury={changeCentury}/>
		{/each}
		<br><br>
	{/if}
	{#if !images.length}
		<h3>Images shown here...</h3>
		{:else}
			{#each images as image}
				<Image url={image.baseimageurl}/>
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
