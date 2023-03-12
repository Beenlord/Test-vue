<template>
	<div class="page page__error">
		<div class="error-code">Err 404</div>
		<div class="error-text">Страница не найдена.</div>
	</div>
</template>

<style lang="scss">
.page__error {
	flex-grow: 1;
	padding: 1rem;

	.error-code {
		color: red;
	}
	.error-text {
		font-size: 0.8em;
	}
}
</style>
