<template>
    <polygon
        :points="points"
    />
</template>

<script lang="ts">
export default {
    name: "PSVGHexagon"
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { addVector, multiplyVector, TVector } from "@/lib/geometry";

const props = withDefaults(defineProps<{
    location?: TVector;
    scale?: number;
}>(), {
    location: () => ({ x: 0, y: 0 }),
    scale: 1
});

const basePoints: Array<TVector> = [
    { x: 8.41, y: 25.99 },
    { x: 8.41, y: 74.01 },
    { x: 50, y: 98.02 },
    { x: 91.59, y: 74.01 },
    { x: 91.59, y: 25.99 },
    { x: 50, y: 1.98 }
];

const points = computed(() => {
    return basePoints
        .map((point) => multiplyVector(point, props.scale))
        .map((point) => addVector(point, props.location))
        .map((point) => `${ point.x },${ point.y }`)
        .join(" ");
});
</script>

<style scoped lang="scss">

</style>
