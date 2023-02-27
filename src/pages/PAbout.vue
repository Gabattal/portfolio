<template>
    <div class="main">
        <div
            ref="refCard"
            class="hero"
        >
            <div
                class="content-card"
            >
                <section class="info">
                    <span class="title">About</span>
                    <p class="sub">
                        I'm an experienced French web developer specializing in React and Vue frameworks. My
                        technical expertise enables me to quickly adapt to various projects, whether working solo or in
                        a team, while delivering clean, structured, and optimized code. I love tackling challenges and
                        building creative websites.
                    </p>
                </section>
            </div>
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
.main {
    height: 100%;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .hero {
        margin-top: var(--length-margin-xl);
        gap: 16px;
        width: 850px;
        height: 560px;
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
            height: 500px;
        }


        .content-card {
            overflow: auto;
            flex: 1;
            border-radius: 8px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            padding: var(--length-padding-l);
            @media only screen and (max-width: 730px) {
                padding: var(--length-padding-m);
            }
            @media only screen and (max-width: 430px) {
                padding: var(--length-padding-s);
            }
            animation: loading 4s forwards;
            --angleX: 0deg;
            --angleY: 0deg;
            --glowX: 50%;
            --glowY: 0;
            transition: all .15s ease-out;

            .info {
                height: 80%;
                z-index: 100;
                display: inline-block;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .title {
                    z-index: 10;
                    width: 100%;
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
                    line-height: 2em;
                    font-size: 20px;


                    font-weight: 100;
                    margin-top: var(--length-padding-l);
                    color: var(--color-content-soft);
                    @media only screen and (max-width: 1300px) {
                        font-size: 16px;;
                        margin-top: var(--length-padding-m);
                    }
                    @media only screen and (max-width: 730px) {
                        font-size: 12px;
                        margin-top: var(--length-padding-s);
                    }
                    @media only screen and (max-width: 430px) {
                        margin-top: var(--length-padding-xs);
                        font-size: 12px;
                    }
                }
            }

            .contact {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 20%;

                .left {
                    gap: var(--length-margin-xs);
                    @media only screen and (max-width: 730px) {
                        gap: 8px
                    }
                    @media only screen and (max-width: 430px) {
                        gap: 4px
                    }
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    .phone {
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

                    .mail {
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

                .right {
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
                        gap: 4px
                    }

                    .link {
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
