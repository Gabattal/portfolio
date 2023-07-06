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
                    <span class="title">Reviews</span>
                    <div class="review">
                        <span class="subtitle">Precifield</span>
                        <div class="stars">
                            <PStars />
                        </div>
                    </div>
                    <p class="sub">
                        "Gabriel's strong involvement in this project, with the desire to satisfy the client and the
                        user
                        of the platform as much as possible. Gabriel demonstrated a capacity to adapt to the client's
                        needs, taking into account and integrating very quickly the requested evolutions compared to the
                        initial specifications. Very good ability to exchange and integrate into the team! A pleasure to
                        work with Gabriel!"
                    </p>
                    <div class="review">
                        <span class="subtitle">Kraaft</span>
                        <div class="stars">
                            <PStars />
                        </div>
                    </div>
                    <p class="sub">
                        "Gabriel worked on a relatively complex feature involving shared Web + Mobile code, at a time
                        when we needed reinforcements. He was able to quickly deliver a 1st version and then adjust it
                        according to code review feedback, to deliver a very good piece of work at the end of the
                        assignment. He's highly motivated, communicates well and has a great appetite for learning new
                        things."
                    </p>
                    <div class="review">
                        <span class="subtitle">Stayfit</span>
                        <div class="stars">
                            <PStars />
                        </div>
                    </div>
                    <p class="sub">
                        "Extremely responsive and attentive to our company's needs. Frequent feedback, strong proposals
                        and rendering in line with our expectations. You can go for it, we are already launching two
                        other projects with him on other structures!"
                    </p>
                    <div class="separator" />
                    <span class="title">Recommendations</span>
                    <span class="name">Naji Astier - Algoan</span>
                    <p class="sub">
                        "Gabriel was quick to adapt and learn all the specificities of our business. He learned our
                        stack and was able to contribute fully to our needs. Moreover, he brought a lot of positivity to
                        our team.
                        I recommend Gabriel fully, even though I would have preferred to keep him in my team."
                    </p>
                    <span class="name">Lucas Santos - Algoan</span>
                    <p class="sub">
                        "Gabriel is passionate about writing code and solving clients’ problems through the development
                        of creative and innovative software.
                        He is vocal about his software ideas, but respects his superiors and enthusiastically tackles
                        every assignment as he is directed.
                        He is friendly, easy to get along with, well-liked by his co-workers."
                    </p>
                    <span class="name">Amar Lankri - Algoan</span>
                    <p class="sub">
                        "Very curious and code-enthusiastic, Gabriel integrated perfectly the team and became an
                        important member. By the way, he was always in a good mood. It was a pleasure to work with him!"
                    </p>
                    <span class="name">Jonathan Cohen - Orange France</span>
                    <p class="sub">
                        "Dynamic and motivated, Gabriel knows how to work independently but also as part of a team.
                        He's willing to give his input and knows how to defend his ideas.
                        His project, which was carried out in pairs, is in production today and is now used by dozens of
                        applications."
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PReviews"
};
</script>

<script setup lang="ts">

import PStars from "@/components/PStars.vue";
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
            width: 525px;
            height: 250px;
        }

        @media only screen and (max-width: 430px) {
            width: 372px;
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
                display: inline-flex;
                flex-direction: column;

                .separator {
                    margin-top: var(--length-margin-l);
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

                .sub {
                    z-index: 10;
                    line-height: 1.5em;
                    font-size: 20px;
                    font: {
                        family: Arial
                    }
                    font-style: italic;
                    margin-top: var(--length-padding-l);
                    color: var(--color-content-soft);
                    @media only screen and (max-width: 1300px) {
                        font-size: 16px;
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

                    .highlight {
                        font-weight: bold;
                        text-shadow: 0 0 32px var(--color-primary-lighter);
                        color: var(--color-primary-lighter);
                    }
                }

                .name {
                    margin-top: var(--length-padding-l);
                    margin-bottom: var(--length-padding-s);
                    z-index: 10;
                    text-transform: uppercase;
                    font-size: 26px;
                    letter-spacing: 6px;
                    font-weight: 100;
                    color: var(--color-primary-darker);
                    @media only screen and (max-width: 1300px) {
                        font-size: 22px;
                        letter-spacing: 10px;
                    }
                    @media only screen and (max-width: 730px) {
                        font-size: 16px;
                        letter-spacing: 4px;
                    }
                    @media only screen and (max-width: 430px) {
                        font-size: 10px;
                        letter-spacing: 1px;
                    }
                }

                .review {
                    display: flex;
                    margin-top: var(--length-padding-l);
                    margin-bottom: var(--length-padding-s);

                    .subtitle {
                        width: 50%;
                        z-index: 10;
                        text-transform: uppercase;
                        font-size: 26px;
                        letter-spacing: 6px;
                        font-weight: 100;
                        color: var(--color-primary-darker);
                        @media only screen and (max-width: 1300px) {
                            font-size: 22px;
                            letter-spacing: 10px;
                        }
                        @media only screen and (max-width: 730px) {
                            font-size: 16px;
                            letter-spacing: 4px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 10px;
                            letter-spacing: 1px;
                        }
                    }

                    .stars {
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                    }
                }
            }
        }

    }
}
</style>
