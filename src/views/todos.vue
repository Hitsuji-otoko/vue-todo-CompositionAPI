<template>
  <h2>TODO一覧</h2>
  <!-- 非同期コンポーネントを扱えるようにする -->
  <Suspense>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <router-link to="/new">新規作成</router-link>
  <br />
</template> 

<script lang="ts">
import { defineComponent } from "vue";
import AsyncTodos from "@/components/AsyncTodos.vue";

export default defineComponent({
  components: {
    AsyncTodos,
  },
});
</script>