<template>
	<div class="Header">
		<RouterLink to="/">Home page</RouterLink>
		<RouterLink to="/tree">Tree JS</RouterLink>
		<RouterLink to="/value/1">Value 1</RouterLink>
		<RouterLink to="/value/2">Value 2</RouterLink>
		<RouterLink to="/value/3">Value 3</RouterLink>
	</div>
</template>

<style lang="scss">
.Header	{
	padding: 1rem;
	display: flex;
	gap: 1rem;
	a {
		display: block;
		color: green;
		&:hover {
			color: coral;
		}
	}
}
</style>
