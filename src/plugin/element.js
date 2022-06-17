import Vue from 'vue'
import {
    Message,
    Menu,
    MenuItem,
    Submenu,
    MenuItemGroup,
    Col,
} from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Col)