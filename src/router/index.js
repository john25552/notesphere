import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/main.vue'),
      meta: {
        authGuarded: false
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/auth/login.vue'),
          meta: {
            authGuarded: false
          }
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('../views/auth/signup.vue'),
          meta: {
            authGuarded: false
          }
        },
        {
          path: '/reset-password',
          name: 'passwordReset',
          component: () => import('../views/auth/reset_password.vue'),
          meta: {
            authGuarded: false
          }
        },
      ]
    },
    {
      path: '/',
      name: 'notesphere',
      component: () => import('../views/nsd.vue'),
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/pages/dashboard/main.vue'),
          meta: {
            authGuarded: true
          }
        },
        {
          path: '/assignments',
          name: 'assignments',
          component: () => import('../views/pages/assignments/main.vue'),
          meta: {
            authGuarded: true
          }
        },
        {
          path: '/libraries',
          name: 'libraries',
          component: () => import('../views/pages/libraries/main.vue'),
          meta: {
            authGuarded: true
          }
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('../views/pages/messages/main.vue'),
          meta: {
            authGuarded: true
          }
        },
        {
          path: '/notes',
          name: 'notes',
          component: () => import('../views/pages/notes/main.vue'),
          meta: {
            authGuarded: true
          },
          children: [
            {
              path: 'editor',
              name: 'editor',
              component: () => import('../views/pages/notes/editor.vue'),
              meta:{
                authGuarded: true
              }
            },
            {
              path: 'preview',
              name: 'preview',
              component: () => import('../views/pages/notes/preview.vue'),
              meta:{
                authGuarded: true
              },
            },
          ]
        },
        {
          path: '/notifications',
          name: 'notifications',
          component: () => import('../views/pages/notifications/main.vue'),
          meta: {
            authGuarded: true
          }
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/pages/profile/main.vue'),
          meta: {
            authGuarded: true
          },
          children: [
            {
              path: 'overview',
              name: 'overview',
              component: () => import('../views/pages/profile/overview.vue'),
              meta: {
                authGuarded: true
              }
            },
            {
              path: '/documents',
              name: 'documents',
              component: () => import('../views/pages/profile/documents.vue'),
              meta: {
                authGuarded: true
              }
            },
            {
              path: '/collaborations',
              name: 'collaborations',
              component: () => import('../views/pages/profile/collaborations.vue'),
              meta: {
                authGuarded: true
              }
            },
          ]
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../views/pages/settings/main.vue'),
          meta: {
            authGuarded: true
          }
        },
      ]
    },
  ]
})

export default router
