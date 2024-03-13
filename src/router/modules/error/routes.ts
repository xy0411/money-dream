export default {
	label: "错误页面",
	path: "/error",
	key: '/error',
	component: () => import("@views/error/index.vue"),
	meta: {
		menuShow: false // 脱离菜单全屏展示
	},
	show: true
};
