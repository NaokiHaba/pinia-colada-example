import { useQuery } from '@pinia/colada'
import { ref, computed } from 'vue'

export const useUser = (initialUserId: number) => {
  const userId = ref(initialUserId)

  const query = useQuery({
    key: computed(() => ['user', userId.value]),
    query: () => fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
      .then(res => res.json()),
  })

  return {
    ...query,
    userId,
  }
}