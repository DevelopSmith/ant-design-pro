export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/analysis' },
      // list
      {
        path: '/list/basic-list',
        icon: 'dashboard',
        name: 'Dashboard',
        component: './List/BasicList',
      },
      {
        path: '/list/basic-list',
        icon: 'table',
        name: 'Campaigns',
        component: './List/BasicList',
      },
      {
        path: '/analytics',
        name: 'Analytics',
        icon: 'pie-chart',
        component: './List/Analytics',
      },
    ],
  },
];
