<template>
  <div class="send-message">
   <div class="send-message-title">
       <div class="p-2 d-flex justify-content-between">
       <div class="left">
            <span>Yeni İleti</span>
       </div>
        <div class="right">
            <span>Yeni İleti</span>
       </div>
       </div>
   </div>
   <div class="send-message-content">
       hello
   </div>
    <div class="send-message-bottom">
       <div class="left">
          
       </div>
       <div class="right">

       </div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .send-message{
     position: absolute;
     bottom: 0px;
     right: 80px;
     width: 500px;
     background: #404040;
     color: white;
     border-top-left-radius: 8px;
     border-top-right-radius: 8px;
     .send-message-content{
         background: #fff;
         color: #777;
         height: 480px;
     }
     .send-message-bottom{
        background: #fff;
         color: #777;
         padding: 20px;
     }
 }
</style>