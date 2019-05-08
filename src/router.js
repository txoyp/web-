import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About_US from './views/About_US'
import Footer from './components/Footer'
import Header from './components/Header'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
      {
          path: '/about-us',
          name: 'about-us',
          component: About_US
      },
      {
          path: '/footer',
          name: 'footer',
          component: Footer
      },
      {
          path: '/Header',
          name: 'header',
          component: Header
      },
      {
          path: '/coursedetails',
          name: 'coursedetails',
          component: () => import('./views/CourseDetails.vue')
      },
  ]
})
