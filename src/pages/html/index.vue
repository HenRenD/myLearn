<template>
    <div class="html">
        <div class="aside">
            <el-col>
                <el-menu router default-active="jianjie" class="el-menu-vertical-demo" text-color="#fff" unique-opened>
                    <el-menu-item index="jianjie">一，html简介</el-menu-item>
                    <el-menu-item index="doctype">二，html文档声明</el-menu-item>
                    <el-submenu index='1'>
                        <template slot="title">三，html标签</template>
                        <el-submenu index='1-1'>
                            <template slot="title">1，元数据标签</template>
                            <el-menu-item index="headtag">&lt;head></el-menu-item>
                            <el-menu-item index="titletag">&lt;title></el-menu-item>
                            <el-menu-item index="metatag">&lt;meta></el-menu-item>
                            <el-menu-item index="linktag">&lt;link></el-menu-item>
                            <el-menu-item index="styletag">&lt;style></el-menu-item>
                            <el-menu-item index="basetag">&lt;base></el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-2'>
                            <template slot="title">2，脚本标签</template>
                            <el-menu-item index="scripttag">&lt;script></el-menu-item>
                            <el-menu-item index="noscripttag">&lt;noscript></el-menu-item>
                            <el-menu-item index="canvastag">&lt;canvas>(H5)</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-3'>
                            <template slot="title">3，逻辑分类标签</template>
                            <el-menu-item index="bodytag">&lt;body></el-menu-item>
                            <el-menu-item index="htag">&lt;h1~h6></el-menu-item>
                            <el-menu-item index="addresstag">&lt;address></el-menu-item>
                            <el-menu-item index="headertag">&lt;header>(H5)</el-menu-item>
                            <el-menu-item index="navtag">&lt;nav>(H5)</el-menu-item>
                            <el-menu-item index="maintag">&lt;main>(H5)</el-menu-item>
                            <el-menu-item index="articletag">&lt;article>(H5)</el-menu-item>
                            <el-menu-item index="asidetag">&lt;aside>(H5)</el-menu-item>
                            <el-menu-item index="sectiontag">&lt;section>(H5)</el-menu-item>
                            <el-menu-item index="footertag">&lt;footer>(H5)</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-4'>
                            <template slot="title">4，组织文本标签</template>
                            <el-menu-item index="divtag">&lt;div></el-menu-item>
                            <el-menu-item index="ptag">&lt;p></el-menu-item>
                            <el-menu-item index="ultag">&lt;ul></el-menu-item>
                            <el-menu-item index="oltag">&lt;ol></el-menu-item>
                            <el-menu-item index="dltag">&lt;dl></el-menu-item>
                            <el-menu-item index="hrtag">&lt;hr></el-menu-item>
                            <el-menu-item index="pretag">&lt;pre></el-menu-item>
                            <el-menu-item index="blockquotetag">&lt;blockquote></el-menu-item>
                            <el-menu-item index="figuretag">&lt;figure~figcaption>(H5)</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-5'>
                            <template slot="title">5，行内文本标签</template>
                            <el-menu-item index="atag">&lt;a></el-menu-item>
                            <el-menu-item index="spantag">&lt;span></el-menu-item>
                            <el-menu-item index="qtag">&lt;q></el-menu-item>
                            <el-menu-item index="abbrtag">&lt;abbr></el-menu-item>
                            <el-menu-item index="citetag">&lt;cite></el-menu-item>
                            <el-menu-item index="smalltag">&lt;small></el-menu-item>
                            <el-menu-item index="timetag">&lt;time>(H5)</el-menu-item>
                            <el-menu-item index="datatag">&lt;data>(H5)</el-menu-item>
                            <el-menu-item index="marktag">&lt;mark>(H5)</el-menu-item>
                            <el-submenu index='1-5-1'>
                                <template slot="title">换行标签</template>
                                <el-menu-item index="brtag">&lt;br></el-menu-item>
                                <el-menu-item index="wbrtag">&lt;wbr></el-menu-item>
                            </el-submenu>
                            <el-submenu index='1-5-2'>
                                <template slot="title">文本方向</template>
                                <el-menu-item index="bditag">&lt;bdi></el-menu-item>
                                <el-menu-item index="bdotag">&lt;bdo></el-menu-item>
                            </el-submenu>
                            <el-submenu index='1-5-3'>
                                <template slot="title">下标/上标</template>
                                <el-menu-item index="subtag">&lt;sub></el-menu-item>
                                <el-menu-item index="suptag">&lt;sup></el-menu-item>
                            </el-submenu>
                            <el-submenu index='1-5-4'>
                                <template slot="title">短语标签</template>
                                <el-menu-item index="codetag">&lt;code></el-menu-item>
                                <el-menu-item index="emtag">&lt;em></el-menu-item>
                                <el-menu-item index="strongtag">&lt;strong></el-menu-item>
                            </el-submenu>
                            <el-submenu index='1-5-5'>
                                <template slot="title">加粗/倾斜</template>
                                <el-menu-item index="btag">&lt;b></el-menu-item>
                                <el-menu-item index="itag">&lt;i></el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index='1-6'>
                            <template slot="title">6，编辑标签</template>
                            <el-menu-item index="deltag">&lt;del></el-menu-item>
                            <el-menu-item index="instag">&lt;ins></el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-7'>
                            <template slot="title">7，表格标签</template>
                            <el-menu-item index="tabletag">&lt;table></el-menu-item>
                            <el-menu-item index="tablesontag">table子标签</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-8'>
                            <template slot="title">8，表单标签</template>
                            <el-menu-item index="formtag">&lt;form></el-menu-item>
                            <el-menu-item index="inputtag">&lt;input></el-menu-item>
                            <el-menu-item index="buttontag">&lt;button></el-menu-item>
                            <el-menu-item index="fieldset_legendtag">&lt;fieldset / legend></el-menu-item>
                            <el-menu-item index="textareatag">&lt;textarea></el-menu-item>
                            <el-menu-item index="optiontag">&lt;option></el-menu-item>
                            <el-menu-item index="selecttag">&lt;select></el-menu-item>
                            <el-menu-item index="optgrouptag">&lt;optgroup></el-menu-item>
                            <el-menu-item index="datalisttag">&lt;datalist>(H5)</el-menu-item>
                            <el-menu-item index="outputtag">&lt;output>(H5)</el-menu-item>
                            <el-menu-item index="progresstag">&lt;progress>(H5)</el-menu-item>
                            <el-menu-item index="metertag">&lt;meter>(H5)</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-9'>
                            <template slot="title">9，嵌入内容标签</template>
                            <el-menu-item index="imgtag">&lt;img></el-menu-item>
                            <el-menu-item index="audiotag">&lt;audio>(H5)</el-menu-item>
                            <el-menu-item index="videotag">&lt;video>(H5)</el-menu-item>
                            <el-menu-item index="sourcetag">&lt;source>(H5)</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index='2'>
                        <template slot="title">四，html5新API</template>
                        <el-menu-item index='geolocation'>1，Geolocation</el-menu-item>
                        <el-menu-item index='drop'>2，拖放</el-menu-item>
                        <el-menu-item index='webstorage'>3，web存储</el-menu-item>
                        <el-menu-item index='applicationcache'>4，应用程序缓存</el-menu-item>
                        <el-menu-item index='webworkers'>5，WebWorkers</el-menu-item>
                        <el-menu-item index='serversentevents'>6，服务器发送事件</el-menu-item>
                        <el-menu-item index='websocket'>7，WebSocket</el-menu-item>
                    </el-submenu>
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