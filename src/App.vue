<script setup>
	import { onMounted } from "vue";
	import { RouterView } from "vue-router";
	import { store } from "@/store.js";
	import Header from "./components/Header.vue";
	import Nav from "./components/Nav.vue";
	import Footer from "./components/Footer.vue";

	onMounted(() => {
		if (localStorage.getItem("games")) store.games = JSON.parse(localStorage.getItem("games"));
	});
</script>

<template>
	<Header></Header>
	<Nav></Nav>
	<main class="main">
		<RouterView />
	</main>
	<Footer></Footer>
</template>

<style scoped>
	.main {
		flex-grow: 1;
		margin-left: 1.6rem;
		margin-right: 1.6rem;
		margin-top: 1.2rem;
	}

	@media (min-width: 576px) {
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
	}
</style>
