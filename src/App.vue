<script setup lang="ts">
import PIndex from "./pages/PIndex.vue";
import PBackground from "@/components/PBackground.vue";
import PNavbar from "@/components/PNavbar.vue";
</script>

<template>
    <PBackground />
    <router-view />
    <PNavbar />
</template>

<style scoped>

</style>
