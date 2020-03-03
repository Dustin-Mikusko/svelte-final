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
    background-color: rgb(53, 175, 220);
    color: white;
    margin: 3px;
    border: none;
  }

  .century-btn:hover {
    background-color: rgb(35, 146, 186);
    cursor: pointer;
  }

  .century-btn:active {
    transform: scale(.97);
  }
</style>
