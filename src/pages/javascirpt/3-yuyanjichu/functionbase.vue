<template>
    <div class="functionbase">
        <h2><mark>函数</mark>：</h2>
        <ul>
            <li class="des">语法：<mark class="marksec">function functionName(arg1,arg2...){statement;return;}</mark></li>
            <li class="des">函数使用 <mark class="marksec">function</mark> 关键字声明，后跟一组参数，然后是函数体，通过函数名来调用函数，参数放在括号里</li>
            <li class="des">ECMAScript 中的函数不需要指定是否有返回值，如果不指定返回值，默认返回undefined</li>
            <li class="des">碰到 return 语句，函数就会立即停止执行并退出，一个函数里也可以有多个 return 语句</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 定义一个求和函数
        function sum(a, b) {
            return a + b
            console.log('hello world') //return后面的语句不会执行
        }
        // 调用函数，并接收返回值
        let total = sum(a + b)</code></pre>
        <h2><mark>严格模式下的函数</mark>：</h2>
        <ul>
            <li class="des">函数不能以 eval 或 arguments 作为名称，函数的参数也不能叫 eval 或 arguments</li>
            <li class="des">两个命名参数不能拥有同一个名称</li>
            <li class="des">如果违反上述规则，则会导致语法错误，代码也不会执行</li>
            <li class="des">修改arguments的值，并不会改变命名参数的值，重写arguments的值会导致错误</li>
        </ul>
        <h2><mark>理解参数</mark>：</h2>
        <ul>
            <li class="des">参数在函数内部是利用类数组来表示的</li>
            <li class="des">传递给函数的参数不一定非要是命名参数的个数，没有得到参数的命名参数会被赋予undefined值</li>
            <li class="des">js中的所有参数传递都是值传递，不可能通过引用传递参数</li>
        </ul>
        <h2><mark>arguments对象</mark>：</h2>
        <ul>
            <li class="des">在函数体内部可以通过arguments对象访问参数数组</li>
            <li class="des">arguments对象是一个伪数组，不是Array的实例，可以通过方括号语法访问数组</li>
            <li class="des">可以使用length属性来获取arguments的长度，得知有多少个参数传给了函数</li>
            <li class="des">arguments的值永远与对应命名参数的值保持同步，修改argumengs，命名参数的值也会改变，这种影响是单向的，但这并不能说明他们共同访问同一个内存空间，他们具有独立的内存，但是值会同步</li>
            <li class="des">另外arguments对象的长度是由传入的参数的个数决定的，不是命名参数的个数决定的</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function sum(a, b) {
            console.log(arguments)  // Arguments { 0: 1, 1: 2, 2: 3, … }
        }
        sum(1, 2, 3)</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>