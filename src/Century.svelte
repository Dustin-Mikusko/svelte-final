<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let name;

  const chooseCentury = (e) => {
    let century = e.target.innerText;
    dispatch('changecentury', century)
  } 
</script>


<button type="button" on:click={chooseCentury}>{name}</button>
