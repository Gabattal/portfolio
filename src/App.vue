<template>
    <PBackground />
    <PNavbar />
    <router-view v-slot="{Component}">
        <transition
            mode="out-in"
            name="fade"
        >
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import PBackground from "@/components/PBackground.vue";
import PNavbar from "@/components/PNavbar.vue";

</script>

<style scoped>
.fade-enter-active,.fade-leave-active {  transition: opacity 0.5s ease;}.fade-enter-from,.fade-leave-to {  opacity: 0;}
</style>
