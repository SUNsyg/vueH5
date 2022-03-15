import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 300, y: 0 }
    // }
  },
  {
    path: '/setup',
    name: 'SetUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SetUp.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "about" */ '../views/new.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import(/* webpackChunkName: "about" */ '../views/state/count.vue')
  },
  {
    path: '/user/detail/:id',
    name: 'detail',
    component: () => import('../views/user/detail.vue'),
    // beforeEnter: (to, from) => {
    //   return false
    // },
    children: [
      {
        path: 'profile',
        component: () => import('../views/user/profile')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory('/base-directory/'),
  routes
})
router.beforeEach( (to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
router.beforeResolve(to => {
  console.log(to.meta)
})
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
  console.log('全局后置钩子')
})

export default router
