<template>
  <div class="music">
    <h2>基于Vue3实现的线上音乐播放平台</h2>
    <ul>
      <li class="des">
        偶然间发现了网易云音乐的后端接口，特意去往网易云官网，发现网易云的官网页面多少有点简陋，
        <br />查看了几个别人用vue2写的新页面，正好当时学习完vue3，于是萌生了使用vue3搭建一个新的播放客户端的想法
      </li>
      <li class="des">
        预览地址：<a href="https://my-music-blond.vercel.app" target="blank_"
          >https://my-music-blond.vercel.app
        </a>
      </li>
      <li class="des">
        源码地址：<a href="https://github.com/HenRenD/myMusic" target="blank_"
          >https://github.com/HenRenD/myMusic</a
        >
      </li>
      <li class="des">
        后端接口：<a
          href="https://binaryify.github.io/NeteaseCloudMusicApi"
          target="blank_"
          >https://binaryify.github.io/NeteaseCloudMusicApi</a
        >
      </li>
    </ul>
    <h2>技术栈</h2>
    <ul>
      <li class="des">vue3全家桶</li>
      <li class="des">ElementUi-plus(部分)</li>
      <li class="des">歌词滚动使用了better-scroll</li>
      <li class="des">虚拟滚动提升页面渲染性能</li>
      <li class="des">引入vuex，统一管理歌单数据</li>
    </ul>
    <h2>收获与问题</h2>
    <ul>
      <li class="des">
        收获： <br />通过该项目对vue3的知识点进行了足够深入的学习
        <br />对vuex的使用，让我对vuex的集中式状态管理有了深刻的理解
        <br />介于页面的渲染问题，让我对页面性能的常规优化方法有了一些了解
        <br />定义和复用了一些组件，对组件化的编程有了一定实践
      </li>
      <li class="des">
        问题：
        <br />项目经验还是不够足，部分功能复杂的组件写的过于凌乱，基本没有再次复用的可能性
        <br />大部分组件之间的交互逻辑都写在了组件中，没有写到vuex中的action里，让组件显得十分臃肿
        <br />没有对vuex开启namespace(命名空间)，数据的分类不是很明确
        <br />在技术选型上，如何选取合适的技术解决问题，走了不少弯路
      </li>
    </ul>
    <h2>项目截图</h2>
    <img src="./image/music1.png" alt="" />
    <img src="./image/music2.png" alt="" />
    <img src="./image/music3.png" alt="" />
    <img src="./image/music4.png" alt="" />
    <img src="./image/music5.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: skyblue;
  text-decoration: underline;
}
</style>
