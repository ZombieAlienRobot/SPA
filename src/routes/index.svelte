<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');

		if (res.ok) return { props: { shoes: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import type { Shoe } from 'src/types/types';

	export let shoes: Shoe[];
</script>

<main>
    {#each shoes as shoe}
        <a href={`/${shoe.name}`} class="box">
        <img src="/shoes/{shoe.img}" alt="running shoe" />
        <h2>{shoe.name}</h2>
        </a>

    {/each}
</main>
