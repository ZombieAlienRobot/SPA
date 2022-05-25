<script context="module" lang="ts">
	import type { Shoe, Shoesize } from 'src/types/types';

	export async function load({ fetch, params }) {
		
		const { shoeName } = params;
		const response = await fetch(`/api/${shoeName}`);	

		return {
			status: response.status,
			props: {
				shoe: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	export let shoe: Shoe;
	export let shoeSizes = shoe.shoesize;
	let selectedShoeSize;
</script>

<main>
	<div class="container">
		<div class="showcase">
			<img src="/shoes/{shoe.img}" alt="running shoe" />
		</div>
		<div class="productinfo">
			<h4>{shoe.shoeName}</h4>
			<h4>{shoe.price} €</h4>
			<form>
				<select bind:value={selectedShoeSize}>
					{#each shoeSizes as shoeSize}
						<option value="shoeSizes">
							{shoeSize.size}
						</option>
					{/each}
				</select>
			</form>
			<button>Zum Warenkorb hinzufügen</button>
		</div>
	</div>
	<div class="productdescription">
		<h4>Beschreibung</h4>
		<p>{shoe.description}</p>
	</div>
</main>

<style>
	.container {
		margin-left: 25%;
		display: inline-flex;
	}

	.showcase {
		margin-right: 2em;
		border: 1px solid lightgray;
	}

	.productinfo form {
		padding-bottom: 1em;
	}
	.productinfo {
		display: inline-block;
	}

	.productdescription {
		margin-left: 25%;
		margin-top: 1rem;
		border-top: 2px solid grey;
		max-width: 50%;
	}
</style>
