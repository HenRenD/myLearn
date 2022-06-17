<template>
    <div class="css">
        <div class="aside">
            <el-col>
                <el-menu router default-active="jianjie" class="el-menu-vertical-demo" text-color="#fff" unique-opened>
                    <el-menu-item index="jianjie">一，css简介</el-menu-item>
                    <el-menu-item index="selectorBlock">二，选择器/声明块</el-menu-item>
                    <el-menu-item index="weilei">三，伪类/伪元素</el-menu-item>
                    <el-submenu index='1'>
                        <template slot="title">四，样式属性</template>
                        <el-menu-item index="fontandtext">1，字体和文本</el-menu-item>
                        <el-menu-item index="border">2，边框和圆角</el-menu-item>
                        <el-menu-item index="background">3，背景</el-menu-item>
                        <el-menu-item index="gradi">4，渐变(css3)</el-menu-item>
                        <el-menu-item index="trans">5，透明</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="boxmodel">五，盒子模型</el-menu-item>
                    <el-menu-item index="dangbenliu">六，文档流/文本流</el-menu-item>
                    <el-menu-item index="float">七，浮动</el-menu-item>
                    <el-menu-item index="position">八，定位</el-menu-item>
                    <el-menu-item index="changebox">九，调整盒子</el-menu-item>
                    <el-menu-item index="transform">十，2D/3D转换(css3)</el-menu-item>
                    <el-menu-item index="transition">十一，过渡/动画(css3)</el-menu-item>
                    <el-submenu index='2'>
                        <template slot="title">十二，布局</template>
                        <el-menu-item index="liushilayout">1，流式布局</el-menu-item>
                        <el-menu-item index="flexlayout">2，flex布局(css3)</el-menu-item>
                        <el-menu-item index="remlayout">3，rem布局</el-menu-item>
                        <el-menu-item index="reactivelayout">4，响应式布局</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="notice">十三，注意项</el-menu-item>
                </el-menu>
            </el-col>
        </div>
        <div class="content" ref="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const _ = document.querySelectorAll(".el-menu-item");
        for (let once of _) {
            once.onclick = () => {
                this.$refs.content.scrollTop = 0;
            };
        }
    },
};
</script>

<style scoped>
.css {
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