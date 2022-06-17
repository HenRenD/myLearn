<template>
    <div class="boolean">
        <h2><mark>Boolean</mark>类型：</h2>
        <ul>
            <li class="des">有两个字面值：true 和 false</li>
            <li class="des">ECMAScript 类型的值都有相应布尔值</li>
            <li class="des">简单数据类型(原始值)</li>
        </ul>
        <h2><mark>Boolean()</mark>转型函数：</h2>
        <ul>
            <li class="des">可以在任意类型的数据上调用，始终返回一个布尔值</li>
            <li class="des">if 等流控制语句会自动执行其他类型值到布尔值的转换</li>
            <li class="des">
                <h3><mark class="marksec">转换规则</mark>：</h3>
                String：非空字符串：true，空字符串：false
                <br>Number：非零数值（包括无穷值）：true，0、NaN：false
                <br>Object：任意对象：true
                <br>Null：false
                <br>Undefined：false
            </li>
        </ul>
        <h2><mark>Boolean</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        // Boolean函数
            //字符串
            console.log(Boolean('hello world'))         // true
            console.log(Boolean(''))        //false
            //数字
            console.log(Boolean(0))         //false
            console.log(Boolean(NaN))       //false
            console.log(Boolean(10))        //true
            //对象
            console.log(Boolean({}))        //true
            console.log(Boolean(null))      //false
            //undefined
            console.log(Boolean(undefined))         //false
            //if等控制语句会自动执行布尔转换
            if (10) {
                console.log('hello world')      // hello world
            }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>