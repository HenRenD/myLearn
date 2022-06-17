<template>
    <div class="html">
        <div class="aside">
            <el-col>
                <el-menu router default-active="music" class="el-menu-vertical-demo" text-color="#fff" unique-opened>
                    <el-menu-item index="music">一，vue3-music</el-menu-item>
                    <el-menu-item index="shop">二，vue2-shop</el-menu-item>
                    <el-menu-item index="myblog">三，my-blog</el-menu-item>
                </el-menu>
            </el-col>
        </div>
        <div class="content" ref="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.html {
    display: flex;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
}
.aside {
    width: 15%;
    margin-right: 10px;
    height: 100%;
    background-color: #181a1b;
    box-shadow: 0 0 2px #ddd;
    overflow-y: auto;
}
.content {
    flex: 1;
    background-color: #181a1b;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
    padding-top: 0px;
    box-sizing: border-box;
    box-shadow: 0 0 2px #ddd;
}
.content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #808080;
}
.aside::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.aside::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #808080;
}
</style>