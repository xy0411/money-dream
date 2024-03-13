import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import login from './modules/login/routes'
import index from "./modules/index/routes";
import error from "./modules/error/routes";
import utilityTool from "./modules/utilityTool/routes";

// 未作路由优先级排序，可暂时通过routes顺序设置
const routes = [
	index,
	// login,
	utilityTool,
	error
];

const router = createRouter({
	// history: createWebHashHistory(),
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	// console.log(123, to);
	if (to.matched.length === 0) {
		next("/error");
	} else {
		next(); // 放行
	}
});

export default router;
