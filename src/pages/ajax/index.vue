<template>
    <div class="webpack">
        <div class="webpackcontent">
            <img src="../svg/04-ajax.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.webpack {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.webpackcontent {
    width: 100%;
    height: 100%;
    background-color: #181a1b;
    box-shadow: 0 0 2px #ddd;
    overflow-y: auto;
}
img {
    width: 100%;
    margin: 0 auto;
}
.webpackcontent::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.webpackcontent::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #808080;
}
</style>