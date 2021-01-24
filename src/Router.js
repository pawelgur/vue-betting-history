import BettingHistoryPage from "@/pages/BettingHistoryPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bet-history/sports'
  },
  {
    path: '/bet-history/:category',
    name: 'BetHistory',
    component: BettingHistoryPage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
