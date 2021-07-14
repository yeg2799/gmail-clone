<template>
  <div class="d-flex">

  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  components: { Menu },
  async asyncData(context){
   const { res } = context;
   res.writeHead(301,{ location:'/inbox' });
   res.end();
  }
  
  }

</script>

<style lang="scss" scoped>
.part-menu{
  width: 13%;
}
.part-content{
  width: 87%;
}
</style>
