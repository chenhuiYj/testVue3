import { createRouter, createWebHashHistory } from "vue-router";
const home = () => import("../page/tableTest")
const game = () => import("../page/game1")

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/game",
        name: "game",
        component: game
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})