<template>
  <ul>
    <todo-item
      v-for="todo in todoStore.state.todos"
      :key="todo.id"
      :todo="todo"
      @click-title="clickTitle"
      @click-delete="clickDelete"
    >
    </todo-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import TodoItem from "@/components/TodoItem.vue";
import { todoKey } from "@/store/todo";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    TodoItem,
  },

  async setup() {
    const todoStore = inject(todoKey);
    if (!todoStore) {
      throw new Error("todoStore is not found");
    }
    const router = useRouter();
    const clickDelete = (id: number) => {
      todoStore.deleteTodo(id);
    };
    const clickTitle = (id: number) => {
      router.push(`/edit/${id}`);
    };

    await todoStore.fetchTodos();

    return {
      todoStore,
      clickDelete,
      clickTitle,
    };
  },
});
</script>