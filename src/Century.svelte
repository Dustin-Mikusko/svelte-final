<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let name;

  const chooseCentury = (e) => {
    let century = e.target.innerText;
    dispatch('changecentury', century)
  } 
</script>


<button type="button" class="century-btn" on:click={chooseCentury}>{name}</button>

<style>
  .century-btn {
    background-color: rgb(19, 145, 255);
    color: white;
    margin: 3px;
    border: none;
    font-size: 1.3em;
    font-family: 'Varela Round', sans-serif;
  }

  .century-btn:hover {
    background-color: rgb(13, 83, 235);
    cursor: pointer;
  }

  .century-btn:active {
    transform: scale(.97);
  }
</style>
