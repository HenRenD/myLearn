<template>
    <div class="whatispromise">
        <h2><mark>什么是promise</mark>：</h2>
        <ul>
            <li class="des">Promise 是一门新的技术(ES6 规范)
                <br>Promise 是 JS 中进行异步编程的新解决方案
                <br>旧方案是单纯使用回调函数
            </li>
            <li class="des">从语法上来说：Promise 是一个构造函数
                <br>从功能上来说：promise 对象用来封装一个异步操作并可以获取其成功/失败的结果值
            </li>
        </ul>
        <h2><mark>promise的流程</mark>：</h2>
        <img src="../../svg/promisezhixing.svg" alt="">
        <h2><mark>实例</mark>：</h2>
        <pre class="contentarea" v-highlight><code>    let p = new Promise((resolve, reject) => {
            resolve('hello')
        })
        p.then((resolve) => {
            console.log(resolve)    // hello
        })</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
    width: 100%;
}
</style>