import Vue from "vue"
import App from "@/App"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)//注册，使用组件并渲染组件
}).$mount("#app")