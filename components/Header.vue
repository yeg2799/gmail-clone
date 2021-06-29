<template>
 <div class="d-flex justify-content-between header ">
     <div class="left d-flex align-items-center">
    <div class="hamburger-icon d-flex icons">
         <svg-sprite icon="menu-hamburger"/>
     </div>
     <div class="d-flex logo-image">
         <img src="@/assets/image/logo.png"/>
     </div>
    <div class="d-flex search-input" >
        <div class="icons">
            <svg-sprite icon="search"/>
        </div>
         <input type="text" class="search" placeholder="Postalarda Arayın"/>
        <div class="icons tune">
            <svg-sprite icon="tune-settings"/>
        </div>
     </div>
     </div>
    <div class="right d-flex align-items-center">
    <div class="d-flex icons settings-icon">
          <svg-sprite icon="support"/>
     </div>
     <div class="d-flex icons settings-icon">
         <svg-sprite icon="settings"/>
     </div>
    <div class="d-flex icons settings-icon">
         <svg-sprite icon="applications"/>
     </div>
    <div class="separator">
         <md-avatar class="md-avatar-icon avatar">E</md-avatar>
     </div>
     </div>
  </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped>
.header{
    height: 64px;
    border-bottom: 1px solid #ECEFF1;
    padding: 0px 20px;
    .logo-image{
        cursor: pointer;
    }
    .avatar{
        background: #F0F0F0;
    }
    .icons{
        cursor: pointer;
    .icon{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        padding: 10px;
        &:hover{
            background: #F0F0F0;
        }
    }
    }
    .settings-icon{
         .icon{
             width: 40px;
             height: 40px;
             padding: 10px;
         }
         margin-right: 5px;
    }
    .search-input{
        margin-left: 80px;
        width: 720px;
        position: relative;
        .icon{
            position: absolute;
            top: 5px;
            left: 5px;
            &:hover{
                background: #E3E5E6;
            }
        }
        .tune{
            position: absolute;
            right: 50px;   
        }
        .search{
            background: #F1F3F4;
            border: none;
            width: 100%;
            padding: 18px 60px;
            border: 1px solid #F1F3F4;
            border-radius: 10px;
            color: #757575;
            font-size: 15px;
            font-weight: 500;
            &:focus{
                outline: none;
                background: #fff;
            }
        }
    }
}
</style>