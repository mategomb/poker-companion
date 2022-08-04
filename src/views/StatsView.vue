<script setup>
	import { store } from "@/store.js";
	import { updateLocalStorage } from "@/shared.js";

	function editGame(id) {
		alert(`The game editing function is not available yet. (id: ${id})`);
	}

	function deleteGame(id) {
		store.games = store.games.filter((game) => game.id !== id);
		updateLocalStorage();
	}
</script>

<template>
	<h2 class="intro">All your stats come up here</h2>

	<table class="table">
		<thead>
			<tr>
				<th colspan="3">Basic Info</th>
				<th colspan="4">Money</th>
			</tr>
			<tr>
				<th>Date</th>
				<th>Room</th>
				<th>Length</th>
				<th>Buy In</th>
				<th>Cash Out</th>
				<th>Gains</th>
				<th>Hourly Rate</th>
			</tr>
		</thead>

		<tbody>
			<tr v-for="game in store.games">
				<td>{{ game.date }}</td>
				<td>{{ game.room }}</td>
				<td>{{ game.length }} mins</td>
				<td>${{ game.buyIn }}</td>
				<td>${{ game.cashOut }}</td>
				<td>${{ game.gains }}</td>
				<td>${{ game.hourly }}</td>
				<td>
					<button class="button" @click="editGame(game.id)" title="Edit Game">
						<i class="bi bi-pencil"></i>
						<span>&#160;Edit</span>
					</button>
					<button class="button" @click="deleteGame(game.id)" title="Remove Game">
						<i class="bi bi-trash3"></i>
						<span>&#160;Delete</span>
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
	.table {
		background-color: var(--white);
		border-collapse: collapse;
		border-radius: 0.6rem;
		overflow: hidden;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #ddd; /* TODO */
		padding: 0.2rem 0.6rem;
	}

	tr:hover {
		background-color: #d6eeee; /* TODO */
	}
</style>
