import { TodoClient } from '@/clients/TodoClient'
import { TodoClientInterface } from '@/clients/TodoClient/types'

export const TODOS = 'todos'

export interface Repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]: new TodoClient(),
} as Repositories