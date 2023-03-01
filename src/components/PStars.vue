<template>
    <svg>
        <PSVGHexagon
            class="star"
            :location="({ x: startPosition.x, y: startPosition.y })"
            :scale="scale"
        />
        <PSVGHexagon
            class="star"
            :location="({ x: startPosition.x+scale*105, y: startPosition.y })"
            :scale="scale"
        />
        <PSVGHexagon
            class="star"
            :location="({ x: startPosition.x+scale*210, y: startPosition.y })"
            :scale="scale"
        />
        <PSVGHexagon
            class="star"
            :location="({ x: startPosition.x+scale*315, y: startPosition.y })"
            :scale="scale"
        />
        <PSVGHexagon
            class="star"
            :location="({ x: startPosition.x+scale*420, y: startPosition.y })"
            :scale="scale"
        />

    </svg>
</template>

<script lang="ts">
export default {
    name: "PStars"
};
</script>

<script setup lang="ts">

import { useWindowSize } from "@vueuse/core";
import { ref, watch } from "vue";
import PSVGHexagon from "@/components/PSVGHexagon.vue";
import { TVector } from "@/lib/geometry";
const { width: windowWidth } = useWindowSize();
const scale = ref(0.25);

const props = withDefaults(defineProps<{
    numberOfStars?: number;
    startPosition?: TVector;
}>(), {
    numberOfStars: 5,
    startPosition: () => ({ x: 0, y: 0 })
});

watch(() => windowWidth.value , () => {
    if (windowWidth.value > 730){
        scale.value = 0.25;
    }
    else if (windowWidth.value <= 730 && windowWidth.value > 530){
        scale.value = 0.25;
    }
    else if (windowWidth.value <= 530 && windowWidth.value > 440){
        scale.value = 0.15;
    }
    else {
        scale.value = 0.10;
    }
},{ immediate: true });
</script>

<style scoped lang="scss">


    svg {
        animation: loading 2s forwards;
        width: 146px;
        height: 23px;
        @media only screen and (max-width: 730px) {
            width: 146px;
            height: 23px;
        }
        @media only screen and (max-width: 530px) {
            width: 80px;
            height: 23px;
        }
        @media only screen and (max-width: 440px) {
            width: 55px;
            height: 23px;
        }

        .star{
            fill: var(--color-primary);
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
