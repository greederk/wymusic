<template>
  <div id="app">
    <Layout></Layout>
    <router-view></router-view>
  </div>
</template>
<script>
import Layout from '@/layout/index.vue'
export default {
  components:{
    Layout
  }
}
</script>
<style lang="scss">
body{
  margin:auto;
}
</style>
