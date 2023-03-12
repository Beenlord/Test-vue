<template>
    <div class="application">
		<Header />
		<RouterView ref="pageComponent" />
    </div>
</template>

<script>
import Header from "./assets/components/Header";

export default {
	components: {
		Header,
	},
    data() {
        return {
			uri: window.location.pathname,
		};
    },
	provide() {
		return {
			jsonData: {
			},
		};
	},
	watch: {
		'$route.href': {
			handler(value) {
				this.$nextTick(() => {
					const targets = this.$refs.pageComponent.$el;
					this.$anime
							.timeline()
							.add({
								targets,
								translateY: `25rem`,
							})
							.add({
								targets,
								translateY: `25rem`,
							})
							.add({
								targets,
								translateY: `25rem`,
							});
				});
			},
		},
	},
	mounted() {
	},
};
</script>

<style lang="scss">
.application {
	height: 100vh;

	display: flex;
	flex-direction: column;

	font-size: 1.6rem;
}
</style>
