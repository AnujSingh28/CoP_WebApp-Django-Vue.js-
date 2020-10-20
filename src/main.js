// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import featuredProperty from './featuredProperty'
import recentProperty from './recentProperty'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { featuredProperty },
//   template: '<App/>'
// })

new Vue({
  el: '#app1',
  render: h => h(featuredProperty)
})

new Vue({
  el: '#app2',
  render: h => h(recentProperty)
})
