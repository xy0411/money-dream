export default {
	path: "/",
	name: "index",
	icon: "house",
	component: () => import("@views/index/index.vue"),
	meta: {
		title: "首页"
	}
};
