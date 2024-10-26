<script setup lang="ts">
import { useTodos } from '@/composables/useTodos'

const { data: todos, status, error } = useTodos()
</script>

<template>
  <div>
    <h1>Todoリスト</h1>
    <div v-if="status === 'pending'">
      読み込み中...
    </div>
    <div v-else-if="status === 'error'">
      エラーが発生しました: {{ error?.message }}
    </div>
    <ul v-else>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>