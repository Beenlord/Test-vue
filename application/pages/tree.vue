<template>
	<div class="page page__value">
		<svg class="lines" width="580" height="400" xmlns="http://www.w3.org/2000/svg">
			<!-- Created with SVG Editor - http://github.com/mzalive/SVG Editor/ -->
			<g>
				<title>Layer 1</title>
				<path id="svg_1" d="m162,77.453125c0,0 -57,119 -57,119c0,0 160,75 161,75c1,0 145,-65 145,-65.453125c0,0.453125 -114,-99.546875 -116,-100.546875c-2,-1 -133,-28 -133,-28z" stroke-width="1.5" stroke="#000" fill="#fff"/>
			</g>
		</svg>
	</div>
</template>

<script>

export default {
	inject: [
	],
	data() {
		return {
		};
	},
	beforeMount() {
		window.addEventListener("beforeunload", this.preventNav);
	},
	mounted() {
		const el = this.$el.querySelector('.lines path')
		this.$anime({
			targets: el,
			strokeDashoffset: [this.$anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function (el, i) {
				return i * 250
			},
			direction: 'alternate',
		});
	},
	methods: {
	},
};
</script>

<style lang="scss">
.page__value {

}
</style>
