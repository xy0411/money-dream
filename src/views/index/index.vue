<template>
    <div class="index">
        <div class="top">
            <div class="one">TAB1</div>
            <div class="two">TAB2</div>
            <div class="three">TAB3</div>
            <div class="infine"></div>
        </div>
        <div class="bottom">
            <div class="title">THIS IS TAB1 CONTENT</div>
            <div class="content">Notice the gap between the content and tab after applying a background color</div>
        </div>
    </div>
    <CardCircle :number="80" />
</template>

<script setup lang="ts">
// import LayoutView from '@/layout/index.vue'

import CardCircle from '@/components/CardCircle/index.vue'
</script>

<style lang="less" scoped>
.index {
    display: flex;
    flex-direction: column;
    .top {
        display: flex;
        font-weight: bold;
        .one,
        .two,
        .three {
            color: rgb(75,141,199);
            // border: 1px solid;
            padding: 10px 20px;
            // width: ;
            // margin-right: 10px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        .one {
            border: 1px solid rgb(230, 187, 187);
            border-bottom: none;
            color: black;
        }
        .two,
        .three {
            border-bottom: 1px solid rgb(230, 187, 187);
        }
        .infine {
            width: 100%;
            border-bottom: 1px solid rgb(230, 187, 187);
        }
        // border-bottom: 1px solid #000;
        margin-bottom: 20px;
    }
    .bottom {
        margin-left: 10px;
        font-size: 24px;
        font-weight: bold;
        color: rgb(75,141,199);
        .title {
            margin-bottom: 10px;
        }
        .content {
            width: 482px;
        }
    }
}
</style>
