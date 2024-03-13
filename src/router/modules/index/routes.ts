export default {
	label: "首页",
	path: '/',
	key: '/',
	component: () => import("@views/index/index.vue"),
	meta: {
		title: "首页"
	},
	show: true,
	disabled: false,
	// children: []
};
