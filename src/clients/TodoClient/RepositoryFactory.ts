// 永続化モジュールをこのファクトリーを介して取得させる
// TODO:考える　モックの処理に置き換えやすくなる

import { TodoClient } from '@/clients/TodoClient'
import { TodoClientInterface } from '@/clients/TodoClient/types'

export const TODOS = 'todos'

export interface Repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]: new TodoClient(),
} as Repositories