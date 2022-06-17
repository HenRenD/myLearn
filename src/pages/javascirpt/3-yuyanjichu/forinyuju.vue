<template>
    <div class="forinyuju">
        <h2><mark>for-in语句</mark>：</h2>
        <ul>
            <li class="des">for-in语句是一种精准的迭代语句，可以用来枚举对象的非符号属性</li>
            <li class="des">语法：<mark class="marksec">for (属性 in 对象) { statement };</mark></li>
            <li class="des">在ES3中，如果属性的值为null或者undefined会报错</li>
            <li class="des">ECMAScript 中对象的属性是无序的，因此 for-in 语句不能保证返回对象属性的顺序</li>
            <li class="des">ES5更正了这一行为，不再报错，而只是不执行循环体，保证最大限度的兼容性</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const obj = {
            name: 'henren',
            age: 20,
            address: 'beidou',
            [Symbol()]: '符号'
        }
        for (let once in obj) {
            console.log(once)   // name，age，address并不会列出符号属性
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>