import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Todos from '@/views/Todos.vue'
import AddTodo from '@/views/AddTodo.vue'
import EditTodo from '@/views/EditTodo.vue'

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
  {
    path: '/edit/:id',
    name: 'EditTodo',
    component: EditTodo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
