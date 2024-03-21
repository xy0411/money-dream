<script setup lang="ts">
// import { ref, reactive } from 'vue'
</script>

<template>
    <n-layout-header content-style="height: 60px;">
        <div class="header">
            <div class="header_left"></div>
            <div class="header_right">
                <n-avatar round :size="38" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <n-avatar round :size="38" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <n-avatar round :size="38" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            </div>
        </div>
    </n-layout-header>
</template>

<style scoped lang="less">
.header {
    display: flex;
    width: 100%;
    height: 60px;
    padding: 10px 10px;
    .header_left {
        width: 50%;
    }
    .header_right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .n-avatar {
            margin-right: 15px;
        }
    }
}
</style>
