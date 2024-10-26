import { defineQuery } from '@pinia/colada'

export const useTodos = defineQuery({
  key: ['todos'],
  query: () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json()),
})