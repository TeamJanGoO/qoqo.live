import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'QoQo.live | Home'
      }
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
      meta: {
        title: 'QoQo.live | Movies'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        title: 'QoQo.live | 404 - Not Found'
      }
    }
  ]
})

export default router
