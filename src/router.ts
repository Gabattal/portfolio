import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            component: () => import("@/pages/PIndex.vue"),
            path: "/"
        },
        {
            name: "about",
            component: () => import("@/pages/PAbout.vue"),
            path: "/about"
        },
        {
            name: "work",
            component: () => import("@/pages/PWork.vue"),
            path: "/work"
        },
        {
            name: "links",
            component: () => import("@/pages/PLinks.vue"),
            path: "/links"
        }
        ,
        {
            name: "reviews",
            component: () => import("@/pages/PReviews.vue"),
            path: "/reviews"
        }
        ,
        {
            name: "skills",
            component: () => import("@/pages/PSkills.vue"),
            path: "/skills"
        }
    ]
});
