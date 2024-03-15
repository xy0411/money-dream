<script setup lang="ts">
import { ref } from 'vue'

const showModalRef = ref(false)
const timeoutRef = ref(6000)

const countdown = () => {
    if (timeoutRef.value <= 0) {
        showModalRef.value = false
    } else {
        timeoutRef.value -= 1000
        setTimeout(countdown, 1000)
    }
}

const handXY = () => {
    showModalRef.value = true
    timeoutRef.value = 9000

    countdown()
}
</script>

<template>
    <n-result status="404" title="404 资源不存在" description="失败总是贯穿人生始终">
        <template #footer>
            <n-button @click="handXY">去找肖老板吧！</n-button>
        </template>
    </n-result>
    <n-modal :show="showModalRef">
        <n-card
            style="width: 600px"
            title="你真想找啊？等着吧！"
            size="huge"
            :bordered="false"
            role="dialog"
            aria-modal="true"
        >
            倒计时 {{ timeoutRef / 1000 }} 秒
        </n-card>
    </n-modal>
</template>

<style scoped></style>
