<script setup lang="ts">
// import { ref, reactive } from 'vue'
import { defineProps, reactive } from 'vue'
const props = defineProps({
    number: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        default: 'Hello'
    },
    linearColor: {
        type: String,
        default: '#e69a0c'
    }
})

const styleObject = reactive({
    '--num': props.number,
    '--clr': props.linearColor
})
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="percent" :style="styleObject">
                <div class="dot"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div class="number">
                    <h2>{{ number }}<span>%</span></h2>
                    <p>{{ msg }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px;
    .card {
        position: relative;
        width: 220px;
        height: 250px;
        background: #2a2a2a;
        display: flex;
        justify-content: center;
        align-items: center;
        .percent {
            position: relative;
            width: 150px;
            height: 150px;
            svg {
                position: relative;
                width: 150px;
                height: 150px;
                transform: rotate(270deg);
                circle {
                    width: 100%;
                    height: 100%;
                    fill: transparent;
                    stroke-width: 2;
                    stroke: #191919;
                    transform: translate(5px, 5px);
                }
                circle:nth-child(2) {
                    stroke: var(--clr);
                    stroke-dasharray: 440;
                    stroke-dashoffset: calc(440 - (440 * var(--num)) / 100);
                    opacity: 0;
                    animation: fadeIn 1s linear forwards;
                    animation-delay: 2.5s;
                }
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }
            .dot {
                position: absolute;
                inset: 5px;
                z-index: 10;
                animation: animateDot 2s linear forwards;
            }
            @keyframes animateDot {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(calc(3.6deg * var(--num)));
                }
            }
            .dot::before {
                content: '';
                position: absolute;
                top: -5px;
                left: 50%;
                transform: translateX(-50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: var(--clr);
                box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr);
            }
            .number {
                position: absolute;
                inset: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                opacity: 0;
                animation: fadeIn 1s linear forwards;
                animation-delay: 2.5s;
                h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-weight: 700;
                    font-size: 2.5em;
                    span {
                        font-weight: 300;
                        color: #fff;
                        font-size: 0.5em;
                    }
                }
                p {
                    font-weight: 300;
                    font-size: 0.75em;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.75);
                }
            }
        }
    }
}
</style>
