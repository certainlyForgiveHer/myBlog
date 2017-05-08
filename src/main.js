// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './pages/layout'
import '../static/css/reset.css'
import VRouter from 'vue-router'
import resume from './components/resume'
import blog from './components/blog'
import github from './components/github'

Vue.use(VRouter)

var router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/resume'
    },
    {
      path: '/resume',
      component: resume
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/github',
      component: github
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: {
    layout
  }
})
