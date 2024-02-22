export default {
	path: "/utilityTool",
	name: "utilityTool",
	icon: "Tools",
	component: () => import("@views/utilityTool/utilityTool.vue"),
	meta: {
		title: "实用工具"
	},
	children: [
		{
			path: "decrypt",
			icon: "Key",
			component: () => import("@views/utilityTool/children/decrypt.vue"),
			meta: {
				title: "密码解密"
			}
		},
		{
			path: "dragDrop",
			icon: "Key",
			component: () => import("@views/utilityTool/children/dragDrop.vue"),
			meta: {
				title: "文件拖拽"
			}
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
