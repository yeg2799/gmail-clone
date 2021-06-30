<template>
  <div class="menu">
      <div class="create-message__button">

        <span class="create">Oluştur</span>
      </div>
      <div class="menu-list__item d-flex align-items-center"  v-for="menu in menus" :key="menu.id" :class="{'active':menu.active,'notactive':!menu.active}">
        <svg-sprite :icon="menu.icon"/>
        <span class="menu-title">{{menu.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menus:[
        {
          id:1,
          icon:'inbox',
          title:'Gelen Kutusu',
          active:true
        },
        {
          id:2,
          icon:'star',
          title:'Yıldızlı',
          active:false
        },
        {
          id:3,
          icon:'schedule',
          title:'Ertelenenler',
          active:false
        },
        {
          id:4,
          icon:'near',
          title:'Gönderilmiş Postalar',
          active:false
        },
        {
          id:5,
          icon:'task',
          title:'Taslaklar',
          active:false
        },
        {
          id:6,
          icon:'down',
          title:'Diğer',
          active:false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu{
    .create-message__button{
        height: 48px;
        margin: 20px ;
        display: flex;
        cursor: pointer;
      .create{
        position: relative;
        border: none;
        padding: 15px 45px;
        border-radius: 30px;
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
        background-color: #fff;
        font-weight: 500;
        color: #3c4043;
        &:hover{
          box-shadow: inset 0 1px 3px 0px rgb(100 121 143 / 20%);
        }
        
        &::before{
          content:'';
          position: absolute;
          background-image: url('@/assets/image/create.png');
          // background-position: center;
          background-repeat: no-repeat;
          background-size: 32px;
          display: block;
          height: 48px;
          min-width: 56px;
          top: 7px;
          left: 5px;
        }
      }
    }
  }
  .menu-list__item{
    padding: 10px 20px;
    cursor: pointer;
    .icon{
      margin-right: 20px;
    }
    .menu-title{
        color: #393B3D;
    }
  }
  .active{
    background-color: #fce8e6;
    width: 90%;
    border-top-right-radius:30px;
    border-bottom-right-radius:30px;
    .icon{
      fill: #d93025;
    }
    .menu-title{
       color: #d93025;
    }
  }
  .notactive{
      &:hover{
      background-color: #F1F3F4;
      width: 90%;
      border-top-right-radius:30px;
      border-bottom-right-radius:30px;
    }
    }
</style>