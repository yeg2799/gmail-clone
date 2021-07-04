<template>
  <div class="content">
      <div class="content-top">
        <div class="content-top-left">
          <div class="checkbox"></div>
          <div class="icon refresh">
             <svg-sprite icon="refresh" />
          </div>
          <div class="icon threedot">
              <svg-sprite icon="threedotvert"/>
          </div>
        </div>
        <div class="content-top-right">
          <div class="page-numbers">
            <span>59 satırdan 1-50 arası</span>
          </div>
          <div class="page-transition">
            <div class="icon left-transition">
              <svg-sprite icon="leftarrow" />
            </div>
            <div class="icon right-transition">
              <svg-sprite icon="rightarrow" />
            </div>
          </div>
          <div class="icon keyboard">
            <svg-sprite icon="keyboard"/>
          </div>
        </div>
      </div>
      <div class="content-bottom" v-for="n in 20" :key="n">
        <MessageBox />
      </div>
  </div>
</template>

<script>
import MessageBox from '../../components/MessageBox.vue'


export default {
  components: { MessageBox },

}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  flex-direction: column;
  
  .content-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
    .content-top-left{
      display: flex;
      align-items: center;
      .refresh{
        margin: 0px 30px;
      }
    }
      .content-top-right{
      display: flex;
      align-items: center;
      .page-transition{
        display: flex;
        margin: 0px 30px;
      }
    }
  }
}
.content-bottom{
  overflow: auto;
}
.icon{
  display: flex;
  svg{
    width: 20px;
    height: 20px;
    fill: #474747;
  }
}
.checkbox{
        width: 18px;
        height: 18px;
        border: 1px solid #474747;;
        display: flex;
        align-items: center;
  }
</style>