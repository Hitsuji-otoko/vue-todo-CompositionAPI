import { DeepReadonly } from "vue"

export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
  createdAt: Date
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

export type Params = Pick<Todo, 'title' | 'description' | 'status'>

export interface TodoStore {
  state: DeepReadonly<TodoState>
  getTodo: (id: number) => Todo
  addTodo: (todo: Params) => void   //これ以降のメソッドはstateに対して処理をするのみで、何もreturnしていない
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}