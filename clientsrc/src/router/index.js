import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Boards from '../views/Boards.vue'
import Board from '../views/Board.vue'
import Dashboard from '../views/Dashboard.vue'
import Vault from '../components/Vault.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      // beforeEnter: authGuard
    },
    // {
    //   path: '/keeps',
    //   name: 'boards',
    //   component: Boards,
    //   beforeEnter: authGuard
    // },
    {
      path: "/vault",
      name: "vault",
      component: Vault,
       beforeEnter: authGuard
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})