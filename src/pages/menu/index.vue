<template>
  <div class="menu">
    <div class="content">
      <ul>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>HTML</span>
          </div>
          <router-link to="/html">
            <div class="body">
              <span class="iconfont">&#xe617;</span>
              <span>HTML,超文本标记语言，即Hyper Text Markup Language</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>CSS</span>
          </div>
          <router-link to="/css">
            <div class="body">
              <span class="iconfont">&#xe614;</span>
              <span>CSS,层叠样式表Cascading Style Sheets</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Javascript</span>
          </div>
          <router-link to="/javascript">
            <div class="body">
              <span class="iconfont">&#xe7bf;</span>
              <span>Javascript,互联网最流行的脚本语言</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>HTTP</span>
          </div>
          <router-link to="/http">
            <div class="body">
              <span class="iconfont">&#xe60d;</span>
              <span>Http,超文本传输协议，即Hyper Text Tranfer Protocao</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Ajax</span>
          </div>
          <router-link to="/ajax">
            <div class="body">
              <span class="iconfont">&#xe602;</span>
              <span
                >Asynchronous Javascript And
                XML,在无需重新加载整个网页，更新部分网页的技术</span
              >
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Webpack</span>
          </div>
          <router-link to="/webpack">
            <div class="body">
              <span class="iconfont">&#xf536;</span>
              <span
                >Webpack,是一个用于现代Javascript应用程序的静态模块打包器</span
              >
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Vue2</span>
          </div>
          <router-link to="/vue2">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>Vue,是一套用于构建用户界面的渐进式Javascript框架</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Vue2生命周期</span>
          </div>
          <router-link to="/vue2life">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>Vue2生命周期图</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Vue-Cli</span>
          </div>
          <router-link to="/vuecli">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>Vue-cli，脚手架</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>VueRouter</span>
          </div>
          <router-link to="vuerouter">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>VueRouter,Vue官方的路由管理器</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Vuex</span>
          </div>
          <router-link to="/vuex">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>Vuex,Vue中的集中式状态管理</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Vue3</span>
          </div>
          <a href="./Vue3.html" target="blank_">
            <div class="body">
              <span class="iconfont">&#xe61b;</span>
              <span>Vue的3.x版本</span>
            </div>
          </a>
        </li>
        <li>
          <div class="head">
            <span class="iconfont">&#xe600;</span>
            <span>Git</span>
          </div>
          <router-link to="/git">
            <div class="body">
              <span class="iconfont">&#xeb9f;</span>
              <span>Git,版本控制工具</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
}
.content {
  width: 100%;
  background-color: #181a1b;
  box-shadow: 0 0 1px #ddd;
  height: 100%;
  overflow-y: auto;
}
.content ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 25px;
  box-sizing: border-box;
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
.content ul li {
  width: 49%;
  margin-bottom: 20px;
}
.head {
  width: 100%;
  border-bottom: 1px solid #808080;
  margin-bottom: 15px;
}
.head span:last-child {
  margin-left: 5px;
  font-size: 15px;
  font-weight: 1000;
}
.body {
  display: flex;
  width: 55%;
  background-color: #333;
  padding: 30px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.body span:first-child {
  font-size: 50px;
  line-height: 50px;
  margin-right: 15px;
}
.body span:last-child {
  text-align: left;
}
.body:hover {
  background-color: #555;
}
</style>
