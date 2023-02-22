import { createRouter, createWebHistory } from "vue-router";
import PIndex from "@/pages/PIndex.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            component: () => import("@/pages/PIndex.vue"),
            path: "/" 
        }
    ]
});
