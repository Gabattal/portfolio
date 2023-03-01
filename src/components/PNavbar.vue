<template>
    <div class="container">
        <svg>
            <PHexagonComponent
                :start-position="({ x: 0, y: 0 })"
                text="About"
                @click="goToPage('/about')"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX, y: scaleY })"
                text="Works"
                @click="goToPage('/work')"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*2, y: 0 })"
                text="Home"
                @click="goToPage('/')"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*3, y: scaleY })"
                text="Reviews"
                @click="goToPage('/reviews')"
            />
            <PHexagonComponent
                :start-position="({ x: scaleX*4, y: 0 })"
                text="Skills"
                @click="goToPage('/skills')"
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
import { ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import PHexagonComponent from "@/components/PHexagonComponent.vue";
import { router } from "@/router";
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
        scaleX.value = 66.5;
        scaleY.value = 38;
    }
},{ immediate: true });

async function goToPage(pageName: string){
    await router.push(pageName);
}

</script>

<style scoped lang="scss">
.container {
    position: relative;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    svg {
        animation: loading 2s forwards;
        width: 630px;
        height: 220px;
        @media only screen and (max-width: 730px) {
            width: 535px;
            height: 185px;
        }
        @media only screen and (max-width: 530px) {
            width: 441px;
            height: 152px;
        }
        @media only screen and (max-width: 440px) {
            width: 345px;
            height: 120px;
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
}
</style>
