import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Todos from '@/views/Todos.vue'
import AddTodo from '@/views/AddTodo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/new',
    name: 'AddTodo',
    component: AddTodo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
