import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import ZmUI from '../packages/index';

Vue.use(ZmUI);

import 'ant-design-vue/dist/antd.css';
import { Menu } from 'ant-design-vue';

Vue.use(Menu);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
