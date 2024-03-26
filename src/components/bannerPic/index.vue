<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<template>
    <div class="slider-container">
        <div class="left-slide">
            <div style="background-color: #789d58">
                <h1>这是一段文字描述</h1>
                <p>简短描述</p>
            </div>
            <div style="background-color: #9d2741">
                <h1>这是一段文字描述</h1>
                <p>简短描述</p>
            </div>
            <div style="background-color: #252e33">
                <h1>这是一段文字描述</h1>
                <p>简短描述</p>
            </div>
            <div style="background-color: #87994d">
                <h1>这是一段文字描述</h1>
                <p>简短描述</p>
            </div>
        </div>
        <div class="right-slide">
            <div style="background-image: url('../../assets/img/pic1.png')"></div>
            <div style="background-image: url('../../assets/img/pic2.png')"></div>
            <div style="background-image: url('../../assets/img/pic3.png')"></div>
            <div style="background-image: url('../../assets/img/pic4.png')"></div>
        </div>
        <div class="action-buttons">
            <button class="down-button">
                <i class="fa fa-arrow-down"></i>
            </button>
            <button class="up-button">
                <i class="fa fa-arrow-up"></i>
            </button>
        </div>
    </div>
</template>

<style scoped lang="less">
.slider-container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    .left-slide {
        height: 100%;
        width: 35%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease-in-out;
        h1 {
            font-size: 40px;
            margin-bottom: 10px;
            margin-top: -30px;
        }
    }
    .left-slide > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .right-slide {
        height: 100%;
        position: absolute;
        top: 0;
        left: 35%;
        width: 65%;
        transition: transform 0.5s ease-in-out;
    }
    .right-slide > div {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
    }
    button {
        background-color: #fff;
        border: none;
        color: #aaa;
        cursor: pointer;
        font-size: 16px;
        padding: 15px;
    }

    button:hover {
        color: #222;
    }

    button:focus {
        outline: none;
    }
    .action-buttons {
        button {
            position: absolute;
            left: 35%;
            top: 50%;
            z-index: 100;
        }
        .down-button {
            transform: translateX(-100%);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .up-button {
            transform: translateY(-100%);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
</style>
