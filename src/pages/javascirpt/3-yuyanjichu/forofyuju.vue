<template>
    <div class="forofyuju">
        <h2><mark>for-of语句</mark>：</h2>
        <ul>
            <li class="des">是一种严格的迭代语句，用于遍历可迭代对象的元素</li>
            <li class="des">语法：<mark class="marksec">for ( result of iterable) { statement };</mark></li>
            <li class="des">其功能用for语句也可以实现，只是更简洁了</li>
            <li class="des">该方法只能取得值，不能得到索引</li>
            <li class="des">for-of 循环会按照可迭代对象的 next()方法产生值的顺序迭代元素</li>
            <li class="des">如果尝试迭代的变量不支持迭代，则 for-of 语句会抛出错误</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        for (let once of arr) {
            console.log(once)  // 1 2 3 4 5
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>