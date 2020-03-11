import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/main.scss'
import '@/assets/js/helpers'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { 
    store.dispatch('checkAuth').then(()=>{
      if (store.state.me) {
        next()
      } else {      
        next({
          path: '/login'
        })
      }
    })    
  } else if(to.matched.some(record => record.meta.checkLogin)) {  
    store.dispatch('checkAuth').then(()=>{
      if (store.state.me) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    })    
  } else if(to.matched.some(record => record.meta.checkLogout)) {
    store.dispatch('logout').then(()=>{
      next({
        path: '/login'
      })
    })
  } else {
    next() 
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
