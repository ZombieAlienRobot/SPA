import { derived, writable } from "svelte/store";
import type { Shoe } from "src/types/types";

export const itemsInCart = writable(0)
export const cartContents = writable({})
