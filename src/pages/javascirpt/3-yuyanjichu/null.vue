<template>
    <div class="null">
        <h2><mark>Null</mark>类型：</h2>
        <ul>
            <li class="des">特殊值：null</li>
            <li class="des">null值表示一个空对象指针，typeof：返回object</li>
            <li class="des">使用null值来初始化对象变量</li>
            <li class="des">简单数据类型(原始值)</li>
        </ul>
        <h2><mark>Null</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>    let a   //未初始化变量
        let b = null   //未初始化的对象
        console.log(typeof a)   // undefined
        console.log(typeof b)   // object
        // undefined派生自null(这里采用的不是严格相等)
        console.log(undefined == null)   // true
        // null的布尔值
        console.log(Boolean(null))   // false</code></pre>
        <ul>
            <li class="des">undefined派生自null</li>
            <li class="des">null的布尔值：false</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>