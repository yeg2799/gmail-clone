<template>
        <div class="message-box">
            <div class="left-icons">
              <div class="checkbox"></div>
              <div class="star icon">
                <svg-sprite icon="starempty" />
              </div>
              <div class="important icon">
                <svg-sprite icon="importantempty" />
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
          </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.checkbox{
        width: 18px;
        height: 18px;
        border: 1px solid black;
        display: flex;
        align-items: center;
  }
  .message-box{
    display: flex;
    align-items: center;
    border: 1px solid #F1F3F4;
    background: #F5F7F7;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 5px;
    cursor: pointer;
    &:hover{
        box-shadow: inset -1px -1px 0px 1px rgb(100 121 143 / 60%);
    }
    .left-icons{
      display: flex;
      align-items: center;
      margin-left: 15px;
      .star{
        margin: 0 15px;
      }
      .important{
        margin-right: 5px;
      }
    }
  }
</style>