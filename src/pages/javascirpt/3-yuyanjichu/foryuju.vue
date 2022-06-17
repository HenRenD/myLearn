<template>
    <div class="foryuju">
        <h2><mark>for语句</mark>：</h2>
        <ul>
            <li class="des">循环语句</li>
            <li class="des">语法：<mark class="marksec">for (初始化变量；condition；循环后表达式) { statement };</mark></li>
            <li class="des">for语句也是一种前测试循环语句</li>
            <li class="des">但是在循环开始之前，要初始化变量和定义循环后要执行的代码</li>
            <li class="des">for和while的能实现的功能都是一样的，只是各自的应用场景不同</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    for (let i = 0; i &lt; 10; i++) {
            console.log('hello world')  // 这里会执行10次
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>