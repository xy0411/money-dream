<script setup lang="ts">
// import { ref, reactive } from 'vue'
import CommonSider from './components/sider.vue'
import CommonHeader from './components/header.vue'
import CommonContent from './components/content.vue'
import CommonFooter from './components/footer.vue'
</script>

<template>
    <n-layout has-sider>
        <CommonSider />
        <n-layout class="right">
            <CommonHeader class="header" />
            <CommonContent class="content" />
            <CommonFooter class="footer" />
        </n-layout>
    </n-layout>
</template>

<style scoped lang='less'>
.right {
    .n-layout-scroll-container {
        // display: flex;
        flex-direction: column;
        .header,
        .footer {
            height: 40px;
            background-color: blue;
        }
        .content {
            // flex-grow: 1;
            height: calc(100vh - 80px);
        }
    }
    height: 100vh;
}
</style>
