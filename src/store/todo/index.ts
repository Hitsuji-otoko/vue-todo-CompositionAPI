import { InjectionKey, reactive, readonly } from 'vue'
import { Params, Todo, TodoState, TodoStore } from '@/store/todo/types'
import Repository, { TODOS } from '@/clients/TodoClient/RepositoryFactory'

const TodoRepository = Repository[TODOS]

const state = reactive<TodoState>({
  todos: [
    {
      id: 1,
      title: 'todo1',
      description: '1つ目',
      status: 'waiting',
      createdAt: new Date('2020-12-01'),
      updatedAt: new Date('2020-12-01'),
    },
    {
      id: 2,
      title: 'todo2',
      description: '2つ目',
      status: 'waiting',
      createdAt: new Date('2020-12-02'),
      updatedAt: new Date('2020-12-02'),
    },
    {
      id: 3,
      title: 'todo3',
      description: '3つ目',
      status: 'working',
      createdAt: new Date('2020-12-03'),
      updatedAt: new Date('2020-12-04'),
    },
  ],
})
const fetchTodos = async () => {
  state.todos = await TodoRepository.getAll()
}

const fetchTodo = async (id: number) => {
  const todo = await TodoRepository.get(id)
  state.todos.push(todo)
}

const getTodo = (id: number) => {
  const todo = state.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  return todo
}

const addTodo = async (todo: Params) => {
  const result = await TodoRepository.create(todo)
  state.todos.push(result)
}

const updateTodo = async (id: number, todo: Todo) => {
  const result = await TodoRepository.update(id, todo)
  const index = state.todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  state.todos[index] = result
}

const deleteTodo = (id: number) => {
  TodoRepository.delete(id)
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

const todoStore: TodoStore = {
  state: readonly(state),
  fetchTodos,
  fetchTodo,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

export default todoStore

// Provide/Injectするのに必要なキーを宣言
export const todoKey: InjectionKey<TodoStore> = Symbol('todo')