import Vue from 'vue'
import Router from "vue-router";
import Home from "./components/Home.vue";
import Products from "./components/Products.vue";
import Favorite from "./components/Favorite.vue";
import Users from "./components/Users.vue";
import Login from "./components/Login.vue";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: Favorite,
        },
        {
          path: "/users",
          name: "users",
          component: Users,
        },
        {
          path: "/login",
          name: "login",
          component: Login,
        },
    ]
})

export default router