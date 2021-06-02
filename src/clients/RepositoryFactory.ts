// 永続化モジュールをこのファクトリーを介して取得させる
// TODO:考える モックの処理に置き換えやすくなる

import { TodoClient } from '@/clients/TodoClient'
import { TodoClientInterface } from '@/clients/TodoClient/types'
import { MockTodoClient } from '@/clients/TodoClient/mock'

export const TODOS = 'todos'

export interface Repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]:
    process.env.NODE_ENV === 'mock' ? new MockTodoClient() : new TodoClient(),
} as Repositories