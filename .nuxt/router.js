import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ae7848a = () => interopDefault(import('..\\pages\\assignments\\index.vue' /* webpackChunkName: "pages/assignments/index" */))
const _1935c9b7 = () => interopDefault(import('..\\pages\\grades\\index.vue' /* webpackChunkName: "pages/grades/index" */))
const _66e5704a = () => interopDefault(import('..\\pages\\students\\index.vue' /* webpackChunkName: "pages/students/index" */))
const _26944f02 = () => interopDefault(import('..\\pages\\teachers\\index.vue' /* webpackChunkName: "pages/teachers/index" */))
const _b2a0773a = () => interopDefault(import('..\\pages\\assignments\\create.vue' /* webpackChunkName: "pages/assignments/create" */))
const _3537b7e7 = () => interopDefault(import('..\\pages\\grades\\create.vue' /* webpackChunkName: "pages/grades/create" */))
const _2660037a = () => interopDefault(import('..\\pages\\students\\create.vue' /* webpackChunkName: "pages/students/create" */))
const _58ac4808 = () => interopDefault(import('..\\pages\\teachers\\create.vue' /* webpackChunkName: "pages/teachers/create" */))
const _5269b32d = () => interopDefault(import('..\\pages\\assignments\\_id\\edit.vue' /* webpackChunkName: "pages/assignments/_id/edit" */))
const _428b22c0 = () => interopDefault(import('..\\pages\\assignments\\_id\\show.vue' /* webpackChunkName: "pages/assignments/_id/show" */))
const _5d963dae = () => interopDefault(import('..\\pages\\grades\\_id\\edit.vue' /* webpackChunkName: "pages/grades/_id/edit" */))
const _5d859c9c = () => interopDefault(import('..\\pages\\grades\\_id\\show.vue' /* webpackChunkName: "pages/grades/_id/show" */))
const _1acea566 = () => interopDefault(import('..\\pages\\students\\_id\\edit.vue' /* webpackChunkName: "pages/students/_id/edit" */))
const _7ee968c0 = () => interopDefault(import('..\\pages\\students\\_id\\show.vue' /* webpackChunkName: "pages/students/_id/show" */))
const _55e9c8f4 = () => interopDefault(import('..\\pages\\teachers\\_id\\edit.vue' /* webpackChunkName: "pages/teachers/_id/edit" */))
const _3b8af732 = () => interopDefault(import('..\\pages\\teachers\\_id\\show.vue' /* webpackChunkName: "pages/teachers/_id/show" */))
const _16a0819a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5ae7848a,
    name: "assignments"
  }, {
    path: "/grades",
    component: _1935c9b7,
    name: "grades"
  }, {
    path: "/students",
    component: _66e5704a,
    name: "students"
  }, {
    path: "/teachers",
    component: _26944f02,
    name: "teachers"
  }, {
    path: "/assignments/create",
    component: _b2a0773a,
    name: "assignments-create"
  }, {
    path: "/grades/create",
    component: _3537b7e7,
    name: "grades-create"
  }, {
    path: "/students/create",
    component: _2660037a,
    name: "students-create"
  }, {
    path: "/teachers/create",
    component: _58ac4808,
    name: "teachers-create"
  }, {
    path: "/assignments/:id/edit",
    component: _5269b32d,
    name: "assignments-id-edit"
  }, {
    path: "/assignments/:id/show",
    component: _428b22c0,
    name: "assignments-id-show"
  }, {
    path: "/grades/:id/edit",
    component: _5d963dae,
    name: "grades-id-edit"
  }, {
    path: "/grades/:id/show",
    component: _5d859c9c,
    name: "grades-id-show"
  }, {
    path: "/students/:id/edit",
    component: _1acea566,
    name: "students-id-edit"
  }, {
    path: "/students/:id/show",
    component: _7ee968c0,
    name: "students-id-show"
  }, {
    path: "/teachers/:id/edit",
    component: _55e9c8f4,
    name: "teachers-id-edit"
  }, {
    path: "/teachers/:id/show",
    component: _3b8af732,
    name: "teachers-id-show"
  }, {
    path: "/",
    component: _16a0819a,
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
