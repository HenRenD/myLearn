<template>
  <div class="header" :style="{ height: height }">
    <div class="nav">
      <span class="iconfont back hover_" @click="back">&#xe678;</span>
      <span class="iconfont forward hover_" @click="forward">&#xe67b;</span>
      <span @click="toMenu" class="hover_">首页</span>
      <router-link to="/myinfomation">
        <span class="hover_"
          ><i class="iconfont fontStyle">&#xe670;</i>我的信息</span
        >
      </router-link>
      <router-link to="/myproject">
        <span class="hover_"
          ><i class="iconfont fontStyle">&#xe66c;</i>我的项目</span
        >
      </router-link>
      <span @click="toGithub" class="hover_"
        ><i class="iconfont fontStyle">&#xe885;</i>github</span
      >
    </div>
    <div class="search">
      <input type="text" v-model="keyWord" />
      <button class="iconfont" @click="toMDN">&#xeafe;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
  data() {
    return {
      keyWord: "",
      flag: true,
    };
  },
  methods: {
    // 搜索跳转到mdn
    toMDN() {
      if (this.keyWord) {
        window.open(
          `https://developer.mozilla.org/zh-CN/search?q=${this.keyWord}`
        );
        this.keyWord = "";
      } else {
        if (this.flag) {
          this.flag = false;
          this.$message({
            message: "输入不可以为空！",
            iconClass: "none",
            center: true,
            duration: 2000,
          });
          window.timer = setTimeout(() => {
            this.flag = true;
            clearTimeout(window.timer);
          }, 2000);
        }
      }
    },
    // 跳转到github
    toGithub() {
      window.open("https://github.com/HenRenD");
    },
    // 路由前进
    forward() {
      this.$router.forward();
    },
    // 路由后退
    back() {
      this.$router.back();
    },
    // 返回首页
    toMenu() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  background-color: #181a1b;
}
.nav,
.search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.search {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  right: 50px;
  border-radius: 2px;
  padding: 3px 0 3px 10px;
  border: 1px solid #808080;
  background-color: #333;
}
input {
  width: 300px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #eee;
}
button {
  border: none;
  background-color: transparent;
  border-left: 1px solid #808080;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
}
.search .iconfont {
  color: #808080;
}
.nav {
  left: 50px;
  user-select: none;
}
.nav .fontStyle {
  font-size: 16px;
  margin-right: 3px;
  vertical-align: middle;
}
.nav span {
  margin-right: 25px;
  cursor: pointer;
  vertical-align: middle;
}
.nav .forward {
  margin: 0 50px 0 15px;
}
.nav .back {
  padding-left: 0;
}
.hover_ {
  transition: all 0.15s linear;
}
.hover_:hover {
  color: #009acc;
}
</style>
