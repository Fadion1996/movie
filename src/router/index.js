import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PreviewCardBottom from '@/components/PreviewCard/PreviewCardBottom'
import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/PreviewCardBottom',
      name: 'PreviewCardBottom',
      component: PreviewCardBottom
    },
    {
      path: '/PreviewCardTop/:id',
      name: 'PreviewCardTop',
      component: PreviewCardTop
    }
  ]
})
