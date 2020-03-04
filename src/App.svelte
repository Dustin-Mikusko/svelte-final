<script>
	import Header from './Header.svelte';
	import Century from './Century.svelte';
	import Image from './Image.svelte';
	import { fetchAllCenturies, fetchObjectsFromCentury } from '../apiCalls.js';

	let centuries = [];
	let objects = [];
	let currentCentury;

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
		currentCentury = century.detail;
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
		<h3>Enter our virtual studio to see rare artifacts from a variety of different centuries!</h3>
		<button type="button" class="enter-btn" on:click={getCenturies}>Enter</button>
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
			<h3>Artifacts from the {currentCentury}</h3>
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

	.enter-btn {
		background-color: rgb(19, 145, 255);
		width: 20%;
		font-size: 2em;
		font-family: 'Varela Round', sans-serif;
		border: none;
		color: white;
	}

	.enter-btn:hover {
		background-color: rgb(16, 115, 201);
		cursor: pointer;
	}

	.enter-btn:active {
		transform: scale(.97);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
