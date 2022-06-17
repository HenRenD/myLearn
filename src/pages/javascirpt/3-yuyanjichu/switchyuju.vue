<template>
    <div class="switchyuju">
        <h2><mark>switch语句</mark>：</h2>
        <ul>
            <li class="des">switch语句与if语句关系最为密切，是一种普遍使用的流控制语句</li>
            <li class="des">语法：<mark class="marksec">switch(expression){case value1:statement2 break;case value2:statement2 default:statement}</mark></li>
            <li class="des">如果表达式的求值等于case里面value值，则会执行当前case里面的代码，最后用break终止switch</li>
            <li class="des">js中的switch语句，表达式可以是任何类型的数据，不像别的语言里只能是数字</li>
            <li class="des">case的值也不一定是常量，可以是变量，甚至表达式</li>
            <li class="des">switch语句在比较的时候，使用的是全等操作符，因此不存在类型转换</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10
        switch (a * 10) {
            case 100:
                console.log(100)   // 输出100
                break;
            case 200:
                console.log(200)
                break;
            case 300:
                console.log(300)
                break;
            defalut:
                console.log('默认值')
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>