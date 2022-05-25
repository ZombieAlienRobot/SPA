<script context="module" lang="ts">
	import type {Shoe, Shoesize} from 'src/types/types'
</script>

<script lang="ts">
	export let shoe: Shoe;
	let shoeSizes: Shoesize[] = [
		{ size: 42 },
		{ size: 43 },
		{ size: 44 }
	];
	shoe = {
		name: 'BlueBolt',
		price: 99.95,
		shoesize: shoeSizes,
		description:
			'Gar meisterin ihn arbeitete uhr ernsthaft. Im bewirtung da gestorben du zerfasert verodeten. Frohlich ist schuftet hinabsah begierig gar dus ihr. Stimmts weg gedacht glatten zum weibern ort ist. Hande sehet kennt te da lauft. Ichs in welt pa eile hing. Ei betrubte da wo geworden launisch ehrbaren madchens. Tust en fu sehr arme also du. Befangenen leuchtturm dienstmagd neu nur her las. Er bist herd he hing hell hals. Hemdarmel wo schranken im ab sudwesten mitkommen geschickt senkrecht. Sammelt stickig schritt zu sa se im solange. Berg lag ein ist nahm hast oben bat. Gesellen gru madchens als hinabsah wohlfeil familien halbwegs was. Vorsichtig bis was und unsicherer drechslers grasgarten. Furchtete kammertur polemisch kellnerin mi zu se verstehen.',
		img: 'blue/blue.jpg'
	};

	let selectedShoeSize;
</script>

<main>
	<div class="container">
		<div class="showcase">
			<img src="/shoes/{shoe.img}" alt="running shoe" />
		</div>
		<div class="productinfo">
			<h4>{shoe.name}</h4>
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
