<script setup>
	import { ref } from "vue";
	import { v4 as uuidv4 } from "uuid";
	import { store } from "@/store.js";
	import { updateLocalStorage } from "@/shared.js";

	const game = ref({
		id: null,
		date: null,
		room: null,
		length: null,
		buyIn: null,
		cashOut: null,
		gains: null,
		hourly: null
	});

	function handleSubmit() {
		game.value.id = uuidv4();
		game.value.gains = game.value.cashOut - game.value.buyIn;
		game.value.hourly = Math.round(game.value.gains / (game.value.length / 60));

		store.games.push({ ...game.value });
		updateLocalStorage();

		for (const property in game.value) game.value[property] = null;
	}
</script>

<template>
	<h2 class="intro">Add New Games</h2>

	<form @submit.prevent="handleSubmit">
		<div>
			<fieldset>
				<input v-model="game.date" type="date" required />
				<input v-model="game.room" type="text" placeholder="Room" required />
				<input v-model="game.length" type="number" placeholder="Length (in minutes)" required />
			</fieldset>
			<fieldset>
				<input v-model="game.buyIn" type="number" placeholder="Buy In" required />
				<input v-model="game.cashOut" type="number" placeholder="Cash Out" required />
			</fieldset>
		</div>
		<div>
			<button class="button" type="submit">
				<i class="bi bi-check-lg"></i>
				<span>&#160;Submit</span>
			</button>
		</div>
	</form>
</template>

<style scoped></style>
