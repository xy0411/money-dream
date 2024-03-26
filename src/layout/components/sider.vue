<script setup lang="ts">
import { h, ref, Component, reactive, onMounted } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
// import { AimOutlined } from '@vicons/antd'
import router from '@router/router'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const routes = reactive(router)

onMounted(() => {
    // router.push("/error")
    console.log(123, routes)
    menuOptions = routes.options.routes
})

function logAddr(e) {
    console.log(123, value)
    router.push(value)
}

let value = reactive(null)

let collapsed = ref(false)

let menuOptions: MenuOption[] = routes.options.routes
</script>

<template>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <n-menu
            v-model:value="value"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            @click="logAddr"
        />
    </n-layout-sider>
</template>

<style scoped></style>
