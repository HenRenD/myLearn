<template>
    <div class="whileyuju">
        <h2><mark>while语句</mark>：</h2>
        <ul>
            <li class="des">循环语句</li>
            <li class="des">语法：<mark class="marksec">while (condition) { statement };</mark></li>
            <li class="des">while是一种前测试循环语句</li>
            <li class="des">先判断条件，如果条件不符合，可能一次都不会执行</li>
            <li class="des">如果condition为true，会一直执行，一定要避免出现这种‘死循环’情况</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 1
        while (a > 10) {
            console.log('hello world')  //这里条件不满足，一次都不会执行
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>