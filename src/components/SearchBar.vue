<template>
    <div class="search-bar">
      <input v-model="query" placeholder="Search for movies..." @input="onSearch" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    emits: ['search'],
    setup(_, { emit }) {
      const query = ref('');
  
      const onSearch = () => {
        emit('search', query.value);
      };
  
      return {
        query,
        onSearch
      };
    }
  };
  </script>
  
  <style>
  .search-bar {
    margin: 16px;
    text-align: center;
  }
  </style>
  