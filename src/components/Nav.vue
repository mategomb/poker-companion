<script setup>
	import { ref } from "vue";
	import { RouterLink } from "vue-router";

	const isMenuOpen = ref(false);

	function toggleMenu() {
		isMenuOpen.value = !isMenuOpen.value;
	}

	function closeMenu() {
		isMenuOpen.value = false;
	}
</script>

<template>
	<button class="button toggler is-hidden-above-sm" @click="toggleMenu">
		{{ isMenuOpen ? "&#10005; Close" : "&#9776; Menu" }}
	</button>
	<nav class="nav" :class="{ 'is-hidden-below-sm': !isMenuOpen }" @click="closeMenu">
		<RouterLink class="link" to="/">
			<div>🃏</div>
			<div>Home</div>
		</RouterLink>
		<RouterLink class="link" to="/projects">
			<div>📂</div>
			<div>Projects</div>
		</RouterLink>
		<RouterLink class="link" to="/add">
			<div>➕</div>
			<div>Add Game</div>
		</RouterLink>
		<RouterLink class="link" to="/stats">
			<div>📋</div>
			<div>Stats</div>
		</RouterLink>
		<RouterLink class="link" to="/charts">
			<div>📈</div>
			<div>Charts</div>
		</RouterLink>
		<RouterLink class="link" to="/notes">
			<div>📝</div>
			<div>Notes</div>
		</RouterLink>
		<RouterLink class="link" to="/settings">
			<div>🔧</div>
			<div>Settings</div>
		</RouterLink>
	</nav>
</template>

<style scoped>
	.toggler {
		border-bottom-right-radius: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1;
	}

	.nav {
		background-color: var(--yellow-500);
		display: flex;
		flex-direction: column;
		position: fixed;
		user-select: none;
		width: 100%;
	}

	.link {
		align-items: center;
		column-gap: 0.2rem;
		display: flex;
		justify-content: center;
		padding-bottom: 0.8rem;
		padding-top: 0.8rem;
	}

	.link:hover {
		background-color: var(--yellow-300);
	}

	.link:active {
		background-color: var(--yellow-200);
	}

	.router-link-exact-active {
		pointer-events: none;
	}

	@media (min-width: 576px) {
		.nav {
			flex-direction: row;
			justify-content: center;
			position: initial;
		}

		.link {
			flex-direction: column;
			padding-bottom: 0.4rem;
			padding-top: 0.4rem;
			padding-left: 0.7rem;
			padding-right: 0.7rem;
		}
	}

	@media (min-width: 768px) {
		.link {
			flex-direction: initial;
			padding-bottom: 0.6rem;
			padding-top: 0.6rem;
		}
	}
</style>
