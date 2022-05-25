<script lang="ts">
	import type { ShoeType } from 'src/types';

    export let shoes: ShoeType[] = []
</script>

<svelte:head>
    <title>Welcome to Supershoes</title>
</svelte:head>

{#each shoes as shoe (shoe.shoe_id)}
    <p>{shoe.name}</p>
{/each}
