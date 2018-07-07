import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PreviewCardBottom from '@/components/PreviewCard/PreviewCardBottom'
import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/PreviewCard',
      name: 'PreviewCardBottom',
      component: PreviewCardBottom
    },
    {
      path: '/PreviewCard',
      name: 'PreviewCardTop',
      component: PreviewCardTop
    }
  ]
})
