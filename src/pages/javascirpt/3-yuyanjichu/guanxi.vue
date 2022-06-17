<template>
    <div class="guanxi">
        <h2><mark>关系操作符</mark>：</h2>
        <ul>
            <li class="des">比较两个值，返回值是布尔值</li>
            <li class="des">存在隐式转换，规则与<mark class="marksec">Number()</mark>函数一致</li>
            <li class="des">比较规则：
                <br>两个操作数都是数值，则执行数值比较
                <br>如果两个操作数都是字符串，则比较的是两个字符串对应的字符编码值
                <br>如果是对象，则调用valueOf()/toString()
            </li>
            <li class="des">比较字符串时的奇怪现象：
                <br>如果字符串没有统一大小写，则会比较字符串第一个字母的字符编码值，如果第一个相同，则比较第二个
                <br>如果字符串统一了大小写，则会比较字符串字母在字母表中的位置，谁靠前，谁就小
            </li>
            <li class="des">知识点：
                <br><mark class='marksec'>小于(&lt;)</mark>
                <br><mark class='marksec'>大于(>)</mark>
                <br><mark class='marksec'>小于等于(&lt;=)</mark>
                <br><mark class='marksec'>大于等于(>=)</mark>
            </li>
        </ul>
        <h2><mark>大于 / 小于</mark>：</h2>
        <ul>
            <li class="des">大于使用操作符：<mark class="marksec">></mark></li>
            <li class="des">小于使用操作符：<mark class="marksec">&lt;</mark></li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 > 5)         // true
        console.log(10 &lt; 5)         // false</code></pre>
        <h2><mark>大于等于 / 小于等于</mark>：</h2>
        <ul>
            <li class="des">大于等于使用操作符：<mark class="marksec">>=</mark></li>
            <li class="des">小于等于使用操作符：<mark class="marksec">&lt;=</mark></li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 >= 5)         // true
        console.log(10 &lt;= 5)         // true</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>