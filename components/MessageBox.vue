<template>
    <nuxt-link to="/InboxDetail" class="message-box">
            <div class="left-icons">
              <div class="checkbox" ><input type="checkbox" />  </div>
              <div class="star icon">
                <svg-sprite icon="starempty" />
              </div>
              <div class="important icon">
                <svg-sprite icon="label" />
              </div>
              <div class="message-title">
                  <span>Hepsiburada</span>
              </div>
            </div>

            <div class="message-text">
              <span>Redmi Note 10 5G alana Mi True Wireless Earphone 2 Basic hediye!</span><span>İhtiyaçlarnı, indirimleri kısacası aradığın herşeyi burada bulursun. Vantilatörde %25'e varan indirimler. Yeni nes...</span>
            </div>
            <div class="message-date">
              <span>3 Tem</span>
            </div>
    </nuxt-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.checkbox{
        width: 18px;
        height: 18px;
        border: 2px  solid rgba(100,121,143,0.122);
        display: flex;
        align-items: center;
        // background: white;
       input{
           appearance: none;
           width: 15px;
           height: 15px;
           cursor: pointer;
           &:checked{
               background: #020202;
           }
       }
  }
  .icon{
  display: flex;
  svg{
    width: 20px;
    height: 20px;
    fill: rgba(100,121,143,0.122);
  }
}
  .message-box{
    display: flex;
    align-items: center;
    border: 2px solid #F1F3F4;
    background: #F5F7F7;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 5px;
    cursor: pointer;
    color: black;
    &:hover{
        box-shadow: inset -1px -1px 0px 1px rgb(100 121 143 / 60%);
        text-decoration: none;
        .icon{
        svg{
        fill: #020202;
        }
        }
      .checkbox{
            border: 2px  solid #020202;
        }
    }
    .left-icons{
      display: flex;
      align-items: center;
      margin-left: 15px;
      .star{
        margin: 0 15px;
      }
      .important{
        margin-right: 10px;
      }
    }
  }
</style>