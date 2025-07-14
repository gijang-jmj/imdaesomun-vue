import { createRouter, createWebHistory } from 'vue-router'
import { AppRoute } from '@/constants/AppRoute'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/AppMainLayout.vue'),
      children: [
        {
          path: AppRoute.HOME,
          name: AppRoute.HOME,
          component: () => import('@/pages/home/HomeView.vue'),
          alias: '/',
          meta: {
            title: '임대공고 리스트',
          },
        },
        {
          path: AppRoute.NOTICE,
          name: AppRoute.NOTICE,
          component: () => import('@/pages/notice/NoticeView.vue'),
        },
        {
          path: AppRoute.SAVED,
          name: AppRoute.SAVED,
          component: () => import('@/pages/saved/SavedView.vue'),
        },
        {
          path: AppRoute.PROFILE,
          name: AppRoute.PROFILE,
          component: () => import('@/pages/profile/ProfileView.vue'),
        },
        {
          path: AppRoute.VIEWER,
          name: AppRoute.VIEWER,
          component: () => import('@/pages/viewer/ViewerView.vue'),
        },
      ],
    },
  ],
})

export default router
