import { createApp } 	from 'vue';
import {
	createRouter,
	createWebHashHistory,
}						from 'vue-router';
import VueTouchEvents 	from 'vue3-touch-events';
import VueAnime 		from './modules/vue-animejs';

import Application 		from './application/Application.vue';

import PageNotFound 	from './application/pages/error.vue';
import IndexPage 		from './application/pages/index.vue';
import TreePage 		from './application/pages/tree.vue';
import ValuePage 		from './application/pages/value.vue';

const routes = [
	{
		path: 		'/:pathMatch(.*)*',
		component: 	PageNotFound,
	},
	{
		path: 		'/',
		component: 	IndexPage,
	},
	{
		path: 		'/tree',
		component: 	TreePage,
	},
	{
		path: 		'/value/:id',
		component: 	ValuePage,
	},
];

const Router = createRouter({
	history: createWebHashHistory(), routes,
});

createApp(Application)
	.use(Router)
	.use(VueAnime)
	.use(VueTouchEvents)
	.mount('#application');
