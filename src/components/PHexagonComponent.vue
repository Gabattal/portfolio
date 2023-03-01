<template>
    <g>
        <PSVGHexagon
            class="external"
            :location="({ x: startPosition.x, y: startPosition.y })"
            :scale="bigHexagon"
        />
        <PSVGHexagon
            class="internal"
            :location="({ x: 12.5+startPosition.x - phoneAdjust*5, y: 12.5+startPosition.y - phoneAdjust*5 })"
            :scale="littleHexagon"
        />
        <text
            :x="50*bigHexagon+startPosition.x"
            :y="55*bigHexagon+startPosition.y"
        >
            {{ text }}
        </text>
    </g>
</template>

<script lang="ts">
export default {
    name: "PHexagonComponent"
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import PSVGHexagon from "@/components/PSVGHexagon.vue";
import { TVector } from "@/lib/geometry";

const { width: windowWidth } = useWindowSize();
const props = withDefaults(defineProps<{
    startPosition?: TVector;
    text?: string;
}>(), {
    startPosition: () => ({ x: 0, y: 0 }),
    text: "text"
});

//const emits = defineEmits(["click"]);
//emits("click",[]);
const bigHexagon = ref(1.5);
const littleHexagon = ref(1.25);
const phoneAdjust = ref(0);

watch(() => windowWidth.value , (newWidth) => {
    if (windowWidth.value > 730){
        bigHexagon.value = 1.5;
        littleHexagon.value = 1.25;
        phoneAdjust.value = 0;
    }
    else if (windowWidth.value <= 730 && windowWidth.value > 530){
        bigHexagon.value = 1.25;
        littleHexagon.value = 1.07;
        phoneAdjust.value = 0.7;
    }
    else if (windowWidth.value <= 530 && windowWidth.value > 440){
        bigHexagon.value = 1;
        littleHexagon.value = 0.83;
        phoneAdjust.value = 0.8;
    }
    else {
        bigHexagon.value = 0.78;
        littleHexagon.value = 0.63;
        phoneAdjust.value = 1;
    }
},{ immediate: true });



</script>

<style scoped lang="scss">
.external {
    fill: var(--color-background);
    stroke: var(--color-primary);
    stroke-width: 5px;

    @media only screen and (max-width : 730px) {
        stroke-width: 4px;
    }
    @media only screen and (max-width : 530px) {
        stroke-width: 3px;
    }
    @media only screen and (max-width : 440px) {
        stroke-width: 2px;
    }

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
    filter: drop-shadow(0 0 10px var(--color-primary-lighter));
}
text {
    pointer-events: none;
    text-anchor: middle;
    font-weight: 100;
    fill: var(--color-background);
    font: {
        size: 20px;
        family: aquire-bold, Serif;
    };
    @media only screen and (max-width : 730px) {
        font:  {
            size: 16px;
            family: aquire-bold, Serif;
        };
    }
    @media only screen and (max-width : 530px) {
        font:  {
            size: 13px;
            family: aquire-bold, Serif;
        };
    }
    @media only screen and (max-width : 440px) {
        font:  {
            size: 10px;
            family: aquire, Serif;
        };
    }
}
</style>
