import Vue from 'vue'
import VueRouter from 'vue-router'
import baseLayout from '@/layouts/baseLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '菜单1'
    },
    component: baseLayout,
    redirect: '/children',
    children: [
      {
        path: 'children',
        name: 'Children',
        meta: {
          title: '菜单1-1'
        },
        component: () => import('@/views/home/children/index.vue')
      },
      {
        path: 'children2',
        name: 'Children2',
        meta: {
          title: '菜单1-2'
        },
        component: () => import('@/views/home/children/index2.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '菜单2'
    },
    component: baseLayout,
    redirect: '/test/children',
    children: [
      {
        path: 'children',
        name: 'testChildren',
        meta: {
          title: '菜单2-1'
        },
        component: () => import('@/views/test/child/index.vue')
      },
      {
        path: 'children2',
        name: 'testChildren2',
        meta: {
          title: '菜单2-2'
        },
        component: () => import('@/views/test/child/index2.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'forbidden',
    component: () => import('@/views/401/index.vue')
  },
  {
    path: '*',
    name: 'None',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
