import { store } from "@/store.js";

export function updateLocalStorage() {
	localStorage.setItem("games", JSON.stringify(store.games));
}
