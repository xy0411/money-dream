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
        <n-layout>
            <CommonHeader />
            <CommonContent />
            <CommonFooter />
        </n-layout>
    </n-layout>
</template>

<style scoped></style>
