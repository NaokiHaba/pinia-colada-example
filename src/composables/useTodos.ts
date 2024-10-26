import { defineQuery } from '@pinia/colada'

export const useTodos = defineQuery({
  key: ['todos'],
  query: () => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json()),
})