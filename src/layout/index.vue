<template>
  <div class="layout">
    <Header :height="'8%'"></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
  components: { Header },
};
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
}
.content {
  overflow-y: auto;
  width: 100%;
  height: 92%;
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
</style>
