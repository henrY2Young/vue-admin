import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import Index from "./router/index_layout"
import Login from "./router/login"
import {getToken, cleanToken} from "./utils/auth";
import PermissionApi from "./api/perssion"
import {in_array} from "./utils/functions";

const ERROR = import("./views/Error.vue");


NProgress.configure({showSpinner: false})// NProgress Configuration


Vue.use(Router);


const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        Index,
        {path: '/', redirect: '/index', hidden: true},
        {
            path: "/error",
            name: "error",
            component: () =>
                ERROR
        },
        Login,
        {path: '*', redirect: '/error', hidden: true},
    ]
});
// let deep = 0;
router.beforeEach((to, from, next) => {
    NProgress.start();
    console.log(getToken())
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
            NProgress.done()
        } else {
            PermissionApi.getMenuList().then(res => {
                // deep++;
                // if (deep >= 5) {
                //     cleanToken();
                //     next({path: '/login'});
                //     deep = 0;
                // }
                console.log(to, from);
                let data = res.data;
                if (data.code == 1000) {
                    let urls = [];
                    if (!data.data.menuList) {
                        next({path: '/login'});
                        return;
                    }

                    data.data.menuList.forEach((item) => {
                        urls.push(item.url);
                    });
                    if (in_array(to.path, urls)) {
                        let params = {
                            url: to.path
                        }
                        PermissionApi.authenticateUrl(params).then(res => {
                            let authData = res.data;
                            if (authData.code == 1000) {
                                if (to.path === '/login') {
                                    next({path: '/'});
                                } else {
                                    next()
                                }
                                NProgress.done();
                            } else {
                                next({path: '/error'});
                            }
                        })
                    } else {
                        next({path: '/error'});
                    }
                } else if (data.code == 502502) {
                    cleanToken();
                    next(`/login?redirect=${to.path}`)
                }
                console.log(111, res)
                next();
            })
        }
    } else {
        //
        if (to.path == '/login') {
            next()
        } else {
            next({path: '/login'});
        }
        // `/login?redirect=${to.path}`) // 否则全部重定向到登录页
        NProgress.done();
    }
    next();
});
router.afterEach(() => {
    NProgress.done() // finish progress bar
})
export default router;
