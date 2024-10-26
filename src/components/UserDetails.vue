<script setup lang="ts">
import { useUser } from '@/composables/useUser'

const { data: user, status, error, userId } = useUser(1)
</script>

<template>
  <div>
    <h1>ユーザー詳細 (useQuery例)</h1>
    <div v-if="status === 'pending'">
      読み込み中...
    </div>
    <div v-else-if="status === 'error'">
      エラーが発生しました: {{ error?.message }}
    </div>
    <div v-else-if="user">
      <p>ユーザーID: {{ userId }}</p>
      <p>名前: {{ user.name }}</p>
      <p>メール: {{ user.email }}</p>
      <p>電話: {{ user.phone }}</p>
    </div>
  </div>
</template>