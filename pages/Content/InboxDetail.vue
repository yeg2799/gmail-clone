<template>
    <div class="content-detail">
        <div class="content-detail-top d-flex justify-content-between align-items-center p-3">
            <div class="detail-top-left d-flex">
                <div class="icon">
                     <svg-sprite icon="arrowback" />
                </div>
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
    &:first-child{
        margin-right: 10px;
    }
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

</style>