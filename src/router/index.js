import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PreviewCard from '@/components/PreviewCard'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/PreviewCard/:id',
      name: 'PreviewCard',
      component: PreviewCard
    }
  ]
})
