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
    { x: 25.99, y: 91.59 },
    { x: 74.01, y: 91.59 },
    { x: 98.02, y: 50 },
    { x: 74.01, y: 8.41 },
    { x: 25.99, y: 8.41 },
    { x: 1.98, y: 50 }
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
