import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/main.scss'
import '@/assets/js/helpers'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { 
    store.dispatch('checkAuth')
    if (store.state.me) {
      console.log('Ya estas autenticado, pasa compare')      
      next()
    } else {      
      console.log('Se va para la página de autenticacion')      
      next({
        path: '/login'
      })
    }
  } 
  else if(to.matched.some(record => record.meta.checkLogin)) {
    if (store.state.me) {
      console.log('Se va para la página del home, ya esta autenticado')      
      next({
        path: '/'
      })
    } else {
      console.log('No estas autenticado, quedate aca')      
      next()
    }
  } 
  else {
    next() 
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
