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
      { path: '/', redirect: '/dashboard' },
      // list
      {
        path: '/dashboard',
        icon: 'dashboard',
        name: 'dashboard',
        component: './Dashboard/Dashboard',
      },
      {
        path: '/campaigns',
        icon: 'table',
        name: 'campaigns',
        component: './List/BasicList',
      },
      {
        path: '/create-campaign',
        icon: 'table',
        name: 'create-campaign',
        component: './Forms/StepForm/Step1',
      },
      {
        path: '/analytics',
        name: 'analytics',
        icon: 'pie-chart',
        component: './List/Analytics',
      },
    ],
  },
];
