export default {
	path: "/error",
	name: "error",
	component: () => import("@views/error/error.vue"),
	meta: {
		menuShow: false // 脱离菜单全屏展示
	}
};
