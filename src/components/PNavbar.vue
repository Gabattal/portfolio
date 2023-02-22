<template>
    <div class="container">
        <svg>
            <PHexagonComponent
                :start-position="({ x: 0, y: 0 })"
                text="About"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX, y: scaleY })"
                text="Work"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*2, y: 0 })"
                text="Links"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*3, y: scaleY })"
                text="Contact"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*4, y: 0 })"
                text="Skills"
            />
        </svg>
    </div>
</template>

<script lang="ts">
export default {
    name: "PNavbar"
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import PSVGHexagon from "@/components/PSVGHexagon.vue";
import PHexagonComponent from "@/components/PHexagonComponent.vue";
const { width: windowWidth } = useWindowSize();
const scaleX = ref(120);
const scaleY = ref(70);

watch(() => windowWidth.value , () => {
    if (windowWidth.value > 730){
        scaleX.value = 120;
        scaleY.value = 70;
    }
    else if (windowWidth.value <= 730 && windowWidth.value > 530){
        scaleX.value = 102.5;
        scaleY.value = 60;
    }
    else if (windowWidth.value <= 530 && windowWidth.value > 440){
        scaleX.value = 85;
        scaleY.value = 50;
    }
    else {
        scaleX.value = 60.5;
        scaleY.value = 40;
    }
},{ immediate: true });
</script>

<style scoped lang="scss">
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    svg {
        animation: loading 2s forwards;
        width: 630px;
        height: 220px;
        @media only screen and (max-width : 730px) {
            width: 535px;
            height: 185px;
        }
        @media only screen and (max-width : 530px) {
            width: 441px;
            height: 152px;
        }
        @media only screen and (max-width : 440px) {
            width: 318px;
            height: 118px;
        }

        polygon.internal {
            cursor: pointer;
            fill: var(--color-primary-darker);

            :hover {
                fill: var(--color-primary-lighter);
            }
        }

        polygon.internal:hover {
            fill: var(--color-primary-lighter);
        }

        .external {
            fill: var(--color-background);
            stroke: var(--color-primary);
            stroke-width: 5px;
        }

        text {
            pointer-events: none;
            text-anchor: middle;
            font-weight: 100;
            fill: var(--color-background);
            font: {
                size: 22px;
                family: aquire-bold, Serif;
            };
        }
    }

    @keyframes loading {
        from {
            opacity: 0;
            transform: scale(1.25);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
}
</style>
