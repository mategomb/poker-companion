<script setup>
	import { store } from "@/store.js";
	import { updateLocalStorage } from "@/shared.js";

	function deleteAll() {
		store.games = [];
		localStorage.removeItem("games");
	}

	function importFromFile() {
		console.log("hello, import");
	}

	function exportToFile() {
		const data = JSON.stringify(store.games);
		const blob = new Blob([data], { type: "application/json" });
	}
</script>

<template>
	<h2 class="intro">Settings</h2>

	<div>
		<span>
			<input @change="importFromFile" class="is-hidden" id="upload" type="file" accept="application/json" />
			<label class="button" for="upload">Import</label>
		</span>
		<button class="button" @click="exportToFile">Export</button>
		<button class="button" @click="deleteAll">Remove All</button>
	</div>
</template>
