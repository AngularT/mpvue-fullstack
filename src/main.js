// 入口
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

// export default{
//   config:{
//     'pages': [
//       "^pages/books/main"
//     ],
//    'window': {
//     'navigationBarBackgroundColor': '#EA5149',
//     'navigationBarTextStyle': 'light',
//     'navigationBarTitleText': '图书小册',
//     'backgroundColor': '#eeeeee',
//     'backgroundTextStyle': 'black'
//    }
//   }
// }
