import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import select from '../views/select.vue'
import navbar from '../components/navbar.vue'
import footer from '../components/footer.vue'
import login from '../views/login.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/reparer',
    name: 'select',
    component: select
  },
  {
    path: '',
    name: 'navbar',
    component: navbar
  },
  {
    path: '',
    name: 'footer',
    component: footer
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router