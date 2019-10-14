import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kako-sudjelovati',
      name: 'kako-sudjelovati',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/KakoSudjelovati.vue')
    },
    {
      path: '/good-cause',
      name: 'good-cause',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/GoodCause.vue')
    },
    {
      path: '/glasuj-za-svog-favorita',
      name: 'glasuj-za-svog-favorita',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/GlasujZaSvogFavorita.vue')
    },
    {
      path: '/raspored-crtanja',
      name: 'raspored-crtanja',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/RasporedCrtanja.vue')
    }
  ]
})
