import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// Agency Pages
import Agency from '../views/agency/AgencyIndex'
import AgencyHome from '../views/agency/AgencyHome'

//Urban Pages
import Urban from '../views/urban/UrbanIndex'
import UrbanHome from '../views/urban/UrbanHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Agency,
    children: [
      {
        path: '/agency',
        alias: '',
        name: 'AgencyHome',
        component: AgencyHome
      },
    ]
  },
  {
    path: '/urban',
    component: Urban,
    children: [
      {
        path: '/urban',
        alias: '',
        name: 'UrbanHome',
        component: UrbanHome
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
