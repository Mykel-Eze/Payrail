import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import ErrorPage from '../views/Error404'
// Agency Pages
import Agency from '../views/agency/AgencyIndex'
import AgencyHome from '../views/agency/AgencyHome'
import AgencyPrivacy from '../views/agency/AgencyPrivacy'
import AgencyTerms from '../views/agency/AgencyTerms'

//Urban Pages
import Urban from '../views/urban/UrbanIndex'
import UrbanHome from '../views/urban/UrbanHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Urban,
    redirect: '/urban'
  },
  {
    path: '/urban',
    component: Urban,
    children: [
      {
        path: '/urban/home',
        alias: '',
        name: 'UrbanHome',
        component: UrbanHome
      },
    ]
  },
  {
    path: '/agency',
    component: Agency,
    children: [
      {
        path: '/agency/home',
        alias: '',
        name: 'AgencyHome',
        component: AgencyHome
      },
      {
        path: 'privacy',
        name: 'AgencyPrivacy',
        component: AgencyPrivacy
      },
      {
        path: 'terms',
        name: 'AgencyTerms',
        component: AgencyTerms
      }
    ]
  },
  { path: '*', beforeEnter: (to, from, next) => { next('/error') } },
  {
    path: '/error',
    name: 'ErrorPage',
    component: ErrorPage,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
