'use strict';

import anime from 'animejs';
// if (anime.default) {
// 	anime = anime.default;
// }

export default {
	install(app, options) {
		app.config.globalProperties.$anime = anime;
	},
};
