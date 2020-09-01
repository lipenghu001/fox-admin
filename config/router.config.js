export default [
  //默认
  {
    path: '/',
    redirect: '/home'
  },
  // home
  {
    path: '/home',
    component: './Home/Home.tsx',
  },
  // user
  {
    path: '/user',
    component: './User/User',
  },
]