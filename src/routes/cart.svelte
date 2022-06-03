<script context="module" lang="ts">
	import { itemsInCart, cartContents } from './stores/cart';
	import type { CartItem, Shoe } from 'src/types/types';
</script>

<script lang="ts">
	export let cartItems = $cartContents;
</script>

<main>
	{#each cartItems as cartItem}
		<div class="cart">
			<img src="/shoes/{cartItem.shoe.img}" alt="shoe" />
			<div class="cartContent">
				<h2>{cartItem.shoe.shoeName}</h2>
				<h3>Größe: {cartItem.size}</h3>
				<h3>Anzahl: {cartItem.amount}</h3>
			</div>
		</div>
	{/each}
</main>

<style>
	main {
		justify-content: center;
	}
	.cart {
        margin-top: 0.5rem;
		padding: 1rem;
		border: 0.2rem solid lightgray;
		display: flex;
	}

	.cartContent {
		margin-left: 5rem;
		display: inline-block;
	}

	img {
		width: 15rem;
		object-fit: contain;
	}
</style>
