import Home from "../views/Layout_main.vue";

const About = import('../views/About');
const Icon = import('../views/Icon/Icon');
const Router = import('../views/Permission/Router');
const Permission = import('../views/Permission/Permission');
const Table  = import('../views/Table/Table')

const index = {
    path: "/index",
    name: "index",
    component: Home,
    children: [
        {
            name: 'index',
            path: '/index',
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/Home.vue")
        },
        {
            name: 'about',
            path: '/about',
            component: () =>
                About
        },
        {
            name: 'icon',
            path: '/icon',
            component: () =>
                Icon
        },

        {
            path: "/router",
            name: "router",
            component: () =>
                Router
        },
        {
            path: "/permission",
            name: "permission",
            component: () =>
                Permission
        },
        {
            path: "/table",
            name: "table",
            component: () =>
                Table
        },
    ]
}
export default index