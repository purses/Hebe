
// import _ from 'lodash';
import Vue from 'vue';
import VueResource from 'vue-resource';
import Element from 'element-ui';
// import 'assets/styles/element-variables.scss';
import 'assets/styles/main.sass';
// import Auth from './utils/auth';
import App from './App';
// import store from './store';
import router from './router';
// import decidedByDomain from './utils/decided-by-domain';
// import 'icons/style.css';

import { mapGetters } from 'vuex';

// Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Element);


// function needInterceptor (url) {
//     const noInterceptorUrls = [
//         /sso\/.*\/logout/
//     ];

//     return _.every(noInterceptorUrls, item => {
//         return !item.test(url);
//     });
// }

// Vue.http.interceptors.push((request, next) => {
//     next(resp => {
//         // 不拦截登出接口的401
//         if (resp.status === 401 && needInterceptor(request.url)) {
//             Auth.logout();
//         } else if (resp.status === 403) {
//             Vue.prototype.$message.error('没有权限进行该项操作');
//         }
//     });
// });

// const apiRoot = '/api/';
// Vue.http.options.root = apiRoot;

// const URL_NEED_ID = ['pgb', 'pg'];
// Vue.http.interceptors.push((request, next) => {
//     URL_NEED_ID.forEach(function (item) {
//         if (request.getUrl().indexOf(apiRoot + item) === 0 || request.url.indexOf('../' + item) === 0) {
//             request.headers.set('domain-id', 'prdb');
//             request.headers.set('app-id', Auth.appid);
//             // request.headers.set('domain-id', 'prdb');
//         }
//     });
//     next();
// });

// 后端需要统计来源，临时加个 header，注：这是个临时方案，后续需要后端推动基础服务加来源。
// const s4 = () => {
//     return Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
// };
// function guid () {
//     return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
// }
// Vue.http.interceptors.push((request, next) => {
//     let env = store.getters.env.env;
//     if (env) {
//         request.headers.set('X-Request-Trace-ID', env + '_' + guid());
//         request.headers.set('X-Appname', 'apollo');
//     }
//     next();
// });

Vue.mixin({
    data () {
        return {
            // ...commonMixin,
            // ...Eventlog.mixins,
        };
    },
    computed: {
        ...mapGetters({
            env: 'env'
        }),
        isLogout () {
            return this.$route.name === 'logout';
        },
        isLogin () {
            return this.$route.name === 'login';
        },
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
    template: '<App/>'
});

/* eslint-disable no-new */
