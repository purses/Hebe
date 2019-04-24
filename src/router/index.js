import _ from 'lodash';
import Vue from 'vue';
import Router from 'vue-router';

// import Login from '../views/login/login';
// import Logout from '../views/login/logout.vue';

Vue.use(Router);

let routers = [{
    /**
     * 同于目前index没有components，所以App.vue中，跳进该页时会默认重定向到有权限的default页，
     * 如果加了component记得改相关逻辑
     */
    path: '/',
    name: 'index',
    meta: {
        pageName: '首页'
    }
// }, {
//     path: '/login',
//     name: 'login',
//     component: Login,
//     meta: {
//         hideNav: true,
//         noNeedLogin: true,
//         noMessageTick: true,
//         pageName: '登录',
//         helpIcon: {
//             hide: true
//         }
//     }
// },
// {
//     path: '/logout',
//     name: 'logout',
//     component: Logout,
//     meta: {
//         hideNav: true,
//         noNeedLogin: true,
//         noMessageTick: true,
//         pageName: '登出',
//         hideHelp: true
//     }
}];

_.forEach([], item => {
    if (_.isArray(item)) {
        routers = routers.concat(item);
    } else {
        routers.push(item);
    }
});

export default new Router({
    routes: routers
});
