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
                    <span class="title">Skills</span>
                    <div class="card-container">
                        <div class="card">
                            <span class="subtitle">Languages</span>
                            <p class="sub">
                                JAVASCRIPT
                            </p>
                            <p class="sub">
                                PYTHON
                            </p>
                            <p class="sub">
                                <span class="highlight">
                                    TYPESCRIPT
                                </span>
                            </p>
                            <span class="subtitle">Tests</span>
                            <p class="sub">
                                CYPRESS
                            </p>
                            <p class="sub">
                                JEST
                            </p>
                            <p class="sub">
                                STORYBOOK
                            </p>
                            <p class="sub">
                                <span class="highlight">
                                    VITEST
                                </span>
                            </p>
                        </div>
                        <div class="card">
                            <span class="subtitle">Frameworks</span>
                            <p class="sub">
                                NEXT
                            </p>
                            <p class="sub">
                                <span class="highlight">
                                    REACT
                                </span>
                            </p>
                            <p class="sub">
                                THREE
                            </p>
                            <p class="sub">
                                <span class="highlight">
                                    VUE
                                </span>
                            </p>
                            <span class="subtitle">Version control</span>
                            <p class="sub">
                                GIT
                            </p>
                            <p class="sub">
                                GITHUB
                            </p>
                            <p class="sub">
                                GITLAB
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PSkills"
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
    overflow: hidden;

    .hero {
        width: 850px;
        height: 560px;
        perspective: 1000px;
        margin-top: var(--length-margin-l);

        @media only screen and (max-width: 1300px) {
            width: 680px;
            height: 400px;
        }

        @media only screen and (max-width: 730px) {
            width: 425px;
            height: 250px;
        }

        @media only screen and (max-width: 430px) {
            width: 372px;
            height: 500px;
        }


        .content-card {
            position: relative;
            overflow: auto;
            flex: 1;
            border-radius: 8px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: inline-flex;
            flex-direction: column;
            padding: var(--length-padding-l);
            @media only screen and (max-width: 730px) {
                padding: var(--length-padding-m);
            }
            @media only screen and (max-width: 430px) {
                padding: var(--length-padding-s);
            }
            transition: all .15s ease-out;

            .info {
                height: 80%;
                z-index: 100;
                color: var(--color-content-softer);
                display: flex;
                flex-direction: column;


                .date {
                    font: {
                        size: 20px;
                        family: Bahnschrift;
                    };
                }

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

                .card {
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 50%;

                    .subtitle {
                        z-index: 10;
                        text-transform: uppercase;
                        margin-bottom: var(--length-padding-s);
                        font-size: 26px;
                        letter-spacing: 6px;
                        font-weight: 100;
                        margin-top: var(--length-padding-l);
                        color: var(--color-primary-darker);
                        @media only screen and (max-width: 1300px) {
                            font-size: 22px;
                            letter-spacing: 10px;
                            margin-top: var(--length-padding-m);
                        }
                        @media only screen and (max-width: 730px) {
                            font-size: 16px;
                            letter-spacing: 4px;
                            margin-top: var(--length-padding-s);
                        }
                        @media only screen and (max-width: 430px) {
                            margin-top: var(--length-padding-xs);
                            font-size: 10px;
                            letter-spacing: 1px;
                        }
                    }

                    .sub {
                        z-index: 10;
                        font-size: 24px;
                        margin: 0;
                        font-family: Bahnschrift;
                        font-weight: 100;
                        color: var(--color-content-soft);
                        @media only screen and (max-width: 1300px) {
                            font-size: 18px;
                        }
                        @media only screen and (max-width: 730px) {
                            font-size: 14px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 12px;
                        }
                        .highlight{
                            font-weight: bold;
                            text-shadow: 0 0 32px var(--color-primary-lighter);
                            color: var(--color-primary-lighter);
                        }
                    }
                }
            }
        }
    }
}
</style>
