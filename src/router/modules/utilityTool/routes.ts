export default {
	path: "/utilityTool",
	name: "utilityTool",
	label: "实用工具",
	meta: {
		title: "实用工具"
	},
	show: true,
	children: [
		{
			label: "密码解密",
			path: "decrypt",
			meta: {
				title: "密码解密"
			},
			show: true,
		},
		{
			label: "文件拖拽",
			path: "dragDrop",
			meta: {
				title: "文件拖拽"
			},
			show: true,
		}
	],
	isSub: true // 判断菜单下是否有多个子菜单
};
