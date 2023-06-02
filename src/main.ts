import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import { Form,Button, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
const app = createApp(App)

app.use(router)
app.use(Form)
app.use(Button)
app.use(Field)
app.use(CellGroup)

app.mount('#app')
