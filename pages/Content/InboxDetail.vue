<template>
    <div class="content-detail">
        <div class="content-detail-top d-flex justify-content-between align-items-center p-3">
            <div class="detail-top-left d-flex">
                <nuxt-link to="/inbox" class="icon arrowback">
                     <svg-sprite icon="arrowback" />
                </nuxt-link>
                <div class="icon archive-icon">
                    <svg-sprite icon="archive"/>
                </div>
                <div class="icon">
                    <svg-sprite icon="spam" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
                <div class="icon">
                    <svg-sprite icon="delete" />
                </div>
            </div>
            <div class="detail-top-right d-flex align-items-center">
                <div class="page-numbers">
                    <span>59 satırdan 1-50 arası</span>
                </div>
                <div class="page-transition d-flex">
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
        <div class="content-detail-bottom">
            <div class="content-detail-title d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center left">
                    <h2>Redmi Note 10 5G alana Mi True Wireless Earphone 2 Basic hediye!</h2>
                    <div class="icon">
                        <svg-sprite icon="spam" />
                    </div>
                    <div class="delete-badge d-flex align-items-center">
                        <span class="inbox">Gelen Kutusu</span>
                        <span class="delete">x</span>
                    </div>
                </div>
                <div class="d-flex align-items-center right">
                    <div class="icon">
                        <svg-sprite icon="printer"/>
                    </div>
                    <div class="icon">
                        <svg-sprite icon="spam" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content-detail-top{
    border-bottom: 1px solid #F1F3F4;
}
.icon{
    fill: #5F6368;
    display: flex;
    svg{
        width: 43px;
        height: 43px;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        &:hover{
        background-color: #E3E5E6;

        }
    }
}
.content-detail-bottom{
    .left{
        margin-left: 80px;
    }
    .right{
        margin-right: 15px;
    }
}
.arrowback{
    margin-right: 10px;
}
.delete-badge{
        background-color: rgb(221, 221, 221);
        color: rgb(102, 102, 102);
        border-radius: 5px;
        cursor: pointer;
        .inbox{
            padding: 0px 3px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            &:hover{
                background-color: #666666;
                color: #fff;
            }
        }
        .delete{
            padding: 0px 3px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            &:hover{
                background-color: #666666;
                color: #fff;
            }
        }
}
</style>