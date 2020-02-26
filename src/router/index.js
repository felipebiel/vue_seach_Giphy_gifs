import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/pages/home/HomeComponent'
import GifDetails from '../views/frontend/pages/gif/GifDetailsComponent'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gif/:id',
    name: 'gif.details',
    component: GifDetails,
    props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
