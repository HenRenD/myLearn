<template>
    <div class="ifyuju">
        <h2><mark>if语句</mark>：</h2>
        <ul>
            <li class="des">流程控制语句</li>
            <li class="des">语法：<mark class="marksec">if (condition) { statement1; } else if (condition) { statement2; } else { statement3 };</mark></li>
            <li class="des">condition不一定是布尔值，系统会调用Boolean()函数转换成布尔值在进行判断</li>
            <li class="des">conditon的值为true时，才会执行代码块里面的内容</li>
            <li class="des">如果要执行的代码块里，只有一行代码，那么花括号可以省略，但是不建议这样做</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    if (10 > 5) {
            console.log(10)
        }
        else if (10 > 20) {
            console.log(20)
        }
        else {
            console.log(5)
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>