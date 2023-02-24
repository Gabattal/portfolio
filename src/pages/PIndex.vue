<template>
    <div class="main">
        <div
            ref="refCard"
            class="hero"
        >
            <div
                class="content-card"
                :style="cardStyle"
                @mouseleave="test"
            >
                <span class="title">Gabriel Attal</span>
                <span class="sub">Fullstack developer</span>
                <span class="sub">--Available now--</span>
                <section class="contact">
                    <div class="left">
                        <span class="phone">+33 6 95 64 98 25</span>
                        <span class="mail">gabriel.attal.pro@gmail.com</span>
                    </div>
                    <div class="right">
                        <span class="link">Malt</span>
                        <span class="link">Linkedin</span>
                    </div>
                </section>
                <div class="glow" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PIndex"
};
</script>

<script setup lang="ts">
import { computed, CSSProperties, onMounted, ref } from "vue";
import { useMouse } from "@vueuse/core";

const refCard = ref<HTMLDivElement>();
const { x: mouseX, y: mouseY } = useMouse();

const cardStyle = computed<CSSProperties>(() => {
    const bounding = refCard.value?.getBoundingClientRect();

    if (!bounding) {
        return {};
    }
    const x = mouseX.value - bounding.x;
    const y = mouseY.value - bounding.y;

    const midCardWidth = bounding.width / 2;
    const midCardHeight = bounding.height / 2;

    const angleY = -(x - midCardWidth) / 16;
    const angleX = (y - midCardHeight) / 16;

    const glowX = x / bounding.width * 100;
    const glowY = y / bounding.height * 100;
    return {
        "--angleX": `${ angleX }deg`,
        "--angleY": `${ angleY }deg`,
        "--glowX": `${ glowX }%`,
        "--glowY": `${ glowY }%`
    };

});


</script>

<style scoped lang="scss">
.main {
    height: 100%;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    :hover hero {
        transform: perspective(1000px);
        transform-style: preserve-3d;
    }

    .hero {
        margin-top: var(--length-margin-xl);
        gap: 16px;
        width: 850px;
        height: 500px;
        perspective: 1000px;

        @media only screen and (max-width: 1300px) {
            width: 680px;
            height: 400px;
        }

        @media only screen and (max-width: 730px) {
            width: 425px;
            height: 250px;
        }

        @media only screen and (max-width: 430px) {
            width: 272px;
            height: 160px;
        }


        &:hover{
            scale:(1.1);
        }


        .content-card {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--color-background-soft);
            padding: var(--length-padding-l);
            @media only screen and (max-width: 730px) {
                padding: var(--length-padding-m);
            }
            @media only screen and (max-width: 430px) {
                padding: var(--length-padding-s);
            }
            animation: loading 4s forwards;
            box-shadow: 0 0 32px var(--color-background);
            --angleX: 0deg;
            --angleY: 0deg;
            --glowX: 50%;
            --glowY: 0;
            transition: all .15s ease-out;

            &:hover{
                transform: rotateX(var(--angleX)) rotateY(var(--angleY));
                box-shadow: 0 0 8px var(--color-primary);
                .glow{
                    background: radial-gradient(circle at var(--glowX) var(--glowY), white, transparent);
                    transition: all .15s ease-out;
                }
            }

            .title {
                z-index: 10;
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
                @media only screen and (max-width: 1300px) {
                    line-height: 60px;
                    font: {
                        size: 60px;
                        family: aquire, Serif;
                    };
                }
                @media only screen and (max-width: 730px) {
                    line-height: 40px;
                    font: {
                        size: 40px;
                        family: aquire, Serif;
                    };
                }
                @media only screen and (max-width: 430px) {
                    line-height: 30px;
                    font: {
                        size: 30px;
                        family: aquire, Serif;
                    };
                }
            }

            .sub {
                z-index: 10;
                text-transform: uppercase;
                font-size: 26px;
                letter-spacing: 12px;
                font-weight: 100;
                margin-top: var(--length-margin-l);
                color: var(--color-content-softer);
                @media only screen and (max-width: 1300px) {
                    font-size: 22px;
                    letter-spacing: 10px;
                    margin-top: var(--length-margin-m);
                }
                @media only screen and (max-width: 730px) {
                    font-size: 16px;
                    letter-spacing: 8px;
                    margin-top: var(--length-margin-s);
                }
                @media only screen and (max-width: 430px) {
                    margin-top: var(--length-margin-xs);
                    font-size: 10px;
                    letter-spacing: 4px;
                }
            }

            .glow{
                position: absolute;
                top: 0;
                left:0;
                width: 100%;
                height: 100%;
                opacity: 0.1;
                transition: all .15s ease-out;
                mix-blend-mode: hard-light;
            }

            .contact{
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
                .left{
                    gap: var(--length-margin-xs);
                    @media only screen and (max-width: 730px) {
                        gap: 8px
                    }
                    @media only screen and (max-width: 430px) {
                        gap : 4px
                    }
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    .phone{
                        z-index: 10;
                        text-transform: uppercase;
                        font-size: 16px;
                        letter-spacing: 2px;
                        color: var(--color-primary);

                        @media only screen and (max-width: 730px) {
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 10px;
                            letter-spacing: 1px;
                        }
                    }
                    .mail{
                        z-index: 10;
                        text-transform: uppercase;
                        font-size: 12px;
                        letter-spacing: 2px;
                        color: var(--color-primary);

                        @media only screen and (max-width: 730px) {
                            font-size: 10px;
                            letter-spacing: 2px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 8px;
                            letter-spacing: 1px;
                        }
                    }
                }
                .right{
                    gap: var(--length-margin-xs);
                    width: 50%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    flex-direction: column;
                    @media only screen and (max-width: 730px) {
                        gap: 8px
                    }
                    @media only screen and (max-width: 430px) {
                        gap : 4px
                    }
                    .link{
                        z-index: 10;
                        text-transform: uppercase;
                        font-size: 12px;
                        letter-spacing: 2px;
                        color: var(--color-primary);

                        @media only screen and (max-width: 730px) {
                            font-size: 10px;
                            letter-spacing: 2px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 8px;
                            letter-spacing: 1px;
                        }
                    }
                }
            }

            @keyframes loading {
                from {
                    backdrop-filter: blur(0);
                }
                to {
                    backdrop-filter: blur(16px);
                }
            }
        }

    }
}
</style>
