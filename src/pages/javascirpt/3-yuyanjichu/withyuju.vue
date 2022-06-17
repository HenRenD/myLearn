<template>
    <div class="withyuju">
        <h2><mark>with语句</mark>：</h2>
        <ul>
            <li class="des">with语句的作用是将代码的作用域设置到一个特定的对象中</li>
            <li class="des">语法：<mark class="marksec">with (expression) { statement };</mark></li>
            <li class="des">with语句的应用场景是针对一个对象反复操作</li>
            <li class="des">with 语句影响性能且难于调试其中的代码，不推荐在产品代码中使用 with语句</li>
            <li class="des">在严格模式下使用with会报语法错误</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let qs = location.search.substring
        let hostName = location.hostName
        let url = location.href
        // 使用with
        with (location) {
            let qs = search.sunstring
            let hostName = hostName
            let url = href
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>