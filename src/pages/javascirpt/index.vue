<template>
    <div class="javascript">
        <div class="aside">
            <el-col>
                <el-menu router default-active="whatisjs" class="el-menu-vertical-demo" text-color="#fff" unique-opened>
                    <el-menu-item index="whatisjs">一，什么是javascript</el-menu-item>
                    <el-menu-item index="jsinhtml">二，html中使用javascript</el-menu-item>
                    <el-submenu index='1'>
                        <template slot="title">三，语言基础</template>
                        <el-menu-item index="grammer">1，语法</el-menu-item>
                        <el-menu-item index="keyword">2，关键字与保留字</el-menu-item>
                        <el-menu-item index="variable">3，变量</el-menu-item>
                        <el-submenu index='1-1'>
                            <template slot="title">4，数据类型</template>
                            <el-menu-item index="typeof">1，typof操作符</el-menu-item>
                            <el-menu-item index="undefined">2，Undefined类型</el-menu-item>
                            <el-menu-item index="null">3，Null类型</el-menu-item>
                            <el-menu-item index="boolean">4，Boolean类型</el-menu-item>
                            <el-menu-item index="number">5，Number类型</el-menu-item>
                            <el-menu-item index="string">6，String类型</el-menu-item>
                            <el-menu-item index="symbol">7，Symbol类型(ES6)</el-menu-item>
                            <el-menu-item index="object">8，Object类型</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-2'>
                            <template slot="title">5，操作符</template>
                            <el-menu-item index="yiyuan">1，一元操作符</el-menu-item>
                            <el-menu-item index="wei">2，位操作符</el-menu-item>
                            <el-menu-item index="buer">3，布尔操作符</el-menu-item>
                            <el-menu-item index="chengxing">4，乘性操作符</el-menu-item>
                            <el-menu-item index="zhishu">5，指数操作符(ES7)</el-menu-item>
                            <el-menu-item index="jiaxing">6，加性操作符</el-menu-item>
                            <el-menu-item index="guanxi">7，关系操作符</el-menu-item>
                            <el-menu-item index="xiangdeng">8，相等操作符</el-menu-item>
                            <el-menu-item index="sanmu">9，三目表达式</el-menu-item>
                            <el-menu-item index="fuzhi">10，赋值操作符</el-menu-item>
                            <el-menu-item index="douhao">11，逗号操作符</el-menu-item>
                        </el-submenu>
                        <el-submenu index='1-3'>
                            <template slot="title">6，语句</template>
                            <el-menu-item index="ifyuju">1，if语句</el-menu-item>
                            <el-menu-item index="dowhileyuju">2，do-while语句</el-menu-item>
                            <el-menu-item index="whileyuju">3，while语句</el-menu-item>
                            <el-menu-item index="foryuju">4，for语句</el-menu-item>
                            <el-menu-item index="forinyuju">5，for-in语句</el-menu-item>
                            <el-menu-item index="forofyuju">6，for-of语句(ES7)</el-menu-item>
                            <el-menu-item index="labelyuju">7，label语句</el-menu-item>
                            <el-menu-item index="breakyuju">8，break / continue</el-menu-item>
                            <el-menu-item index="withyuju">9，with语句</el-menu-item>
                            <el-menu-item index="switchyuju">10，switch语句</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="functionbase">7，函数</el-menu-item>
                    </el-submenu>
                    <el-submenu index='2'>
                        <template slot="title">四，变量、作用域与内存</template>
                        <el-menu-item index="yuanshizhi">1，原始值与引用值</el-menu-item>
                        <el-menu-item index="zuoyongyu">2，执行上下文与作用域</el-menu-item>
                        <el-menu-item index="lajihuishou">3，垃圾回收</el-menu-item>
                    </el-submenu>
                    <el-submenu index='3'>
                        <template slot="title">五，基本引用类型</template>
                        <el-menu-item index="date">1，Date</el-menu-item>
                        <el-menu-item index="regexp">2，RegExp</el-menu-item>
                        <el-submenu index='3-1'>
                            <template slot="title">3，原始值包装类型</template>
                            <el-menu-item index="bzboolean">1，Boolean</el-menu-item>
                            <el-menu-item index="bznumber">2，Number</el-menu-item>
                            <el-menu-item index="bzstring">3，String</el-menu-item>
                        </el-submenu>
                        <el-submenu index='3-2'>
                            <template slot="title">4，单例内置对象</template>
                            <el-menu-item index="global">1，Global</el-menu-item>
                            <el-menu-item index="math">2，Math</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index='4'>
                        <template slot="title">六，集合引用类型</template>
                        <el-menu-item index="array">1，Array</el-menu-item>
                        <el-menu-item index="map">2，Map(ES6)</el-menu-item>
                        <el-menu-item index="weakmap">3，WeakMap(ES6)</el-menu-item>
                        <el-menu-item index="set">4，Set(ES6)</el-menu-item>
                        <el-menu-item index="weakset">5，WeakSet(ES6)</el-menu-item>
                    </el-submenu>
                    <el-submenu index='5'>
                        <template slot="title">七，对象 / 类</template>
                        <el-menu-item index="createobject">1，创建对象</el-menu-item>
                        <el-menu-item index="proandmethod">2，方法和属性</el-menu-item>
                        <el-submenu index='5-1'>
                            <template slot="title">3，ES5继承</template>
                            <el-menu-item index="es5proto">1，原型链</el-menu-item>
                            <el-menu-item index="es5jicheng">2，继承</el-menu-item>
                        </el-submenu>
                        <el-submenu index='5-2'>
                            <template slot="title">4，类(ES6)</template>
                            <el-menu-item index="class">1，类</el-menu-item>
                            <el-menu-item index="classjicheng">2，继承</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index='6'>
                        <template slot="title">八，函数</template>
                        <el-submenu index='6-1'>
                            <template slot="title">1，函数</template>
                            <el-menu-item index="createfunction">1，创建函数</el-menu-item>
                            <el-menu-item index="lijiefunction">2，理解函数</el-menu-item>
                            <el-menu-item index="funcproandmethod">3，属性 / 方法</el-menu-item>
                            <el-menu-item index="es6function">4，ES6扩展</el-menu-item>
                        </el-submenu>
                        <el-submenu index='6-2'>
                            <template slot="title">2，Promise(ES6)</template>
                            <el-menu-item index="whatispromise">1，promise是什么</el-menu-item>
                            <el-menu-item index="promisefunction">2，promise构造函数</el-menu-item>
                            <el-menu-item index="promiseshili">3，实例属性和方法</el-menu-item>
                            <el-menu-item index="promisefunctionmethod">4，构造函数方法</el-menu-item>
                            <el-menu-item index="promisequestion">5，几个问题</el-menu-item>
                            <el-menu-item index="writepromise">6，手写promise</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="asyncawait">3，async / await(ES6)</el-menu-item>
                    </el-submenu>
                    <el-submenu index='7'>
                        <template slot="title">九，BOM</template>
                        <el-menu-item index="window_">1，window对象</el-menu-item>
                        <el-menu-item index="location_">2，location对象</el-menu-item>
                        <el-menu-item index="navigator_">3，navigator对象</el-menu-item>
                        <el-menu-item index="screen_">4，screen对象</el-menu-item>
                        <el-menu-item index="histroy_">5，history对象</el-menu-item>
                    </el-submenu>
                    <el-submenu index='8'>
                        <template slot="title">十，DOM</template>
                        <el-menu-item index="getelement">1，获取元素</el-menu-item>
                        <el-menu-item index="documentinfo">2，文档信息</el-menu-item>
                        <el-menu-item index="writedocument">3，写入页面</el-menu-item>
                        <el-menu-item index="elementattr">4，元素与属性</el-menu-item>
                        <el-menu-item index="noderelation">5，节点关系</el-menu-item>
                        <el-menu-item index="handlenode">6，操作节点</el-menu-item>
                        <el-menu-item index="insertcontent">7，插入内容</el-menu-item>
                        <el-menu-item index="positionsize">8，位置尺寸</el-menu-item>
                        <el-menu-item index="classlist">9，classList</el-menu-item>
                        <el-menu-item index="handlestyle">10，操作样式</el-menu-item>
                    </el-submenu>
                    <el-submenu index='9'>
                        <template slot="title">十一，事件</template>
                        <el-menu-item index="eventliu">1，事件流</el-menu-item>
                        <el-menu-item index="eventchengxu">2，事件处理程序</el-menu-item>
                        <el-menu-item index="eventobj">3，事件对象</el-menu-item>
                        <el-menu-item index="eventleixing">4，事件类型</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="iterator">十二，迭代器(ES6)</el-menu-item>
                    <el-menu-item index="generator">十三，生成器(ES6)</el-menu-item>
                    <el-submenu index='10'>
                        <template slot="title">十四，proxy/reflect(ES6)</template>
                        <el-menu-item index="proxy">1，proxy</el-menu-item>
                        <el-menu-item index="reflect">2，reflect</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="es6module">十五，模块化(ES6)</el-menu-item>
                    <el-menu-item index="jsjizhi">十六，javascript执行机制</el-menu-item>
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
.javascript {
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