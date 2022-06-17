<template>
    <div class="myinfomation">
        <div class="info">
            <div class="content">
                <ul>
                    <li>
                        <h2>基本信息</h2>
                        <ul class="basicinfo">
                            <li>姓名：丁运功</li>
                            <li>年龄：25</li>
                            <li>学历：<a href="https://www.baidu.com/s?wd=%E6%96%B0%E7%96%86%E5%A4%A7%E5%AD%A6" target="blank_">新疆大学</a> | 211</li>
                            <li>工作经验：1年以内</li>
                            <li>联系方式：15237615103 | 1873150671@qq.com</li>
                        </ul>
                    </li>
                    <li>
                        <h2>求职意向</h2>
                        <ul class="basicinfo">
                            <li>岗位：web前端开发</li>
                            <li>地点：上海市</li>
                            <li>薪资：面议</li>
                            <li>工作性质：全职</li>
                        </ul>
                    </li>
                    <li>
                        <h2>专业技能</h2>
                        <ul class="basicinfo">
                            <li>能够使用HTML+CSS还原设计稿，熟悉HTML5新特性以及语义化，掌握CSS3过渡、动画以及flex布局。</li>
                            <li>掌握原生JS基础，深入理解原型链、闭包、作用域链、继承等JS原理，熟悉JS执行机制。</li>
                            <li>熟悉ES6新特性，掌握Promise、async等异步编程解决方案。</li>
                            <li>熟悉http协议，掌握AJAX、AXIOS，能够同后端完成数据交互。</li>
                            <li>掌握Vue框架，能够使用相关生态和UI组件库，独立搭建项目。</li>
                            <li>能够使用Webpack打包和优化项目，熟悉git版本管理工具的使用。</li>
                        </ul>
                    </li>
                    <li>
                        <h2>项目经验</h2>
                        <ul class="basicinfo project">
                            <li>项目名称：<span class="projecttitle">线上音乐播放平台 &nbsp;&nbsp;&nbsp;&nbsp;2021.09-2021.10</span></li>
                            <li>项目描述：基于Vue3全家桶，Element-plus实现的PC端线上音乐播放平台，后端接口使用网易云接口</li>
                            <li>项目内容：实现发现音乐、推荐歌单、新歌速递、最新mv、歌曲搜索、待播放歌单、播放歌曲详情、mv播放详情等模块，实现自定义播放器。</li>
                            <li>项目要点：
                                <br><span class="projectde">1，管理多页面待播放歌曲状态：最开始是歌单页面和播放组件之间的交互，
                                    点击播放之后，应该将获取回来的歌曲播放url以及相应的歌曲信息交给播放组件，用以播放和渲染。这是兄弟组件之间的交互行为，
                                    最开始我想到可以利用自定义事件或者全局事件总线或者消息的订阅与发布来解决这一问题，这样是可以实现的。但是随着页面的增多，
                                    越来越多的组件想要和播放组件之间具有交互的行为，这样一来上面的几种方式导致组件的内部逻辑十分的混乱，并且随着开发的深入，其他组件之间
                                    也需要各自的交互行为，显然上面的方式对于当前的场景来说已经显得过于繁琐和凌乱，此时迫切需要一种能够将所有的共享状态统一管理的技术，
                                    于是我引入了Vuex。将所有的歌曲信息、获取的播放url统一交给Vuex管理，以及其他的一些状态，在组件的内部只进行简单的Dispatch或者Commit。
                                    这样一来，组件内部的逻辑清晰了很多，也利于组件的复用，同时解决了各个组件之间的交互行为。
                                </span>
                                <br><span class="projectde">2，优化歌曲列表的渲染：起初我并没有意识到这个问题，刚开始渲染的歌曲数目比较少，图片也比较少，并没有感觉到页面的渲染对
                                    实际体验所带来的影响。随着开发进行到歌单列表时，往往会返回300-400条歌曲信息，意味着一个页面中要渲染300-400条数据，包含300-400张图片，并且返回的数据
                                    没有做分页处理，只能一次性渲染完毕。此时我发现，一次性渲染这么多内容，对浏览器的性能消耗是十分巨大的，因为我的开发电脑性能本就不是很好，可以感觉到明显的卡顿和掉帧。
                                    如何优化页面的渲染，提升使用体验，是一个需要解决的问题。经过查询和研究，最终确定了方案：根据屏幕的高度截取一部分返回的数据用于渲染，监视滚动行为不断改变
                                    截取的startIndex和endIndex。但是在实际操作中发现，如果只截取一部分数据，页面是不会出现滚动条的，只有将所有的数据填充到页面上，才会出现滚动条，才可以滚动。此时我想到
                                    能否用空白分别填充上边和下边，将“列表盒子”给撑起来，使其出现滚动条达到能够滚动的效果，实际效果是可行的。上下分别填充startIndex * li.height和(total - endIndex) * li.height的padding，
                                    成功解决该问题。通过Performance实测，页面的渲染性能提升明显，卡顿和掉帧现象也得到相当程度的解决，体验更好了。
                                </span>
                            </li>
                            <li>预览地址：<a href="http://43.129.200.251/music.html" target="blank_">http://43.129.200.251/music.html</a></li>
                            <li class="end">源码地址：<a href="https://github.com/HenRenD/myMusic" target="blank_">https://github.com/HenRenD/myMusic</a></li>
                            <li>项目名称：<span class="projecttitle">SPA电商后台管理系统 &nbsp;&nbsp;&nbsp;&nbsp;2021.08-2021.09</span></li>
                            <li>项目描述：基于Vue2、VueRouter、Element-ui实现的电商的后台管理</li>
                            <li>项目内容：主要实现用户登录、用户管理、权限管理、商品管理、订单管理等模块</li>
                            <li>项目要点：
                                <br><span class="projectde">1，不同角色的权限管理：权限管理可以在前端处理，把所有的权限都保存在前端，通过后端返回的角色，渲染对应的权限，展示对应的功能。
                                    在本项目中并不是采用该方式，该项目中后端接口会根据不同的角色返回不同的路由路径，直接以此配置路由，实现不同角色展示不同的权限。
                                </span>
                                <br><span class="projectde">2，保存登录的状态：该后台页面是在登录之后才有权限访问，需要保持登录状态并在页面刷新后状态不丢失。将登录之后返回的token值保存在本地的sessionStorage中，
                                    添加请求拦截器，在每次请求发送之前，从sessionStorage中读取token值并将其添加到请求头中，以保证后续的请求都是在登录状态。
                                </span>
                            </li>
                            <li>预览地址：<a href="http://43.129.200.251/shop.html" target="blank_">http://43.129.200.251/shop.html</a></li>
                            <li class="end">源码地址：<a href="https://github.com/HenRenD/vue_shop" target="blank_">https://github.com/HenRenD/vue_shop</a></li>
                            <li>项目名称：<span class="projecttitle">个人博客</span></li>
                            <li>项目描述：基于Vue2、VueRouter、Element-ui实现的个人学习博客，主要对我所学习的技术栈进行总结</li>
                            <li>预览地址：<a href="http://43.129.200.251/index.html" target="blank_">http://43.129.200.251/index.html</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>工作经历</h2>
                        <ul class="job">
                            <li>中国核工业华兴建设有限公司</li>
                            <li>技术员</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.myinfomation {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.info {
    width: 100%;
    height: 100%;
    background-color: #181a1b;
    overflow-y: auto;
}
.info::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.info::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #808080;
}
.info .content {
    width: 70%;
    height: 100%;
    margin: 0 auto;
}
.basicinfo li {
    font-size: 15px;
    line-height: 30px;
    padding: 0 50px;
    list-style: inside;
}
.basicinfo li a {
    text-decoration: underline;
    color: skyblue;
}
.project {
    overflow: hidden;
}
.project li {
    padding: 0;
    margin-left: 50px;
    list-style: none;
}
.end {
    border-bottom: 1px solid #777;
    padding-bottom: 5px;
}
.projecttitle {
    font-weight: 1000;
    font-size: 18px;
}
.projectde {
    margin-left: 60px;
}
.job {
    display: flex;
    justify-content: space-between;
}
.job li {
    font-size: 16px;
    margin-left: 50px;
}
.pinjia li {
    margin-left: 50px;
    font-size: 16px;
}
</style>