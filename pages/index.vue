<template>
  <div class="d-flex">
      <div class="col-2">
        <Menu/>
      </div>
      <div class="col-10">
        <Content/>
      </div>  
      
  </div>
</template>

<script>
import Content from '../components/Content.vue'
import Menu from '../components/Menu.vue'
export default {
  components: { Menu, Content }}
</script>

<style lang="scss" scoped>

</style>
