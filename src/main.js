import Vue from 'vue'
import App from './App.vue'
import './assets/rest.css'
import vConsole from 'vconsole'
import router from './router/router'
import store from './store/store'
import FastClick from 'fastclick'
import { api } from './api/api'
import { post, get } from './http/http'
import { Button, Toast, MessageBox, Header, Tabbar, TabItem, Search, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(Cell.name, Cell)
Vue.prototype.$toast = Toast
Vue.prototype.$msg = MessageBox

let Vconsole = new vConsole()
export default Vconsole

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$api = api
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
