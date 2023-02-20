<template class="main">
    <div class="hero">
        <span class="title">Gabriel Attal</span>
        <span class="sub">Fullstack developer</span>
    </div>
    <div class="box">
        <canvas id="sandbox">
            coucou
        </canvas>
    </div>
</template>

<script lang="ts">
export default {
    name: "PIndex"
};
</script>

<script setup lang="ts">
import PSVGHexagon from "@/components/PSVGHexagon.vue";

</script>

<style scoped lang="scss">
.box{
    svg{
        height: 100px;
        width: 100px;
        transform: translate(6px,6px);
        transform-origin: center;
        animation: loading 2s forwards;
        polygon{
            fill:none;
            stroke:var(--color-primary);
            stroke-width: 5px;
        }
    }
    @keyframes loading {
        from{
            opacity: 0;
            transform: scale(1.5);
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }
}
.hero{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    gap: 16px;
    flex-direction: column;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .title{
        background: linear-gradient(to bottom, var(--color-primary-lighter) 0%, var(--color-primary-darker) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 32px var(--color-primary-soft);
        white-space: nowrap;
        line-height: 80px;
        font: {
            size: 80px;
            family: aquire, Serif;
        };
    }

    .sub{
        text-transform: uppercase;
        font-size: 26px;
        letter-spacing: 12px;
        font-weight: 100;
        color: var(--color-content-softest);
    }
}
</style>
