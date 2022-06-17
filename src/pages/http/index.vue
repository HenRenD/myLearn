<template>
    <div class="http">
        <div class="httpcontent">
            <img src="../svg/00-http.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.http {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.httpcontent {
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: #181a1b;
    box-shadow: 0 0 2px #ddd;
    overflow-y: auto;
    box-sizing: border-box;
}
img {
    width: 100%;
    margin: 0 auto;
}
.httpcontent::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.httpcontent::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #808080;
}
</style>