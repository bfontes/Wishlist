<template>
  <main-layout id="app">
    <router-view></router-view>
  </main-layout>
</template>

<script>
export default {
  name: 'app',
  components: {
    MainLayout: () => import('@/layouts/MainLayout/indexLayout.vue'),
  },
}
</script>
