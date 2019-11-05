import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index');
const Error = () => import('@/components/Error');
const Login = () => import('@/components/Login');
const Position = () => import('@/components/Position');
const News = () => import('@/components/news/News');
const List = () => import('@/components/news/List');
const Single = () => import('@/components/news/Single');
const Shop = () => import('@/components/shop/Shop');
const User = () => import('@/components/user/User');
const Thing = () => import('@/components/things/Thing');
const useradmin = () => import('@/components/admin/useradmin');
const imgadmin = () => import('@/components/admin/imgadmin');

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/index',
      name: 'Index',
      component: Index,
      meta:{
        keepAlive:true,
      }
    },{
      path: '/news',
      name: 'News',
      component: News,
      meta:{
        keepAlive:true,
      }
    },{
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        keepAlive:true,
      }
    },{
      path: '/single/:id',
      name: 'Single',
      component: Single,
    },{
      path: '/position',
      name: 'Position',
      component: Position,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },{
      path: '/user',
      name: 'User',
      component: User,
      meta:{
        keepAlive:true,
      }
    },{
      path: '/thing',
      name: 'Thing',
      component: Thing,
      meta:{
        keepAlive:true,
      }
    },{
      path: '/useradmin',
      name: 'useradmin',
      component: useradmin,
      meta:{
        keepAlive:true,
      },

    },{
      path: '/imgadmin',
      name: 'imgadmin',
      component: imgadmin,
      meta:{
        keepAlive:true,
      }
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    },
  ]
})
