<script setup lang="ts">
// import { ref, reactive } from 'vue'
import { UnorderedListOutlined, SearchOutlined } from '@vicons/antd'
</script>

<template>
    <n-layout-header class="n-header">
        <div></div>
        <div>管理员</div>
        <n-icon size="40">
            <UnorderedListOutlined />
        </n-icon>
    </n-layout-header>
</template>

<style scoped lang='less'>
.n-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
