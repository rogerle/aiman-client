import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// 1. 引入你需要的组件
import { Form,Button, Field, CellGroup,List } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import {getItem} from './utils/locaStorage'
import { Tabbar, TabbarItem } from 'vant'
import {Tab,Tabs}from 'vant'
import { Icon } from 'vant';

const app = createApp(App)

app.use(router)
app.use(Form)
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Tab)
app.use(Tabs)
app.use(Icon)
app.use(List)
app.use(store)

const whiteList=['/login']
router.beforeEach((to, from, next) => {

    if( getItem('AIMAN_USER_KEY') || whiteList.includes(to.path)){
        next()
    } else{
        next('/login')
    }

})

app.mount('#app')
