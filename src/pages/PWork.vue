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
                    <span class="title">Works</span>
                    <div class="card">
                        <span class="subtitle">Freelance</span>
                        <span class="date">10/2022 - now</span>
                        <p class="sub">
                            Fullstack developer / web integrator specialized in React and Vue.
                        </p>
                    </div>
                    <div class="card">
                        <span class="subtitle">Frontend developer (Algoan)</span>
                        <span class="date">03/2022 - 09/2022</span>
                        <p class="sub">
                            Working in a fintech revolutionizing the credit sector by making it fairer and more
                            responsible by reducing credit risk and increasing approved loan applications, lowering
                            processing costs, and offering a seamless 100% digital pathway. My role was to integrate new
                            features while optimizing the products.
                        </p>
                    </div>
                    <div class="card">
                        <span class="subtitle">Fullstack developer (Orange)</span>
                        <span class="date">04/2021 - 08/2021</span>
                        <p class="sub">
                            I developed a web platform that gathers all the company's services and tests them
                            continuously. So we collect the list of all the services that are not working anymore. Then
                            the person responsible for the application of the concerned service is notified.
                        </p>
                    </div>
                    <div class="card">
                        <span class="subtitle">Fullstack developer (Stayfit)</span>
                        <span class="date">12/2019 - 02/2020</span>
                        <p class="sub">
                            Creation of an application on which the user can book classes in a gym. A credit and queue
                            system is set up as well as an administration panel for the manager.
                        </p>
                    </div>
                    <div class="card">
                        <span class="subtitle">Frontend Developer (Piple)</span>
                        <span class="date">12/2018 - 02/2019</span>
                        <p class="sub">
                            Front-end developer in a start-up creating a messaging system in the form of a tree, this
                            one being intended for companies.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "PWork"
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
            width: 272px;
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
            align-items: center;
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

                    .subtitle {
                        z-index: 10;
                        text-transform: uppercase;
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
                        font-size: 20px;
                        font-family: Bahnschrift;


                        font-weight: 100;
                        color: var(--color-content-soft);
                        @media only screen and (max-width: 1300px) {
                            font-size: 16px;
                        }
                        @media only screen and (max-width: 730px) {
                            font-size: 12px;
                        }
                        @media only screen and (max-width: 430px) {
                            font-size: 10px;
                        }
                    }
                }
            }
        }

    }
}
</style>
