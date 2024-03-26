export default {
    label: '测试组件页面', // 路由名称
    path: '/testPage', // router路径
    key: '/test', // menu组件地址
    component: () => import('@views/testPage/index.vue'), // 组件引用
    icon: '', // menu组件的图标，这里还需要完善
    meta: {
        title: '测试页'
    },
    show: true, // 是否显示
    disabled: false // 是否禁用
    // children: [] //
}
