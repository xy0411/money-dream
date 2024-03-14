export default {
	label: "首页", // 路由名称
	path: '/', // router路径
	key: '/', // menu组件地址
	component: () => import("@views/index/index.vue"), // 组件引用
	icon: "", // menu组件的图标，这里还需要完善
	meta: {
		title: "首页"
	},
	show: true, // 是否显示
	disabled: false, // 是否禁用
	// children: [] //
};
