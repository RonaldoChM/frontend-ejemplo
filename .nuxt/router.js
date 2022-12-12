import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b5c78bd = () => interopDefault(import('..\\pages\\assignments\\index.vue' /* webpackChunkName: "pages/assignments/index" */))
const _67093575 = () => interopDefault(import('..\\pages\\grades\\index.vue' /* webpackChunkName: "pages/grades/index" */))
const _199687ce = () => interopDefault(import('..\\pages\\students\\index.vue' /* webpackChunkName: "pages/students/index" */))
const _4d3bc340 = () => interopDefault(import('..\\pages\\teachers\\index.vue' /* webpackChunkName: "pages/teachers/index" */))
const _f0322cbe = () => interopDefault(import('..\\pages\\assignments\\create.vue' /* webpackChunkName: "pages/assignments/create" */))
const _bc5c782e = () => interopDefault(import('..\\pages\\grades\\create.vue' /* webpackChunkName: "pages/grades/create" */))
const _c9d1dc76 = () => interopDefault(import('..\\pages\\students\\create.vue' /* webpackChunkName: "pages/students/create" */))
const _fc1e2104 = () => interopDefault(import('..\\pages\\teachers\\create.vue' /* webpackChunkName: "pages/teachers/create" */))
const _3a7ec5a2 = () => interopDefault(import('..\\pages\\assignments\\_id\\edit.vue' /* webpackChunkName: "pages/assignments/_id/edit" */))
const _6f1158a2 = () => interopDefault(import('..\\pages\\assignments\\_id\\show.vue' /* webpackChunkName: "pages/assignments/_id/show" */))
const _285f8432 = () => interopDefault(import('..\\pages\\grades\\_id\\edit.vue' /* webpackChunkName: "pages/grades/_id/edit" */))
const _7820f95a = () => interopDefault(import('..\\pages\\grades\\_id\\show.vue' /* webpackChunkName: "pages/grades/_id/show" */))
const _58605aea = () => interopDefault(import('..\\pages\\students\\_id\\edit.vue' /* webpackChunkName: "pages/students/_id/edit" */))
const _60208dfe = () => interopDefault(import('..\\pages\\students\\_id\\show.vue' /* webpackChunkName: "pages/students/_id/show" */))
const _3720ee32 = () => interopDefault(import('..\\pages\\teachers\\_id\\edit.vue' /* webpackChunkName: "pages/teachers/_id/edit" */))
const _791cacb6 = () => interopDefault(import('..\\pages\\teachers\\_id\\show.vue' /* webpackChunkName: "pages/teachers/_id/show" */))
const _11d1c8f1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/assignments",
    component: _0b5c78bd,
    name: "assignments"
  }, {
    path: "/grades",
    component: _67093575,
    name: "grades"
  }, {
    path: "/students",
    component: _199687ce,
    name: "students"
  }, {
    path: "/teachers",
    component: _4d3bc340,
    name: "teachers"
  }, {
    path: "/assignments/create",
    component: _f0322cbe,
    name: "assignments-create"
  }, {
    path: "/grades/create",
    component: _bc5c782e,
    name: "grades-create"
  }, {
    path: "/students/create",
    component: _c9d1dc76,
    name: "students-create"
  }, {
    path: "/teachers/create",
    component: _fc1e2104,
    name: "teachers-create"
  }, {
    path: "/assignments/:id/edit",
    component: _3a7ec5a2,
    name: "assignments-id-edit"
  }, {
    path: "/assignments/:id/show",
    component: _6f1158a2,
    name: "assignments-id-show"
  }, {
    path: "/grades/:id/edit",
    component: _285f8432,
    name: "grades-id-edit"
  }, {
    path: "/grades/:id/show",
    component: _7820f95a,
    name: "grades-id-show"
  }, {
    path: "/students/:id/edit",
    component: _58605aea,
    name: "students-id-edit"
  }, {
    path: "/students/:id/show",
    component: _60208dfe,
    name: "students-id-show"
  }, {
    path: "/teachers/:id/edit",
    component: _3720ee32,
    name: "teachers-id-edit"
  }, {
    path: "/teachers/:id/show",
    component: _791cacb6,
    name: "teachers-id-show"
  }, {
    path: "/",
    component: _11d1c8f1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
