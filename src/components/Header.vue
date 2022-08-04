<template>
	<header class="header">
		<span class="suits">
			<span class="red">&#9830;&#160;</span>
			<span class="black">&#9827;&#160;</span>
		</span>
		<span class="red title">Poker Companion</span>
		<span class="suits">
			<span class="black">&#160;&#9824;</span>
			<span class="red">&#160;&#9829;</span>
		</span>
	</header>
</template>

<style scoped>
	.header {
		font-size: 1.4rem;
		padding: 1rem 1.8rem;
		text-align: center;
		user-select: none;
	}

	.suits {
		display: none;
	}

	.red {
		color: var(--red-700);
	}

	.black {
		color: var(--black);
	}

	.title {
		font-family: "Holtwood One SC", serif;
	}

	@media (min-width: 576px) {
		.suits {
			display: inline;
		}
	}
</style>
