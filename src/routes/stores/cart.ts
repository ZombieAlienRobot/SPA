import { derived, readable, writable } from "svelte/store";
import type { CartItem, Shoe } from "src/types/types";
import { element } from "svelte/internal";

export const itemsInCart = writable(0)


export const cartContents = createCartContents();

function createCartContents() {

    let cartItems = new Array<CartItem>()

    const { subscribe, set, update } = writable(cartItems)

    return {
        subscribe,
        addCartItem(cartItem: CartItem) {
            if (!cartItems.find(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size)) {
                cartItems.push(cartItem)
            } else {
                this.increaseAmount(cartItem.amount, cartItem)
            }
            
        },
        removeCartItem(cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems.splice(index, 1, cartItem)
        },
        increaseAmount(amount: number, cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems[index].amount += amount;
        },
        decreaseAmount(amount: number, cartItem: CartItem) {
            let index = cartItems.findIndex(element => element.shoe.shoeName === cartItem.shoe.shoeName && element.size === cartItem.size);
            cartItems[index].amount -= amount;
        },
        empyCart: () => set([]),
    }

}




export const localStore = (key, initial) => {

    const toString = (value) => JSON.stringify(value, null, 2)

    const toObj = JSON.parse

    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial))
    }

    const saved = toObj(localStorage.getItem(key)!)

    const { subscribe, set, update } = writable(saved)

    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, toString(value))
            return set(value)
        },
        update
    }

}


