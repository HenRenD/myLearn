import Vue from 'vue'
import App from './App.vue'
import 'highlight.js'
// 引入全局样式
import './assets/css/global.css'
// 引入font样式
import './assets/font/iconfont.css'
// 修改elemeng样式
import './assets/css/element.css'
// 引入element
import './plugin/element.js'
// 引入router
import router from './router'
Vue.config.productionTip = false
// highlight.js代码高亮插件
import Highlight from './plugin/highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
