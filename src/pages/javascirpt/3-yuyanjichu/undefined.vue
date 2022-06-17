<template>
    <div class="undefined">
        <h2><mark>Undefined</mark>类型：</h2>
        <ul>
            <li class="des">特殊值：undefined</li>
            <li class="des">特殊值的目的：正式明确空对象指针（null）和未初始化变量的区别</li>
            <li class="des">简单数据类型(原始值)</li>
        </ul>
        <h2><mark>Undefined</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>    let a
        // 输出未初始化的变量
        console.log(a)                  // undefined
        console.log(typeof a)      // undefined
        // 输出未定义的变量
        console.log(b)                  // Uncaught ReferenceError: b is not defined 报错
        console.log(typeof b)      // undefined
        // undefined的布尔值
        console.log(Boolean(undefined))         //false</code></pre>
        <ul>
            <li class="des">未初始化的变量：输出结果为：undefined，typepf检测：undefined</li>
            <li class="des">未定义的变量：不可以输出(输出报错)，typeof检测：undefined</li>
            <li class="des">undefined的布尔值：false</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>