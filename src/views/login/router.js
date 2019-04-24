// import _ from 'lodash';
// import Vue from 'vue';
// import Router from 'vue-router';

// import Login from '../views/login/login';
// import Logout from '../views/login/logout.vue';

// Vue.use(Router);

import Login from './login';
import Logout from './logout';

export const routers = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        noHeader: true,
        noLogin: true,
    }
}, {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
        noHeader: true,
        noLogin: true,
    }
}];
