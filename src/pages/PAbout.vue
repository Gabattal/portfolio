<template>
    <div class="main">
        <div class="hero">
            <span class="title">About</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PAbout"
};
</script>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main{
    height: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    .hero{
        gap: 16px;
        flex-direction: column;
        height: 100%;
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
            @media only screen and (max-width : 730px) {
                line-height: 40px;
                font:  {
                    size: 40px;
                    family: aquire, Serif;
                };
            }
        }

        .sub{
            text-transform: uppercase;
            font-size: 26px;
            letter-spacing: 12px;
            font-weight: 100;
            color: var(--color-content-softest);
        }
    }
}
</style>
