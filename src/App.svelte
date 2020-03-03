<script>
	import Header from './Header.svelte';
	import Century from './Century.svelte';
	import Image from './Image.svelte';
	import { fetchAllCenturies, fetchObjectsFromCentury } from '../apiCalls.js';

	let centuries = [];
	let objects = [];

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
		objects = [];
		return fetchObjectsFromCentury(century.detail)
			.then(data => {
				let singleImageObjects =  data.records.filter(record => record.imagecount === 1);
				objects = singleImageObjects.map(object => object.images[0].baseimageurl);
				return objects
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
	{#if !objects.length}
		<h3>Images shown here...</h3>
		{:else}
			{#each objects as object}
				<Image url={object}/>
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
