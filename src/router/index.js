import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
=======
import NoEncontrado from "../views/NoEncontrado.vue"
>>>>>>> master

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Batalla',
    name: 'Batalla',
    component: () => import('../views/Batalla.vue')
  },
  {
    path: '/Favoritos',
    name: 'Favoritos',
    component: () => import('../views/Favoritos.vue')
  },
  {
<<<<<<< HEAD
    path: '/Historia',
    name: 'Historia',
    component: () => import('../views/Historia.vue')
  }
=======
    path: '/Caracteristicas',
    name: 'Caracteristicas',
    component: () => import('../views/Caracteristicas.vue')
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/NoEncontrado',
    name: 'NoEncontrado',
    component: () => import('../views/NoEncontrado.vue')
  },
  
  
>>>>>>> master
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
